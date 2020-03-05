import NgsiDatamodelPointer from '../src/js/ngsi-datamodel2-pointers.js'
import sinon from 'sinon'
import { offStreetParkingSchema } from './data/schemas.js'
import { offStreetParking, ngsiModelKeyValue } from './data/models.js'
import { offStreetParkingExpected } from './data/expected.js'
import { MOCK_VIEW } from './data/views.js'
import { OffStreetParkingLD } from './data/models'

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
    const point = await NgsiDatamodelPointer(offStreetParkingSchema, offStreetParking, OffStreetParkingLD)
    console.log(JSON.stringify(point, 0, 2))
    expect(JSON.parse(JSON.stringify(point))).to.eql(JSON.parse(JSON.stringify(offStreetParkingExpected)))
  })
})
