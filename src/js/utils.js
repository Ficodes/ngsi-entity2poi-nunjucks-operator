export function parseInputEndpointData (data) {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      error('Error parsing data')
    }
  }

  if (data == null || typeof data !== 'object') {
    error('Incorrect data')
  }

  return data
}

export function processLocation (entity) {
  let coordinates
  if (entity.location != null && typeof entity.location === 'object') {
    let latitude = 0
    let longitude = 0
    if (entity.location.type === 'Polygon') {
      for (var i = 0; i < entity.location.coordinates.length; i++) {
        longitude += entity.location.coordinates[0][i][0]
        latitude += entity.location.coordinates[0][i][1]
      }
      longitude = longitude / entity.location.coordinates.length
      latitude = latitude / entity.location.coordinates.length
    } else {
      longitude = entity.location.coordinates[0]
      latitude = entity.location.coordinates[1]
    }
    coordinates = {
      system: 'WGS84',
      lng: parseFloat(longitude),
      lat: parseFloat(latitude)
    }
    entity['currentLocation'] = coordinates
  }
  return entity
}

export function error (errString) {
  if (window.MashupPlatform) {
    MashupPlatform.wiring.EndpointTypeError(errString)
  }
  throw new Error(errString)
}

export function buldHtmlAddress (address) {
  if (address == null || typeof address !== 'object') {
    return ''
  }
  const html = `
        <p><b><i class="fa fa-fw fa-address-card"></i> Address: </b><br/>
        ${address.streetAddress ? address.streetAddress : ''}
        <br/>
        ${address.addressLocality ? address.addressLocality + ',' : ''}
        ${address.addressRegion ? address.addressRegion + ',' : ''}
        ${address.postalCode ? address.postalCode : ''} 
        <br/>
        ${address.addressCountry ? address.addressCountry : ''}
        </p>
   `
  return html.replace(/([\r\n]+ +)+/gm, '').replace(/[\r\n]+/gm, '')
}

export function modelToJsonKeyValue (entity) {
  if (entity.location && entity.location.value === null) {
    // Normalized entity
    return entity
  }
  // Transform to keyValue
  const result = {}
  for (const key in entity) {
    const at = entity[key]
    if (key === 'id' || key === 'type' || typeof at !== 'object' || (typeof at === 'object' && !('value' in at))) {
      result[key] = at
    } else {
      result[key] = at.value['@value'] || at.value
    }
  }
  return result
}

export const internalUrl = function internalUrl (data) {
  const url = document.createElement('a')
  url.setAttribute('href', data)
  return url.href
}

