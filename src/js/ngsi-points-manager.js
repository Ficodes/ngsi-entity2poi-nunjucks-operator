/*
 * Copyright (c) 2020 Future Internet Consulting and Development Solutions S.L.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import Schema from './schema.js'
import { parseInputEndpointData, processLocation, modelToJsonKeyValue } from './utils.js'
import ngsiDatamodelPointer from './ngsi-datamodel2-pointers.js'

export default class NgsiPointsManager {
    constructor() {
        this._schemas = new Map()
        this._rules = new Map()
        this._views = new Map()
    }

    addSchemas(schemas = []) {
        if (!Array.isArray(schemas)) {schemas = [schemas]}
        schemas.map(schema => {
            const sch = (schema instanceof Schema) ? schema : new Schema(schema)
            this._schemas.set(sch.type, sch)
        })
    }

    getSchema(id) {
        return this._schemas.get(id)
    }

    getSchemas() {
        return this._schemas.entries()
    }

    getRules() {
        return this._rules.entries()
    }

    removeSchema(id) {
        this._schemas.delete(id)
        this._rules.delete(id)
    }

    async getPoints(entities) {
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

    async getPoint(entity) {
        if (this._rules.get(entity.type)) {
            const rules = this._rules.get(entity.type)
            const keyValueEntity = modelToJsonKeyValue(entity)
            return ngsiDatamodelPointer(rules, processLocation(keyValueEntity), entity)
        }
    }

    async loadSchemas() {
        for (const [key, value] of this._schemas.entries()) {
            if (!this._rules.get(key)) {
                const response = await fetch(value.schema, { method: 'GET', mode: 'cors' })
                const jsonSchema = await response.json()
                this._rules.set(key, jsonSchema)
            }
        }
    }
    async loadSchema(type) {
        let schema = this._schemas.get(type)
        if (!this._rules.get(type)) {
            const response = await fetch(schema.schema, { method: 'GET', mode: 'cors' })
            const jsonSchema = await response.json()
            this._rules.set(type, jsonSchema)
        }
    }
}
