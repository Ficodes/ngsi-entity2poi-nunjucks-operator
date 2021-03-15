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



import { modelToJsonKeyValue, parseInputEndpointData, processLocation, buldHtmlAddress } from '../src/js/utils.js'
import { entityWitLandLocation, entityWitPolygonLocation, entityWitPointLocation, ngsiLDModel, ngsiLDmodelWithRelations, ngsiModelNormalized, ngsiModelKeyValue } from './data/models.js'
import { ngsiLDModelExpected, ngsiModelWithRelationsExpected, ngsiModelNormalizedExpected, ngsiModelKeyValueExpected } from './data/expected.js'
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
    it('test processLandLocation', () => {
        const entity = entityWitLandLocation
        const expected = processLocation(entity)
        expect(expected.currentLocation).to.be.an('Object')
        expect(expected.currentLocation).to.eql({ system: 'WGS84', lng: 100, lat: 0 })
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
    it('test modelToJsonKeyValue ngsi LD WithRelations', () => {
        expect(modelToJsonKeyValue(ngsiLDmodelWithRelations)).to.eql(ngsiModelWithRelationsExpected)
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
