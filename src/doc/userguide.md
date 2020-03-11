## Introduction

NGSI entities provided by the NGSI source operator cannot be injected directly
to map viewer widgets. This is due to the fact that map viewers expect data
coming through the endpoints to have an especific format.

This operator transforms those NGSI entities into Points of Interest suitable
for map viewer widgets.

## Settings

- **Schemas json file:** URL Url that points to the json where all the schemes are defined.
- **Assets host:** Url where the schemas,icons and templates are hosted.
- **Icons Path:** path to icons. The result will be the assets host and the icon path. Example: http://assets_host/icon_path
- **Views Path:** same and icons but with views. 
- **Ngsi types:** comma separated list of ngsi types to build pois filtering shcmeas json.


## Wiring

### Input endpoints

- `Entities`: Received entities will be transform into PoIs.

### Output endpoints

- `PoIs`: Transformed Points of Interests from the received entities

## Usage

The operator use [json-rules-engine](https://github.com/CacheControl/json-rules-engine) to to define the schemas
,[nunjucks](https://mozilla.github.io/nunjucks/) for views and [jsonpath](https://github.com/dchester/jsonpath)

## json-rules-engine library variations


The library does not provide the functionality to check if a property exists or to return a result in the case that a drive is correct or not. This is why small variations have been introduced

**To check if property exists explanation for icon**:

```json
'icon': {
    'default': {
                'fill': 'rgba(121, 188, 106, 0.3)',
                'stroke': 'rgb(99, 112, 30)'
    },
    'rules': [
        {
            'event': {
                'type': 'existProp',
                'params': {
                    'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/location-64.png'    
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
        } 
    ]  
}       
```
The default property is the result returned in the event that none of the rules is met.
If the object does not contain the property "availableSpotNumber", stop all other conditions and return success value.
The name and the "conditions.all.params.property" must be have the same value.

**Example to define template property:** 
```json
{
  'infoWindow': '{%OffStreetParking.html%}'
}
```

**Complete example for offStreetParking:**
```json
{
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
    'data': '$',
    'title': [
        'name',
        'id'
    ],
    'infoWindow': '{%OffStreetParking.html%}',
    'currentLocation': 'currentLocation',
    'location': 'location',
    'style': {
        'default': {
            'fill': 'rgba(121, 188, 106, 0.3)',
            'stroke': 'rgb(99, 112, 30)'
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
```
In "'data': '$'," $ refers to the entire object using the [jsonpath](https://github.com/json-path/JsonPath) lib.

```json
'title': [
       'name',
       'id'
   ],
```
Title will catch the value of the first property found