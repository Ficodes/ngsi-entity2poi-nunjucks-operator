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

import rgsiDatamodelPointer from '../src/js/ngsi-datamodel2-pointers.js'
import sinon from 'sinon'
import { offStreetParkingSchema, AgriParcelSchema } from './data/schemas.js'
import { offStreetParking, OffStreetParkingLD, AgriParcel } from './data/models.js'
import { offStreetParkingExpected, agriParcelexpected } from './data/expected.js'
import { MOCK_VIEW, AGRI_PARCEL_MOCK_VIEW } from './data/views.js'

describe('Test NsiDatamodelPointers Results', () => {
    let server
    beforeEach(() => {
        server = sinon.createFakeServer({ respondImmediately: true })
    })
    afterEach(() => {
        server.restore()
    })
    it('test NsiDatamodelPointers result offStreetParking ', async () => {
        server.respondWith('GET', 'http://127.0.0.1:8080/views/OffStreetParking.html', [200, { 'Content-Type': 'text/html' }, MOCK_VIEW])
        const point = await rgsiDatamodelPointer(offStreetParkingSchema, offStreetParking, OffStreetParkingLD)
        expect(JSON.parse(JSON.stringify(point))).to.eql(JSON.parse(JSON.stringify(offStreetParkingExpected)))
    })
    it('test NsiDatamodelPointers result AgriParcel ', async () => {
        server.respondWith('GET', 'http://127.0.0.1:8080/views/AgriParcel.html', [200, { 'Content-Type': 'text/html' }, AGRI_PARCEL_MOCK_VIEW])
        const point = await rgsiDatamodelPointer(AgriParcelSchema, AgriParcel, { ...AgriParcel })
        expect(JSON.parse(JSON.stringify(point))).to.eql(JSON.parse(JSON.stringify(agriParcelexpected)))
    })
})
