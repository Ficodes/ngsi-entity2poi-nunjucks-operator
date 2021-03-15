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


import renderTemplate from '../src/js/template-engine.js'

import sinon from 'sinon'

import { offStreetParking } from './data/models.js'
import { expectedView } from './data/expected.js'
import { MOCK_VIEW } from './data/views.js'

describe('Test Infowindow Resuts', () => {
    let server
    beforeEach(() => {
        server = sinon.createFakeServer({ respondImmediately: true })
    })
    afterEach(() => {
        server.restore()
    })

    it('test infoWindow off-street-parking', () => {
        server.respondWith('GET', 'http://127.0.0.1:8080/views/OffStreetParking.html', [200, { 'Content-Type': 'text/html' }, MOCK_VIEW])
        const html = renderTemplate('OffStreetParking.html', offStreetParking)
        expect(html).to.be.equal(expectedView)
    })
})
