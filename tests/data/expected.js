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

import {OffStreetParkingLD} from "./models";

export const offStreetParkingExpected = {
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
export const ngsiLDModelExpected = {
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
export const ngsiModelWithRelationsExpected = {
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
export const ngsiModelNormalizedExpected = {
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
export const ngsiModelKeyValueExpected = {
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
export const expectedView = '<div><p>Municipal car park located near the Trindade metro station and the Town Hall</p><p><b><i class="fa fa-fw fa-address-card"></i> Address: </b><br/>Rua de Fernandes Tomás<br/>Porto,<br/>Portugal</p> <br/><p><b><i class="fa fa-fw fa-clock" /> Date: </b> Thu, Jun 2, 2016 11:25 AM</p><p><i class="fa fa-fw fa-info" />4 available parking spots out of 414</p></div>'
export const agriParcelexpected = {
    "id": "urn:ngsi-ld:AgriParcel:72d9fb43-53f8-4ec8-a33c-fa931360259a",
    "icon": {
        "anchor": [
            0.5,
            1
        ],
        "scale": 0.4,
        "src": "https://cdn0.iconfinder.com/data/icons/4web-3/139/wetland.png"
    },
    "title": "urn:ngsi-ld:AgriParcel:72d9fb43-53f8-4ec8-a33c-fa931360259a",
    "infoWindow": "<style>.list-group {display: flex;flex-direction: column;padding-left: 0;margin-bottom: 0;}.list-group-item-action {width: 100%;color: #495057;text-align: inherit;}.list-group-item-action:hover, .list-group-item-action:focus {z-index: 1;color: #495057;text-decoration: none;background-color: #f8f9fa;}.list-group-item-action:active {color: #212529;background-color: #e9ecef;}.list-group-item {position: relative;display: block;padding: 0.75rem 1.25rem;margin-bottom: 0;background-color: #fff;border: 1px solid rgba(0, 0, 0, 0.125);}.list-group-item:first-child {border-top-left-radius: 0.25rem;border-top-right-radius: 0.25rem;}.list-group-item:last-child {border-bottom-right-radius: 0.25rem;border-bottom-left-radius: 0.25rem;}.list-group-item.disabled, .list-group-item:disabled {color: #6c757d;pointer-events: none;background-color: #fff;}.list-group-item.active {z-index: 2;color: #fff;background-color: #0d6efd;border-color: #0d6efd;}.list-group-item + .list-group-item {border-top-width: 0;}.list-group-item + .list-group-item.active {margin-top: -1px;border-top-width: 1px;}.list-group-horizontal {flex-direction: row;}.list-group-horizontal .list-group-item:first-child {border-bottom-left-radius: 0.25rem;border-top-right-radius: 0;}.list-group-horizontal .list-group-item:last-child {border-top-right-radius: 0.25rem;border-bottom-left-radius: 0;}.list-group-horizontal .list-group-item.active {margin-top: 0;}.list-group-horizontal .list-group-item + .list-group-item {border-top-width: 1px;border-left-width: 0;}.list-group-horizontal .list-group-item + .list-group-item.active {margin-left: -1px;border-left-width: 1px;}.scroll-content {max-height: 365px;position: relative;display: block;overflow: auto;}</style><div class=\"scroll-content\"><p>Spring wheat</p><p><b><i class=\"fa fa-fw fa-clock\"/> Created: </b> Sun, Jan 1, 2017 2:20 AM</p><p><b><i class=\"fa fa-fw fa-clock\"/> Modified: </b> Thu, May 4, 2017 2:30 PM</p><p><b>Modified: </b> 200</p><p><b>Category: </b> wetland</p><h5>Related sources</h5><p>Application: urn:ngsi-ld:AgriApp:72d9fb43-53f8-4ec8-a33c-fa931360259a</p><p>ApplicationEntityId: app:parcel1</p><h5>See Also</h5><p><a href=\"https://example.org/concept/agriparcel\"></a></p><p><a href=\"https://datamodel.org/example/agriparcel\"></a></p><p><b> Belongs To: </b> urn:ngsi-ld:AgriFarm:f67adcbc-4479-22bc-9de1-cb228de7a765</p><p><b> Owned By: </b> urn:ngsi-ld:Person:fce9dcbc-4479-11e8-9de1-cb228de7a15c</p><p><b>Parent Parcel: </b> urn:ngsi-ld:AgriParcel:1ea0f120-4474-11e8-9919-672036642081</p><h5>Children Parcels</h5><ul class=\"list-group\"><li class=\"list-group-item\"> urn:ngsi-ld:AgriParcel:26ba4be0-4474-11e8-8ec1-ab9e0ea93835</li><li class=\"list-group-item\"> urn:ngsi-ld:AgriParcel:2d5b8874-4474-11e8-8d6b-dbe14425b5e4</li></ul><p><b>Agri Crop: </b> urn:ngsi-ld:AgriCrop:36021150-4474-11e8-a721-af07c5fae7c8</p><p><b>Crop Status: </b> seeded</p><p><b>Last PLanted At: </b> 2016-08-23T10:18:16Z</p><p><b>Agri Soil: </b> urn:ngsi-ld:AgriSoil:429d1338-4474-11e8-b90a-d3e34ceb73df</p><h5>Devices</h5><ul class=\"list-group\"><li class=\"list-group-item\"> urn:ngsi-ld:Device:4a40aeba-4474-11e8-86bf-03d82e958ce6</li><li class=\"list-group-item\"> urn:ngsi-ld:Device:63217d24-4474-11e8-9da2-c3dd3c36891b</li><li class=\"list-group-item\"> urn:ngsi-ld:Device:68e091dc-4474-11e8-a398-df010c53b416</li><li class=\"list-group-item\"> urn:ngsi-ld:6f44b54e-4474-11e8-8577-d7ff6a8ef551</li></ul></div>",
    "location": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    100,
                    0
                ],
                [
                    101,
                    0
                ],
                [
                    101,
                    1
                ],
                [
                    100,
                    1
                ],
                [
                    100,
                    0
                ]
            ]
        ]
    },
    "style": {
        "fill": "rgba(238, 194, 11, 0.3)",
        "stroke": "rgba(238, 194, 11, 0.9)"
    },
    "data": {
        "id": "urn:ngsi-ld:AgriParcel:72d9fb43-53f8-4ec8-a33c-fa931360259a",
        "type": "AgriParcel",
        "dateCreated": "2017-01-01T01:20:00Z",
        "dateModified": "2017-05-04T12:30:00Z",
        "location": {
            "type": "Polygon",
            "coordinates": [
                [
                    [
                        100,
                        0
                    ],
                    [
                        101,
                        0
                    ],
                    [
                        101,
                        1
                    ],
                    [
                        100,
                        1
                    ],
                    [
                        100,
                        0
                    ]
                ]
            ]
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
}