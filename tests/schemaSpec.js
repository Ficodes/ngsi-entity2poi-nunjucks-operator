import Schema from '../src/js/schema.js'

describe('Test Schema Model', () => {
  it('test  Schema validation without template property throw error', () => {
    expect(() => new Schema({})).to.throw('Schema: options   requires "type" property')
  })
  it('test  Schema validation without without schema property throw error ', () => {
    expect(() => new Schema({ type: 'OffStreetParking' })).to.throw('Schema: options  requires "schema" property')
  })
  it('test SchemaLoader validate add schema no error ', () => {
    expect(() => { new Schema({ type: 'OffStreetParking', schema: 'http://127.0.0.1:8080/schemas/off-street-parking.json' }) }).to.not.throw()
  })
})
