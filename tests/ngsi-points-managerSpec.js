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


import NgsiPointsManager from '../src/js/ngsi-points-manager.js'
import Schema from '../src/js/schema.js'
import sinon from 'sinon'
import { offStreetParkingSchema } from './data/schemas.js'
import { MOCK_VIEW } from './data/views.js'
function jsonOk(body) {
    const mockResponse = new window.Response(JSON.stringify(body), { // the fetch API returns a resolved window Response object
        status: 200,
        headers: {
            'Content-type': 'application/json'
        }
    })

    return Promise.resolve(mockResponse)
}
function viewOk(body) {
    const mockResponse = new window.Response(MOCK_VIEW, { // the fetch API returns a resolved window Response object
        status: 200,
        headers: {
            'Content-type': 'text/html'
        }
    })

    return Promise.resolve(mockResponse)
}

describe('Test SchemaLoader Results', () => {
    beforeEach(() => {
        let stub = sinon.stub(window, 'fetch') // add stub
        stub.onCall(0).returns(jsonOk(offStreetParkingSchema))
        stub.onCall(1).returns(viewOk(MOCK_VIEW))
    })
    afterEach(() => {
        window.fetch.restore() // remove stub
    })
    it('test NgsiPointsManager load Schema success ', async () => {
        const ngsiPointsManager = new NgsiPointsManager()
        ngsiPointsManager.addSchemas([{ type: 'OffStreetParking', schema: 'http://127.0.0.1:8080/schemas/off-street-parking.json' }])
        await ngsiPointsManager.loadSchemas()
        const rules = ngsiPointsManager.getRules()
        expect(rules.next().value[1]).to.have.property('id')
    })

    it('test NgsiPointsManager add Schema non array ', async () => {
        const ngsiPointsManager = new NgsiPointsManager()
        ngsiPointsManager.addSchemas({ type: 'OffStreetParking', schema: 'http://127.0.0.1:8080/schemas/off-street-parking.json' })
        const schemas = ngsiPointsManager.getSchemas()
        const schema = schemas.next().value[1]
        expect(schema).to.be.an.instanceof(Schema)
        expect(schema.type).to.be.equal('OffStreetParking')
    })
    it('test NgsiPointsManager add Schema array ', async () => {
        const ngsiPointsManager = new NgsiPointsManager()
        ngsiPointsManager.addSchemas([{ type: 'OffStreetParking', schema: 'http://127.0.0.1:8080/schemas/off-street-parking.json' }])
        const schemas = ngsiPointsManager.getSchemas()
        const schema = schemas.next().value[1]
        expect(schema).to.be.an.instanceof(Schema)
        expect(schema.type).to.be.equal('OffStreetParking')
    })
    it('test NgsiPointsManager getPoints', async () => {
        const ngsiPointsManager = new NgsiPointsManager()
        ngsiPointsManager.addSchemas([{ type: 'OffStreetParking', schema: 'http://127.0.0.1:8080/schemas/off-street-parking.json' }])
        await ngsiPointsManager.loadSchemas()
        const points = await ngsiPointsManager.getPoints([{
            'id': '1',
            'type': 'OffStreetParking',
            'location': {
                'coordinates': [
                    -8.60961198807,
                    41.150691773
                ],
                'type': 'Point'
            },
            'name': 'Parque de estacionamento Trindade',
            'description': 'Municipal car park located near the Trindade metro station and the Town Hall',
            'availableSpotNumber': 100,
            'address': {
                'streetAddress': 'Rua de Fernandes Tomás',
                'addressLocality': 'Porto',
                'addressCountry': 'Portugal'
            },
            'dateModified': '2016-06-02T09:25:55.00Z',
            'totalSpotNumber': 414,
            'category': [
                'public'
            ],
            'allowedVehicleType': [
                'car'
            ],
            'chargeType': [
                'temporaryPrice'
            ],
            'requiredPermit': [

            ],
            'occupancyDetectionType': [
                'none'
            ]
        }])
        expect(points[0].infoWindow).to.be.equal('<div><p>Municipal car park located near the Trindade metro station and the Town Hall</p><p><b><i class="fa fa-fw fa-address-card"></i> Address: </b><br/>Rua de Fernandes Tomás<br/>Porto,<br/>Portugal</p> <br/><p><b><i class="fa fa-fw fa-clock" /> Date: </b> Thu, Jun 2, 2016 11:25 AM</p><p><i class="fa fa-fw fa-info" />100 available parking spots out of 414</p></div>')
    })
})
