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


import NgsiPointsManager from './ngsi-points-manager.js';

(async () => {
    const response = await fetch(MashupPlatform.prefs.get('schemas_file_host').trim(), { method: 'GET', mode: 'cors' })
    let schemasConf = await response.json()

    const schemasTypes = MashupPlatform.prefs.get('ngsi_types').trim().split(new RegExp(',\\s*')).filter(Boolean)
    if (schemasTypes.length > 0) {
        schemasConf = schemasConf.filter(schemaconf => schemasTypes.includes(schemaconf.type))
    }
    const ngsiPointsManager = new NgsiPointsManager()
    ngsiPointsManager.addSchemas(schemasConf)

    if (window.MashupPlatform != null) {
        MashupPlatform.wiring.registerCallback('EntityInput', async (entities) => {
            let data = await ngsiPointsManager.getPoints(entities)
            MashupPlatform.wiring.pushEvent('poiOutput', data)
        })
    }
})()
