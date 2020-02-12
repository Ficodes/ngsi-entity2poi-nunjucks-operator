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
and [nunjucks](https://mozilla.github.io/nunjucks/) for views.

## json-rules-engine library variations


The library does not provide the functionality to check if a property exists or to return a result in the case that a drive is correct or not. This is why small variations have been introduced

To check if property exists explanation for icon:

```json

// if none of the rules is met we assign default value
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
                    // if the object does not contain, stop all othe conditions and return success value
                    'success': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/location-64.png'
                    // we could add "failure" param to return value on fail
                    //'failure': 'https://cdn0.iconfinder.com/data/icons/4web-3/139/failure.png'
                } 
            },
            //the name and the "params.property" must be have the same value
            'name': 'availableSpotNumber',
            'priority': 10,
            'conditions': {
                'all': [
                    {
                        'fact': 'existProp',
                        'operator': 'equal',
                        'params': {
                            // must be have the same value parent "name"
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

Example to define template property: 
```json
{
  'infoWindow': '{%OffStreetParking.html%}',}
}
```