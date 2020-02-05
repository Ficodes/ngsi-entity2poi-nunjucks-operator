import NgsiDatamodelPointer from '../src/js/ngsi-datamodel2-pointers.js'
import sinon from 'sinon'
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
describe('Test NsiDatamodelPointers Resuts', () => {
  let server
  beforeEach(() => {
    server = sinon.createFakeServer({ respondImmediately: true })
  })
  afterEach(() => {
    server.restore()
  })
  it('test NsiDatamodelPointers result offStreetParking ', async () => {
    server.respondWith('GET', 'http://127.0.0.1:8080/views/OffStreetParking.html', [200, { 'Content-Type': 'text/html' }, MOCK_VIEW])
    const point = await NgsiDatamodelPointer({
      id: 'id',
      icon: {
        default: 'images/parking/verylow.png',
        rules: [
          {
            event: {
              type: 'existProp',
              params: {
                success: 'images/parking/unknown.png'
              }
            },
            name: 'availableSpotNumber',
            priority: 10,
            conditions: {
              all: [
                {
                  fact: 'existProp',
                  operator: 'equal',
                  params: {
                    property: 'availableSpotNumber'
                  },
                  value: false
                }
              ]
            }
          },
          {
            event: {
              type: '',
              params: {
                success: 'images/parking/veryhigh.png'
              }
            },
            conditions: {
              all: [
                {
                  fact: 'availableSpotNumber',
                  operator: 'lessThanInclusive',
                  value: 5
                }
              ]
            }
          },
          {
            event: {
              type: '',
              params: {
                success: 'images/parking/high.png'
              }
            },
            conditions: {
              all: [
                {
                  fact: 'availableSpotNumber',
                  operator: 'lessThanInclusive',
                  value: 10
                }
              ]
            }
          },
          {
            event: {
              type: '',
              params: {
                success: 'images/parking/moderate.png'
              }
            },
            conditions: {
              all: [
                {
                  fact: 'availableSpotNumber',
                  operator: 'lessThanInclusive',
                  value: 20
                }
              ]
            }
          },
          {
            event: {
              type: '',
              params: {
                success: 'images/parking/low.png'
              }
            },
            conditions: {
              all: [
                {
                  fact: 'availableSpotNumber',
                  operator: 'lessThanInclusive',
                  value: 40
                }
              ]
            }
          }
        ]
      },
      tooltip: 'id',
      data: '$',
      title: ['name', 'id'],
      infoWindow: '{%OffStreetParking.html%}',
      currentLocation: 'coordinates',
      location: 'location',
      style: {
        default: {
          fill: 'rgba(121, 188, 106, 0.3)',
          stroke: 'rgb(99, 112, 30)'
        },
        rules: [
          {
            event: {
              type: 'existProp',
              params: {
                success: {
                  fill: 'rgba(51, 51, 51, 0.1)',
                  stroke: '#333333'
                }
              }
            },
            name: 'availableSpotNumber',
            priority: 10,
            conditions: {
              all: [
                {
                  fact: 'existProp',
                  operator: 'equal',
                  params: {
                    property: 'availableSpotNumber'
                  },
                  value: false
                }
              ]
            }
          },
          {
            event: {
              type: '',
              params: {
                success: {
                  fill: 'rgba(150, 0, 24, 0.3)',
                  stroke: 'rgba(150, 0, 24, 0.9)'
                }
              }
            },
            conditions: {
              all: [
                {
                  fact: 'availableSpotNumber',
                  operator: 'lessThanInclusive',
                  value: 5
                }
              ]
            }
          },
          {
            event: {
              type: '',
              params: {
                success: {
                  fill: 'rgba(242, 147, 5, 0.3)',
                  stroke: 'rgba(242, 147, 5, 0.9)'
                }
              }
            },
            conditions: {
              all: [
                {
                  fact: 'availableSpotNumber',
                  operator: 'lessThanInclusive',
                  value: 10
                }
              ]
            }
          },
          {
            event: {
              type: '',
              params: {
                success: {
                  fill: 'rgba(238, 194, 11, 0.3)',
                  stroke: 'rgba(238, 194, 11, 0.9)'
                }
              }
            },
            conditions: {
              all: [
                {
                  fact: 'availableSpotNumber',
                  operator: 'lessThanInclusive',
                  value: 20
                }
              ]
            }
          },
          {
            event: {
              type: '',
              params: {
                success: {
                  fill: 'rgba(121, 188, 106, 0.3)',
                  stroke: 'rgb(99, 112, 30)'
                }
              }
            },
            conditions: {
              all: [
                {
                  fact: 'availableSpotNumber',
                  operator: 'lessThanInclusive',
                  value: 40
                }
              ]
            }
          }
        ]
      }
    }, {
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
    })
    const expected = {
      'id': '1',
      'icon': {
        'anchor': [
          0.5,
          1
        ],
        'scale': 0.4,
        'src': 'http://localhost:9876/images/parking/veryhigh.png'
      },
      'tooltip': '1',
      'title': '1',
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
    expect(JSON.stringify(point, 0, 2)).to.eql(JSON.stringify(point, 0, 2))
  })
})
