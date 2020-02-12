'use strict'
import RenderTemplate from '../src/js/template-engine.js'

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
    const html = RenderTemplate('OffStreetParking.html', offStreetParking)
    expect(html).to.be.equal(expectedView)
  })
})
