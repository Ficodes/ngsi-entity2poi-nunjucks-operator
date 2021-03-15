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

export const offStreetParkingSchema = {
    'id': 'id',
    'icon': {
        'default': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/location-64.png',
        'rules': [
            {
                'event': {
                    'type': 'existProp',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/location-64.png'
                    }
                },
                'name': 'availableSpotNumber',
                'priority': 10,
                'conditions': {
                    'all': [
                        {
                            'fact': 'existProp',
                            'operator': 'equal',
                            'params': {
                                'property': 'availableSpotNumber'
                            },
                            'value': false
                        }
                    ]
                }
            },
            {
                'event': {
                    'type': '',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/location-64.png'
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'availableSpotNumber',
                            'operator': 'lessThanInclusive',
                            'value': 5
                        }
                    ]
                }
            },
            {
                'event': {
                    'type': '',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/location-64.png'
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'availableSpotNumber',
                            'operator': 'lessThanInclusive',
                            'value': 10
                        }
                    ]
                }
            },
            {
                'event': {
                    'type': '',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/location-64.png'
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'availableSpotNumber',
                            'operator': 'lessThanInclusive',
                            'value': 20
                        }
                    ]
                }
            },
            {
                'event': {
                    'type': '',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/location-64.png'
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'availableSpotNumber',
                            'operator': 'lessThanInclusive',
                            'value': 40
                        }
                    ]
                }
            }
        ]
    },
    'tooltip': 'id',
    'title': [
        'name',
        'id'
    ],
    'infoWindow': '{%OffStreetParking.html%}',
    'currentLocation': 'currentLocation',
    'location': 'location',
    'style': {
        'default': {
            'fill': 'rgba(238, 194, 11, 0.3)',
            'stroke': 'rgba(238, 194, 11, 0.9)'
        },
        'rules': [
            {
                'event': {
                    'type': 'existProp',
                    'params': {
                        'success': {
                            'fill': 'rgba(51, 51, 51, 0.1)',
                            'stroke': '#333333'
                        }
                    }
                },
                'name': 'availableSpotNumber',
                'priority': 10,
                'conditions': {
                    'all': [
                        {
                            'fact': 'existProp',
                            'operator': 'equal',
                            'params': {
                                'property': 'availableSpotNumber'
                            },
                            'value': false
                        }
                    ]
                }
            },
            {
                'event': {
                    'type': '',
                    'params': {
                        'success': {
                            'fill': 'rgba(150, 0, 24, 0.3)',
                            'stroke': 'rgba(150, 0, 24, 0.9)'
                        }
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'availableSpotNumber',
                            'operator': 'lessThanInclusive',
                            'value': 5
                        }
                    ]
                }
            },
            {
                'event': {
                    'type': '',
                    'params': {
                        'success': {
                            'fill': 'rgba(242, 147, 5, 0.3)',
                            'stroke': 'rgba(242, 147, 5, 0.9)'
                        }
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'availableSpotNumber',
                            'operator': 'lessThanInclusive',
                            'value': 10
                        }
                    ]
                }
            },
            {
                'event': {
                    'type': '',
                    'params': {
                        'success': {
                            'fill': 'rgba(238, 194, 11, 0.3)',
                            'stroke': 'rgba(238, 194, 11, 0.9)'
                        }
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'availableSpotNumber',
                            'operator': 'lessThanInclusive',
                            'value': 20
                        }
                    ]
                }
            },
            {
                'event': {
                    'type': '',
                    'params': {
                        'success': {
                            'fill': 'rgba(121, 188, 106, 0.3)',
                            'stroke': 'rgb(99, 112, 30)'
                        }
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'availableSpotNumber',
                            'operator': 'lessThanInclusive',
                            'value': 40
                        }
                    ]
                }
            }
        ]
    }
}
export const AgriParcelSchema = {
    "id": "id",
    "icon": {
        "default": "https://cdn0.iconfinder.com/data/icons/4web-3/139/default.png",
        "rules": [
            {
                "event": {
                    "type": "existProp"
                },
                "name": "category",
                "priority": 10,
                "conditions": {
                    "all": [
                        {
                            "fact": "existProp",
                            "operator": "equal",
                            "params": {
                                "property": "category"
                            },
                            "value": false
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/arable.png'
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'arable'
                        }
                    ]
                }
            }
            ,{
                'event': {
                    'type': '',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/grassland.png'
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'grassland'
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/vineyard.png'
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'vineyard'
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/orchard.png'
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'orchard'
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/mixed-crop.png'
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'mixed crop'
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/lowland.png'
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'lowland'
                        }
                    ]
                }
            }
            ,{
                'event': {
                    'type': '',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/upland.png'
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'upland'
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/set-aside.png'
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'set-aside'
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/forestry.png'
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'forestry'
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/wetland.png'
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'wetland'
                        }
                    ]
                }
            }
        ]
    },
    "title": [
        "name",
        "id"
    ],
    "infoWindow": "{%AgriParcel.html%}",
    "currentLocation": "currentLocation",
    "location": "location",
    "style": {
        "default": {
            'fill': 'rgba(238, 194, 11, 0.3)',
            'stroke': 'rgba(238, 194, 11, 0.9)'
        },
        "rules": [
            {
                "event": {
                    "type": "existProp"
                },
                "name": "category",
                "priority": 10,
                "conditions": {
                    "all": [
                        {
                            "fact": "existProp",
                            "operator": "equal",
                            "params": {
                                "property": "category"
                            },
                            "value": false
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': {
                            'fill': 'rgba(238, 194, 11, 0.3)',
                            'stroke': 'rgba(238, 194, 11, 0.9)'
                        }
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'arable'
                        }
                    ]
                }
            }
            ,{
                'event': {
                    'type': '',
                    'params': {
                        'success': {
                            'fill': 'rgba(238, 194, 11, 0.3)',
                            'stroke': 'rgba(238, 194, 11, 0.9)'
                        }
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'grassland'
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': {
                            'fill': 'rgba(238, 194, 11, 0.3)',
                            'stroke': 'rgba(238, 194, 11, 0.9)'
                        }
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'vineyard'
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': {
                            'fill': 'rgba(238, 194, 11, 0.3)',
                            'stroke': 'rgba(238, 194, 11, 0.9)'
                        }
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'orchard'
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': {
                            'fill': 'rgba(238, 194, 11, 0.3)',
                            'stroke': 'rgba(238, 194, 11, 0.9)'
                        }
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'mixed crop'
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': {
                            'fill': 'rgba(238, 194, 11, 0.3)',
                            'stroke': 'rgba(238, 194, 11, 0.9)'
                        }
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'lowland'
                        }
                    ]
                }
            }
            ,{
                'event': {
                    'type': '',
                    'params': {
                        'success': {
                            'fill': 'rgba(238, 194, 11, 0.3)',
                            'stroke': 'rgba(238, 194, 11, 0.9)'
                        }
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'upland'
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': {
                            'fill': 'rgba(238, 194, 11, 0.3)',
                            'stroke': 'rgba(238, 194, 11, 0.9)'
                        }
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'set-aside'
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': {
                            'fill': 'rgba(238, 194, 11, 0.3)',
                            'stroke': 'rgba(238, 194, 11, 0.9)'
                        }
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'forestry'
                        }
                    ]
                }
            },{
                'event': {
                    'type': '',
                    'params': {
                        'success': {
                            'fill': 'rgba(238, 194, 11, 0.3)',
                            'stroke': 'rgba(238, 194, 11, 0.9)'
                        }
                    }
                },
                'conditions': {
                    'all': [
                        {
                            'fact': 'category',
                            'operator': 'equal',
                            'value': 'wetland'
                        }
                    ]
                }
            }
        ]
    }
}