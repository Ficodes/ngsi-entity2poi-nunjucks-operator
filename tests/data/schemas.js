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