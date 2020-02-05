'use strict'

import { modelToJsonKeyValue, parseInputEndpointData, processLocation, buldHtmlAddress } from '../src/js/utils.js'

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
    const entity = {
      'id': 'vehicle:WasteManagement:1',
      'type': 'Vehicle',
      'vehicleType': 'lorry',
      'category': ['municipalServices'],
      'location': {
        'type': 'Point',
        'coordinates': [ -3.164485591715449, 40.62785133667262 ]
      },
      'name': 'C Recogida 1',
      'speed': 50,
      'cargoWeight': 314,
      'serviceStatus': 'onRoute, garbageCollection',
      'serviceProvided': ['gargabeCollection', 'wasteContainerCleaning'],
      'areaServed': 'Centro',
      'refVehicleModel': 'vehiclemodel:econic'
    }
    const expected = processLocation(entity)
    expect(expected.currentLocation).to.be.an('Object')
    expect(expected.currentLocation).to.eql({ system: 'WGS84', lng: -3.164485591715449, lat: 40.62785133667262 })
  })
  it('test processLocation Point', () => {
    const entity = {
      'id': '1',
      'type': 'OffStreetParking',
      'location': {
        'coordinates': [-8.60961198807, 41.150691773],
        'type': 'Point'
      },
      'name': 'Parque de estacionamento Trindade',
      'category': ['public'],
      'allowedVehicleType': ['car'],
      'chargeType': ['temporaryPrice'],
      'requiredPermit': [],
      'occupancyDetectionType': ['none']
    }
    const expected = processLocation(entity)
    expect(expected.currentLocation).to.be.an('Object')
    expect(expected.currentLocation).to.eql({ system: 'WGS84', lng: -8.60961198807, lat: 41.150691773 })
  })
  it('test modelToJsonKeyValue ngsi LD', () => {
    const model = {
      id: 'urn:ngsi-ld:WeatherObserved:Spain-WeatherObserved-Valladolid-2016-11-30T07:00:00.00Z',
      type: 'WeatherObserved',
      dateObserved: {
        type: 'Property',
        value: {
          '@type': 'DateTime',
          '@value': '2016-11-30T07:00:00.00Z'
        }
      },
      illuminance: {
        type: 'Property',
        value: 1000
      },
      temperature: {
        type: 'Property',
        value: 3.3
      },
      precipitation: {
        type: 'Property',
        value: 0
      },
      atmosphericPressure: {
        type: 'Property',
        value: 938.9
      },
      pressureTendency: {
        type: 'Property',
        value: 0.5
      },
      refDevice: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Device:device-0A3478'
      },
      source: {
        type: 'Property',
        value: 'http://www.aemet.es'
      },
      windSpeed: {
        type: 'Property',
        value: 2
      },
      location: {
        type: 'GeoProperty',
        value: {
          type: 'Point',
          coordinates: [-4.754444444, 41.640833333]
        }
      },
      stationName: {
        type: 'Property',
        value: 'Valladolid'
      },
      address: {
        type: 'Property',
        value: {
          addressLocality: 'Valladolid',
          addressCountry: 'ES',
          type: 'PostalAddress'
        }
      },
      stationCode: {
        type: 'Property',
        value: '2422'
      },
      dataProvider: {
        type: 'Property',
        value: 'TEF'
      },
      windDirection: {
        type: 'Property',
        value: -45
      },
      relativeHumidity: {
        type: 'Property',
        value: 1
      },
      streamGauge: {
        type: 'Property',
        value: 50
      },
      snowHeight: {
        type: 'Property',
        value: 20
      },
      '@context': [
        'https://schema.lab.fiware.org/ld/context',
        'https://uri.etsi.org/ngsi-ld/v1/ngsi-ld-core-context.jsonld'
      ]
    }
    const expected = {
      id: 'urn:ngsi-ld:WeatherObserved:Spain-WeatherObserved-Valladolid-2016-11-30T07:00:00.00Z',
      type: 'WeatherObserved',
      dateObserved: '2016-11-30T07:00:00.00Z',
      illuminance: 1000,
      temperature: 3.3,
      precipitation: 0,
      atmosphericPressure: 938.9,
      pressureTendency: 0.5,
      refDevice: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Device:device-0A3478'
      },
      source: 'http://www.aemet.es',
      windSpeed: 2,
      location: {
        type: 'Point',
        coordinates: [
          -4.754444444,
          41.640833333
        ]
      },
      stationName: 'Valladolid',
      address: {
        addressLocality: 'Valladolid',
        addressCountry: 'ES',
        type: 'PostalAddress'
      },
      stationCode: '2422',
      dataProvider: 'TEF',
      windDirection: -45,
      relativeHumidity: 1,
      streamGauge: 50,
      snowHeight: 20,
      '@context': [
        'https://schema.lab.fiware.org/ld/context',
        'https://uri.etsi.org/ngsi-ld/v1/ngsi-ld-core-context.jsonld'
      ]
    }
    expect(modelToJsonKeyValue(model)).to.eql(expected)
  })
  it('test modelToJsonKeyValue ngsi NORMALIZED', () => {
    const model = {
      id: 'Spain-WeatherObserved-Valladolid-2016-11-30T07:00:00.00Z',
      type: 'WeatherObserved',
      dateObserved: {
        type: 'DateTime',
        value: '2016-11-30T07:00:00.00Z'
      },
      illuminance: {
        value: 1000
      },
      temperature: {
        value: 3.3
      },
      precipitation: {
        value: 0
      },
      atmosphericPressure: {
        value: 938.9
      },
      pressureTendency: {
        value: 0.5
      },
      refDevice: {
        type: 'Relationship',
        value: 'device-0A3478'
      },
      source: {
        value: 'http://www.aemet.es'
      },
      windSpeed: {
        value: 2
      },
      location: {
        type: 'geo:json',
        value: {
          type: 'Point',
          coordinates: [-4.754444444, 41.640833333]
        }
      },
      stationName: {
        value: 'Valladolid'
      },
      address: {
        type: 'PostalAddress',
        value: {
          addressLocality: 'Valladolid',
          addressCountry: 'ES'
        }
      },
      stationCode: {
        value: '2422'
      },
      dataProvider: {
        value: 'TEF'
      },
      windDirection: {
        value: -45
      },
      relativeHumidity: {
        value: 1
      },
      streamGauge: {
        value: 50
      },
      snowHeight: {
        value: 20
      }
    }
    const expected = {
      id: 'Spain-WeatherObserved-Valladolid-2016-11-30T07:00:00.00Z',
      type: 'WeatherObserved',
      dateObserved: '2016-11-30T07:00:00.00Z',
      illuminance: 1000,
      temperature: 3.3,
      precipitation: 0,
      atmosphericPressure: 938.9,
      pressureTendency: 0.5,
      refDevice: 'device-0A3478',
      source: 'http://www.aemet.es',
      windSpeed: 2,
      location: {
        type: 'Point',
        coordinates: [
          -4.754444444,
          41.640833333
        ]
      },
      stationName: 'Valladolid',
      address: {
        addressLocality: 'Valladolid',
        addressCountry: 'ES'
      },
      stationCode: '2422',
      dataProvider: 'TEF',
      windDirection: -45,
      relativeHumidity: 1,
      streamGauge: 50,
      snowHeight: 20
    }
    expect(modelToJsonKeyValue(model)).to.eql(expected)
  })
  it('test modelToJsonKeyValue ngsi keyvalue', () => {
    const model = {
      id: 'Spain-WeatherObserved-2422-2016-11-30T08:00:00',
      type: 'WeatherObserved',
      address: {
        addressLocality: 'Valladolid',
        addressCountry: 'ES'
      },
      atmosphericPressure: 938.9,
      dataProvider: 'TEF',
      dateObserved: '2016-11-30T07:00:00.00Z',
      location: {
        type: 'Point',
        coordinates: [-4.754444444, 41.640833333]
      },
      precipitation: 0,
      pressureTendency: 0.5,
      relativeHumidity: 1,
      source: 'http://www.aemet.es',
      stationCode: '2422',
      stationName: 'Valladolid',
      temperature: 3.3,
      windDirection: -45,
      windSpeed: 2,
      illuminance: 1000
    }
    const expected = {
      id: 'Spain-WeatherObserved-2422-2016-11-30T08:00:00',
      type: 'WeatherObserved',
      address: {
        addressLocality: 'Valladolid',
        addressCountry: 'ES'
      },
      atmosphericPressure: 938.9,
      dataProvider: 'TEF',
      dateObserved: '2016-11-30T07:00:00.00Z',
      location: {
        type: 'Point',
        coordinates: [-4.754444444, 41.640833333]
      },
      precipitation: 0,
      pressureTendency: 0.5,
      relativeHumidity: 1,
      source: 'http://www.aemet.es',
      stationCode: '2422',
      stationName: 'Valladolid',
      temperature: 3.3,
      windDirection: -45,
      windSpeed: 2,
      illuminance: 1000
    }
    expect(modelToJsonKeyValue(model)).to.eql(expected)
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
