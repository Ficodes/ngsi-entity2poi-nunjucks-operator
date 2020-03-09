import NgsiDatamodelPointer from '../src/js/ngsi-datamodel2-pointers.js'
import sinon from 'sinon'
import { offStreetParkingSchema, AgriParcelSchema } from './data/schemas.js'
import { offStreetParking, AgriParcel } from './data/models.js'
import { offStreetParkingExpected, agriParcelexpected } from './data/expected.js'
import { MOCK_VIEW, AGRI_PARCEL_MOCK_VIEW } from './data/views.js'
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
    expect(JSON.parse(JSON.stringify(point))).to.eql(JSON.parse(JSON.stringify(offStreetParkingExpected)))
  })
  it('test NsiDatamodelPointers result AgriParcel ', async () => {
    server.respondWith('GET', 'http://127.0.0.1:8080/views/AgriParcel.html', [200, { 'Content-Type': 'text/html' }, AGRI_PARCEL_MOCK_VIEW])
    const point = await NgsiDatamodelPointer(AgriParcelSchema, AgriParcel, { ...AgriParcel })
    expect(JSON.parse(JSON.stringify(point))).to.eql(JSON.parse(JSON.stringify(agriParcelexpected)))
  })
})
