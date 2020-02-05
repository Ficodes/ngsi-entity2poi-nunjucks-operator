'use strict'
import RenderTemplate from '../src/js/template-engine.js'

import sinon from 'sinon'

const MOCK_VIEW = `
<div>
    {% if description %}
        <p>{{description}}</p>
    {% endif %}
    {% if address and address | is_obj  %}
        {{ address | addressProc  }} <br/>
    {% elif address %}
        {{ address }} <br/>
    {% endif %}
    <p><b><i class="fa fa-fw fa-clock" /> Date: </b> {{ dateModified | date }}</p>
    {% if availableSpotNumber and  totalSpotNumber %}
        <p><i class="fa fa-fw fa-info" />{{availableSpotNumber}} available parking spots out of {{totalSpotNumber }}</p>
    {% elif availableSpotNumber %}
        <p><i class="fa fa-fw fa-info" /> {{availableSpotNumber}} available parking spots out of {{totalSpotNumber }}</p>
    {% endif %}
</div>
`

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
    const html = RenderTemplate('OffStreetParking.html', {
      id: '1',
      type: 'OffStreetParking',
      location: {
        coordinates: [-8.60961198807, 41.150691773],
        type: 'Point'
      },
      name: 'Parque de estacionamento Trindade',
      description: 'Municipal car park located near the Trindade metro station and the Town Hall',
      availableSpotNumber: 100,
      address: {
        streetAddress: 'Rua de Fernandes Tomás',
        addressLocality: 'Porto',
        addressCountry: 'Portugal'
      },
      dateModified: '2016-06-02T09:25:55.00Z',
      totalSpotNumber: 414,
      category: ['public'],
      allowedVehicleType: ['car'],
      chargeType: ['temporaryPrice'],
      requiredPermit: [],
      occupancyDetectionType: ['none']
    })
    expect(html).to.be.equal('<div><p>Municipal car park located near the Trindade metro station and the Town Hall</p><p><b><i class="fa fa-fw fa-address-card"></i> Address: </b><br/>Rua de Fernandes Tomás<br/>Porto,<br/>Portugal</p> <br/><p><b><i class="fa fa-fw fa-clock" /> Date: </b> Thu, Jun 2, 2016 11:25 AM</p><p><i class="fa fa-fw fa-info" />100 available parking spots out of 414</p></div>')
  })
})
