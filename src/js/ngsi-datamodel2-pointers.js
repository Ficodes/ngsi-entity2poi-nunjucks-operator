import RenderTemplate from './template-engine.js'
import { Engine } from 'json-rules-engine'
import { JSONPath } from 'jsonpath-plus'
import { internalUrl } from './utils.js'

export const buildEngine = function () {
  const engine = new Engine()
  engine.addOperator('hasProperty', (factValue, jsonValue) => {
    return factValue.hasOwnProperty && factValue.hasOwnProperty(jsonValue)
  })
  engine.addFact('existProp', (params, almanac) => {
    return almanac.factValue(params.property)
      .then((pro) => {
        return true
      }).catch((e) => {
        return false
      })
  })
  return engine
}

export default async function NgsiDatamodelPointer (schema, keyValueEntity, entity) {
  const poi = {}

  for (const key in schema) {
    if (Object.prototype.hasOwnProperty.call(schema[key], 'rules')) {
      const engine = buildEngine()

      schema[key].rules.map((rule) => {
        engine.addRule(rule)
      })

      engine.on('existProp', (params, almanac, ruleResult) => {
        if (params && Object.prototype.hasOwnProperty.call(params, 'success')) {
          poi[key] = params.success
          engine.stop()
        }
        almanac.addRuntimeFact(ruleResult.name, null)
      })

      engine.on('failure', (event, almanac, ruleResult) => {
        if (event.params && Object.prototype.hasOwnProperty.call(event.params, 'failure')) {
          poi[key] = event.params.failure
          engine.stop()
        }
      })

      const result = await engine.run(keyValueEntity)
      if (result && Object.prototype.hasOwnProperty.call(result, 'events') && result.events.length) {
        result.events.every((event) => {
          if (event.params && Object.prototype.hasOwnProperty.call(event.params, 'success')) {
            poi[key] = event.params.success
            return false
          }
          return true
        })
      } else {
        if (Object.prototype.hasOwnProperty.call(schema[key], 'default')) poi[key] = schema[key].default
      }
    } else {
      const patt = /^{%(.*%})?$/
      if (patt.test(schema[key])) {
        poi[key] = RenderTemplate(schema[key].substring(2, schema[key].length - 2), keyValueEntity)
      } else if (Array.isArray(schema[key])) {
        schema[key].map((val) => {
          const value = JSONPath({ wrap: false, path: val, json: keyValueEntity })
          if (value) {
            poi[key] = value
          }
        })
      } else {
        if (key === 'data') {
          poi[key] = entity
        } else {
          poi[key] = JSONPath({ wrap: false, path: schema[key], json: keyValueEntity })
        }
      }
    }
  }
  poi.icon = {
    anchor: [0.5, 1],
    scale: 0.4,
    src: internalUrl(poi.icon)
  }
  return poi
}
