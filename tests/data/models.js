export const offStreetParking={
    id: '1',
    type: 'OffStreetParking',
    location: {
        coordinates: [-8.60961198807, 41.150691773],
        type: 'Point'
    },
    name: 'Parque de estacionamento Trindade',
    description: 'Municipal car park located near the Trindade metro station and the Town Hall',
    availableSpotNumber: 4,
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
}
export const entityWitPolygonLocation={
    'id': 'vehicle:WasteManagement:1',
    'type': 'Vehicle',
    'vehicleType': 'lorry',
    'category': ['municipalServices'],
    'location': {
        'type': 'Polygon',
        'coordinates': [ [ [ 10, 0], [0, 10], [0, 0], [10, 0] ] ]
    },
    'name': 'C Recogida 1',
    'speed': 50,
    'cargoWeight': 314,
    'serviceStatus': 'onRoute, garbageCollection',
    'serviceProvided': ['gargabeCollection', 'wasteContainerCleaning'],
    'areaServed': 'Centro',
    'refVehicleModel': 'vehiclemodel:econic'
}
export const entityWitPointLocation={
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
export const ngsiLDModel={
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
export const ngsiLDmodelWithRelations={
    "id": "urn:ngsi-ld:Road:Spain-Road-A62",
    "type": "Road",
    "refRoadSegment": {
        "type": "Relationship",
        "object": [
            "urn:ngsi-ld:RoadSegment:Spain-RoadSegment-A62-0-355-forwards",
            "urn:ngsi-ld:RoadSegment:Spain-RoadSegment-A62-0-355-backwards"
        ]
    },
    "roadClass": {
        "type": "Property",
        "value": "motorway"
    },
    "description": {
        "type": "Property",
        "value": "Autov\u00eda de Castilla"
    },
    "responsible": {
        "type": "Property",
        "value": "Ministerio de Fomento - Gobierno de Espa\u00f1a"
    },
    "length": {
        "type": "Property",
        "value": 355
    },
    "alternateName": {
        "type": "Property",
        "value": "E-80"
    },
    "name": {
        "type": "Property",
        "value": "A-62"
    },
    "@context": [
        "https://schema.lab.fiware.org/ld/context",
        "https://uri.etsi.org/ngsi-ld/v1/ngsi-ld-core-context.jsonld"
    ]
}
export const ngsiModelNormalized={
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
export const ngsiModelKeyValue={
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