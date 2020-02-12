'use strict'

import { modelToJsonKeyValue, parseInputEndpointData, processLocation, buldHtmlAddress } from '../src/js/utils.js'
import { entityWitPolygonLocation, entityWitPointLocation, ngsiLDModel, ngsiModelNormalized, ngsiModelKeyValue } from './data/models.js'
import { ngsiLDModelExpected, ngsiModelNormalizedExpected, ngsiModelKeyValueExpected } from './data/expected.js'
describe('Test Utils Functions', () => {
  it('test parseInputEndpointData null param', () => {
    expect(() => parseInputEndpointData(null)).to.throw('Incorrect data')
  })
  it('test parseInputEndpointData not object param', () => {
    expect(() => parseInputEndpointData(1)).to.throw('Incorrect data')
    expect(() => parseInputEndpointData(undefined)).to.throw('Incorrect data')
    expect(() => parseInputEndpointData(true)).to.throw('Incorrect data')
    expect(() => parseInputEndpointData(false)).to.throw('Incorrect data')
  })
  it('test parseInputEndpointData string not json param', () => {
    expect(() => parseInputEndpointData('foo')).to.throw('Error parsing data')
  })
  it('test parseInputEndpointData null param', () => {
    expect(() => parseInputEndpointData(null)).to.throw('Incorrect data')
  })
  it('test processLocation polygon', () => {
    const entity = entityWitPolygonLocation
    const expected = processLocation(entity)
    expect(expected.currentLocation).to.be.an('Object')
    expect(expected.currentLocation).to.eql({ system: 'WGS84', lng: 10, lat: 0 })
  })
  it('test processLocation Point', () => {
    const entity = entityWitPointLocation
    const expected = processLocation(entity)
    expect(expected.currentLocation).to.be.an('Object')
    expect(expected.currentLocation).to.eql({ system: 'WGS84', lng: -8.60961198807, lat: 41.150691773 })
  })
  it('test modelToJsonKeyValue ngsi LD', () => {
    expect(modelToJsonKeyValue(ngsiLDModel)).to.eql(ngsiLDModelExpected)
  })
  it('test modelToJsonKeyValue ngsi NORMALIZED', () => {
    expect(modelToJsonKeyValue(ngsiModelNormalized)).to.eql(ngsiModelNormalizedExpected)
  })
  it('test modelToJsonKeyValue ngsi keyvalue', () => {
    expect(modelToJsonKeyValue(ngsiModelKeyValue)).to.eql(ngsiModelKeyValueExpected)
  })
  it('test buldHtmlAddress', () => {
    const address = {
      'streetAddress': 'Rua de Fernandes Tomás',
      'addressLocality': 'Porto',
      'addressCountry': 'Portugal'
    }
    const expected = buldHtmlAddress(address)
    expect(expected).to.be.equal('<p><b><i class="fa fa-fw fa-address-card"></i> Address: </b><br/>Rua de Fernandes Tomás<br/>Porto,<br/>Portugal</p>')
  })
})
