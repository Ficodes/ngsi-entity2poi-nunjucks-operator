'use strict'
import Schema from './schema.js'
import { parseInputEndpointData, processLocation, modelToJsonKeyValue } from './utils.js'
import NgsiDatamodelPointer from './ngsi-datamodel2-pointers.js'

export default class NgsiPointsManager {
  constructor () {
    this._schemas = new Map()
    this._rules = new Map()
    this._views = new Map()
  }

  addSchemas (schemas = []) {
    if (!Array.isArray(schemas)) schemas = [schemas]
    schemas.map(schema => {
      const sch = (schema instanceof Schema) ? schema : new Schema(schema)
      this._schemas.set(sch.type, sch)
    })
  }

  getSchema (id) {
    return this._schemas.get(id)
  }

  getSchemas () {
    return this._schemas.entries()
  }

  getRules () {
    return this._rules.entries()
  }

  removeSchema (id) {
    this._schemas.delete(id)
    this._rules.delete(id)
  }

  async getPoints (entities) {
    entities = parseInputEndpointData(entities)
    const entitiesResult = []
    if (!Array.isArray(entities)) {
      entities = [entities]
    }
    for (let i = 0; i < entities.length; i++) {
      await this.loadSchema(entities[i].type)
      if (Object.prototype.hasOwnProperty.call(entities[i], 'type')) {
        if (this._rules.get(entities[i].type)) {
          entitiesResult.push(await this.getPoint(entities[i]))
        }
      }
    }
    return entitiesResult
  }

  async getPoint (entity) {
    if (this._rules.get(entity.type)) {
      const rules = this._rules.get(entity.type)
      const keyValueEntity = modelToJsonKeyValue(entity)
      return await NgsiDatamodelPointer(rules, processLocation(keyValueEntity), entity)
    }
  }

  async loadSchemas () {
    for (const [key, value] of this._schemas.entries()) {
      if (!this._rules.get(key)) {
        const response = await fetch(value.schema, { method: 'GET', mode: 'cors' })
        const jsonSchema = await response.json()
        this._rules.set(key, jsonSchema)
      }
    }
  }
  async loadSchema (type) {
    let schema = this._schemas.get(type)
    if (!this._rules.get(type)) {
      const response = await fetch(schema.schema, { method: 'GET', mode: 'cors' })
      const jsonSchema = await response.json()
      this._rules.set(type, jsonSchema)
    }
  }
}
