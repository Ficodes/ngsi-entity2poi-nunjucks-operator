export default class Schema {
  constructor (options) {
    if (!options) throw new Error('Schema: constructor options required')
    if (!Object.prototype.hasOwnProperty.call(options, 'type') || options.type === '') throw new Error('Schema: options   requires "type" property')
    if (!Object.prototype.hasOwnProperty.call(options, 'schema') || options.schema === '') throw new Error('Schema: options  requires "schema" property')
    this._type = options.type
    this._schema = options.schema
  }

  get type () {
    return this._type
  }

  set type (value) {
    this._type = value
  }

  get schema () {
    return this._schema
  }

  set schema (value) {
    this._schema = value
  }
}
