import {OffStreetParkingLD} from "./models";

export const offStreetParkingExpected={
    'id': '1',
    'icon': {
        'anchor': [
            0.5,
            1
        ],
        'scale': 0.4,
        'src': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/location-64.png'
    },
    'tooltip': '1',
    'title': '1',
    'data': OffStreetParkingLD,
    'infoWindow': '<div><p>Municipal car park located near the Trindade metro station and the Town Hall</p><p><b><i class="fa fa-fw fa-address-card"></i> Address: </b><br/>Rua de Fernandes Tomás<br/>Porto,<br/>Portugal</p> <br/><p><b><i class="fa fa-fw fa-clock" /> Date: </b> Thu, Jun 2, 2016 11:25 AM</p><p><i class="fa fa-fw fa-info" />4 available parking spots out of 414</p></div>',
    'location': {
        'coordinates': [
            -8.60961198807,
            41.150691773
        ],
        'type': 'Point'
    },
    'style': {
        'fill': 'rgba(150, 0, 24, 0.3)',
        'stroke': 'rgba(150, 0, 24, 0.9)'
    }
}
export const ngsiLDModelExpected={
    id: 'urn:ngsi-ld:WeatherObserved:Spain-WeatherObserved-Valladolid-2016-11-30T07:00:00.00Z',
    type: 'WeatherObserved',
    dateObserved: '2016-11-30T07:00:00.00Z',
    illuminance: 1000,
    temperature: 3.3,
    precipitation: 0,
    atmosphericPressure: 938.9,
    pressureTendency: 0.5,
    refDevice: 'urn:ngsi-ld:Device:device-0A3478',
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
export const ngsiModelWithRelationsExpected={
    "id": "urn:ngsi-ld:Road:Spain-Road-A62",
    "type": "Road",
    "refRoadSegment": [
        "urn:ngsi-ld:RoadSegment:Spain-RoadSegment-A62-0-355-forwards",
        "urn:ngsi-ld:RoadSegment:Spain-RoadSegment-A62-0-355-backwards"
    ],
    "roadClass": "motorway",
    "description": "Autovía de Castilla",
    "responsible": "Ministerio de Fomento - Gobierno de España",
    "length": 355,
    "alternateName": "E-80",
    "name": "A-62",
    "@context": [
        "https://schema.lab.fiware.org/ld/context",
        "https://uri.etsi.org/ngsi-ld/v1/ngsi-ld-core-context.jsonld"
    ]
}
export const ngsiModelNormalizedExpected={
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
export const ngsiModelKeyValueExpected={
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
export const expectedView='<div><p>Municipal car park located near the Trindade metro station and the Town Hall</p><p><b><i class="fa fa-fw fa-address-card"></i> Address: </b><br/>Rua de Fernandes Tomás<br/>Porto,<br/>Portugal</p> <br/><p><b><i class="fa fa-fw fa-clock" /> Date: </b> Thu, Jun 2, 2016 11:25 AM</p><p><i class="fa fa-fw fa-info" />4 available parking spots out of 414</p></div>'