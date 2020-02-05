'use strict'
import NgsiPointsManager from '../src/js/ngsi-points-manager.js'
import Schema from '../src/js/schema.js'
import sinon from 'sinon'
function jsonOk (body) {
  const mockResponse = new window.Response(JSON.stringify(body), { // the fetch API returns a resolved window Response object
    status: 200,
    headers: {
      'Content-type': 'application/json'
    }
  })

  return Promise.resolve(mockResponse)
}
function viewOk (body) {
  const mockResponse = new window.Response(MOCK_VIEW, { // the fetch API returns a resolved window Response object
    status: 200,
    headers: {
      'Content-type': 'text/html'
    }
  })

  return Promise.resolve(mockResponse)
}

const MOCK_JSON = {
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

const MOCK_VIEW = `
<div>
    {% if description %}
        <p>{{description}}</p>
    {% endif %}
    {% if address and address | is_obj  %}
        {{ address | addressProc  }} <br/>
    {% elif address %}
        {{ address }} <br/>
    {% endif %}
    <p><b><i class="fa fa-fw fa-clock" /> Date: </b> {{ dateModified | date }}</p>
    {% if availableSpotNumber and  totalSpotNumber %}
        <p><i class="fa fa-fw fa-info" />{{availableSpotNumber}} available parking spots out of {{totalSpotNumber }}</p>
    {% elif availableSpotNumber %}
        <p><i class="fa fa-fw fa-info" /> {{availableSpotNumber}} available parking spots out of {{totalSpotNumber }}</p>
    {% endif %}
</div>

`
describe('Test SchemaLoader Resuts', () => {
  beforeEach(() => {
    let stub = sinon.stub(window, 'fetch') // add stub
    stub.onCall(0).returns(jsonOk(MOCK_JSON))
    stub.onCall(1).returns(viewOk(MOCK_VIEW))
  })
  afterEach(() => {
    window.fetch.restore() // remove stub
  })
  it('test NgsiPointsManager load Schema success ', async () => {
    const ngsiPointsManager = new NgsiPointsManager()
    ngsiPointsManager.addSchemas([{ type: 'OffStreetParking', schema: 'http://127.0.0.1:8080/schemas/off-street-parking.json' }])
    await ngsiPointsManager.loadSchemas()
    const rules = ngsiPointsManager.getRules()
    expect(rules.next().value[1]).to.have.property('id')
  })

  it('test NgsiPointsManager add Schema non array ', async () => {
    const ngsiPointsManager = new NgsiPointsManager()
    ngsiPointsManager.addSchemas({ type: 'OffStreetParking', schema: 'http://127.0.0.1:8080/schemas/off-street-parking.json' })
    const schemas = ngsiPointsManager.getSchemas()
    const schema = schemas.next().value[1]
    expect(schema).to.be.an.instanceof(Schema)
    expect(schema.type).to.be.equal('OffStreetParking')
  })
  it('test NgsiPointsManager add Schema array ', async () => {
    const ngsiPointsManager = new NgsiPointsManager()
    ngsiPointsManager.addSchemas([{ type: 'OffStreetParking', schema: 'http://127.0.0.1:8080/schemas/off-street-parking.json' }])
    const schemas = ngsiPointsManager.getSchemas()
    const schema = schemas.next().value[1]
    expect(schema).to.be.an.instanceof(Schema)
    expect(schema.type).to.be.equal('OffStreetParking')
  })
  it('test NgsiPointsManager getPoints', async () => {
    const ngsiPointsManager = new NgsiPointsManager()
    ngsiPointsManager.addSchemas([{ type: 'OffStreetParking', schema: 'http://127.0.0.1:8080/schemas/off-street-parking.json' }])
    await ngsiPointsManager.loadSchemas()
    const points = await ngsiPointsManager.getPoints([{
      'id': '1',
      'type': 'OffStreetParking',
      'location': {
        'coordinates': [
          -8.60961198807,
          41.150691773
        ],
        'type': 'Point'
      },
      'name': 'Parque de estacionamento Trindade',
      'description': 'Municipal car park located near the Trindade metro station and the Town Hall',
      'availableSpotNumber': 100,
      'address': {
        'streetAddress': 'Rua de Fernandes Tomás',
        'addressLocality': 'Porto',
        'addressCountry': 'Portugal'
      },
      'dateModified': '2016-06-02T09:25:55.00Z',
      'totalSpotNumber': 414,
      'category': [
        'public'
      ],
      'allowedVehicleType': [
        'car'
      ],
      'chargeType': [
        'temporaryPrice'
      ],
      'requiredPermit': [

      ],
      'occupancyDetectionType': [
        'none'
      ]
    }])
    expect(points[0]['infoWindow']).to.be.equal('<div><p>Municipal car park located near the Trindade metro station and the Town Hall</p><p><b><i class="fa fa-fw fa-address-card"></i> Address: </b><br/>Rua de Fernandes Tomás<br/>Porto,<br/>Portugal</p> <br/><p><b><i class="fa fa-fw fa-clock" /> Date: </b> Thu, Jun 2, 2016 11:25 AM</p><p><i class="fa fa-fw fa-info" />100 available parking spots out of 414</p></div>')
  })
})
