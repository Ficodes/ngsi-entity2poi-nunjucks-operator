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

export const offStreetParking = {
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
export const OffStreetParkingLD = {
    "id": "urn:ngsi-ld:OffStreetParking:porto-ParkingLot-23889",
    "type": "OffStreetParking",
    "modifiedAt": "2016-06-02T09:25:55.00Z",
    "category": {
        "type": "Property",
        "value": [
            "underground",
            "public",
            "feeCharged",
            "mediumTerm",
            "barrierAccess"
        ]
    },
    "layout": {
        "type": "Property",
        "value": ["multiLevel"]
    },
    "name": {
        "type": "Property",
        "value": "Parque de estacionamento Trindade"
    },
    "requiredPermit": {
        "type": "Property",
        "value": []
    },
    "allowedVehicleType": {
        "type": "Property",
        "value": ["car"]
    },
    "availableSpotNumber": {
        "type": "Property",
        "value": 132,
        "observedAt": "2018-09-21T12:00:00Z"
    },
    "totalSpotNumber": {
        "type": "Property",
        "value": 414
    },
    "location": {
        "type": "GeoProperty",
        "value": {
            "type": "Point",
            "coordinates": [-8.60961198807, 41.150691773]
        }
    },
    "chargeType": {
        "type": "Property",
        "value": ["temporaryPrice"]
    },
    "address": {
        "type": "Property",
        "value": {
            "addressLocality": "Porto",
            "addressCountry": "Portugal",
            "streetAddress": "Rua de Fernandes Tom\u00e1s",
            "type": "PostalAddress"
        }
    },
    "maximumParkingDuration": {
        "type": "Property",
        "value": "PT8H"
    },
    "description": {
        "type": "Property",
        "value": "Municipal car park located near the Trindade metro station and the Town Hall"
    },
    "@context": [
        "https://schema.lab.fiware.org/ld/context",
        "https://uri.etsi.org/ngsi-ld/v1/ngsi-ld-core-context.jsonld"
    ]
}
export const entityWitPolygonLocation = {
    'id': 'vehicle:WasteManagement:1',
    'type': 'Vehicle',
    'vehicleType': 'lorry',
    'category': ['municipalServices'],
    'location': {
        'type': 'Polygon',
        'coordinates': [[[10, 0], [0, 10], [0, 0], [10, 0]]]
    },
    'name': 'C Recogida 1',
    'speed': 50,
    'cargoWeight': 314,
    'serviceStatus': 'onRoute, garbageCollection',
    'serviceProvided': ['gargabeCollection', 'wasteContainerCleaning'],
    'areaServed': 'Centro',
    'refVehicleModel': 'vehiclemodel:econic'
}
export const entityWitLandLocation = {
    "id": "urn:ngsi-ld:AgriFarm:72d9fb43-53f8-4ec8-a33c-fa931360259a",
    "type": "AgriFarm",
    "dateCreated": "2017-01-01T01:20:00Z",
    "dateModified": "2017-05-04T12:30:00Z",
    "name": "Wheat farm",
    "description": "A farm producing wheat",
    "relatedSource": [
        {
            "application": "urn:ngsi-ld:AgriApp:72d9fb43-53f8-4ec8-a33c-fa931360259a",
            "applicationEntityId": "app:farm1"
        }
    ],
    "seeAlso": [
        "https://example.org/concept/farm",
        "https://datamodel.org/example/farm"
    ],
    "location": {
        "type": "Point",
        "coordinates": [101, 0]
    },
    "landLocation": {
        "type": "Polygon",
        "coordinates": [[[100, 0], [101, 0], [101, 1], [100, 1], [100, 0]]]
    },
    "address": {
        "addressLocality": "Valdepeñas",
        "addressCountry": "ES",
        "streetAddress": "Camino de Membrilla 17"
    },
    "contactPoint": {
        "email": "wheatfarm@email.com",
        "telephone": "00349674532"
    },
    "ownedBy": "urn:ngsi-ld:Person:fce9dcbc-4479-11e8-9de1-cb228de7a15c",
    "hasBuilding": [
        "urn:ngsi-ld:Building:a6ba44e0-4474-11e8-8ed1-ab9e0ea93827",
        "urn:ngsi-ld:Building:d95b8874-4474-11e8-8d6b-dbe144258354"
    ],
    "hasAgriParcel": [
        "urn:ngsi-ld:AgriParcel:26ba4be0-4474-11e8-8ec1-ab9e0ea93835",
        "urn:ngsi-ld:AgriParcel:2d5b8874-4474-11e8-8d6b-dbe14425b5e4"
    ]
}
export const entityWitPointLocation = {
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
export const ngsiLDModel = {
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
export const ngsiLDmodelWithRelations = {
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
export const ngsiModelNormalized = {
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
export const ngsiModelKeyValue = {
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
export const AgriParcel = {
    "id": "urn:ngsi-ld:AgriParcel:72d9fb43-53f8-4ec8-a33c-fa931360259a",
    "type": "AgriParcel",
    "dateCreated": "2017-01-01T01:20:00Z",
    "dateModified": "2017-05-04T12:30:00Z",
    "location": {
        "type": "Polygon",
        "coordinates": [[[100, 0], [101, 0], [101, 1], [100, 1], [100, 0]]]
    },
    "area": 200,
    "description": "Spring wheat",
    "category": "wetland",
    "relatedSource": [
        {
            "application": "urn:ngsi-ld:AgriApp:72d9fb43-53f8-4ec8-a33c-fa931360259a",
            "applicationEntityId": "app:parcel1"
        }
    ],
    "seeAlso": [
        "https://example.org/concept/agriparcel",
        "https://datamodel.org/example/agriparcel"
    ],
    "belongsTo": "urn:ngsi-ld:AgriFarm:f67adcbc-4479-22bc-9de1-cb228de7a765",
    "ownedBy": "urn:ngsi-ld:Person:fce9dcbc-4479-11e8-9de1-cb228de7a15c",
    "hasAgriParcelParent": "urn:ngsi-ld:AgriParcel:1ea0f120-4474-11e8-9919-672036642081",
    "hasAgriParcelChildren": [
        "urn:ngsi-ld:AgriParcel:26ba4be0-4474-11e8-8ec1-ab9e0ea93835",
        "urn:ngsi-ld:AgriParcel:2d5b8874-4474-11e8-8d6b-dbe14425b5e4"
    ],
    "hasAgriCrop": "urn:ngsi-ld:AgriCrop:36021150-4474-11e8-a721-af07c5fae7c8",
    "cropStatus": "seeded",
    "lastPlantedAt": "2016-08-23T10:18:16Z",
    "hasAgriSoil": "urn:ngsi-ld:AgriSoil:429d1338-4474-11e8-b90a-d3e34ceb73df",
    "hasDevice": [
        "urn:ngsi-ld:Device:4a40aeba-4474-11e8-86bf-03d82e958ce6",
        "urn:ngsi-ld:Device:63217d24-4474-11e8-9da2-c3dd3c36891b",
        "urn:ngsi-ld:Device:68e091dc-4474-11e8-a398-df010c53b416",
        "urn:ngsi-ld:6f44b54e-4474-11e8-8577-d7ff6a8ef551"
    ]
}