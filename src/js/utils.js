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

export function parseInputEndpointData(data) {
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

export function processLocation(entity) {
    let coordinates
    const location = entity.landLocation || entity.location
    if (location != null && typeof location === 'object') {
        let latitude = 0
        let longitude = 0
        if (location.type === 'Polygon') {
            for (var i = 0; i < location.coordinates.length; i++) {
                longitude += location.coordinates[0][i][0]
                latitude += location.coordinates[0][i][1]
            }
            longitude = longitude / location.coordinates.length
            latitude = latitude / location.coordinates.length
        } else {
            longitude = location.coordinates[0]
            latitude = location.coordinates[1]
        }
        coordinates = {
            system: 'WGS84',
            lng: parseFloat(longitude),
            lat: parseFloat(latitude)
        }
        entity.currentLocation = coordinates
    }
    return entity
}

export function error(errString) {
    if (window.MashupPlatform) {
        throw new MashupPlatform.wiring.EndpointTypeError(errString)
    }
    throw new Error(errString)
}

export function buldHtmlAddress(address) {
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

export function modelToJsonKeyValue(entity) {
    if (entity.location && entity.location.value === null) {
    // Normalized entity
        return entity
    }
    // Transform to keyValue
    const result = {}
    for (const key in entity) {
        const at = entity[key]
        if (key === 'id' || key === 'type' || typeof at !== 'object' || (typeof at === 'object' && !('value' in at))) {
            result[key] = at.object || at
        } else {
            result[key] = at.value['@value'] || at.value
        }
    }
    return result
}

export function internalUrl(data) {
    const url = document.createElement('a')
    url.setAttribute('href', data)
    return url.href
}
