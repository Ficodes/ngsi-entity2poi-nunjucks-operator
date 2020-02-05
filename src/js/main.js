/*
 * generic-ngsimodel
 * https://github.com/pablo/generic-ngsimodel-operator
 *
 * Copyright (c) 2020 Vendor
 * Licensed under the MIT license.
 */
'use strict'

import NgsiPointsManager from './ngsi-points-manager.js';

(async () => {
  const response = await fetch(MashupPlatform.prefs.get('schemas_host').trim(), { method: 'GET', mode: 'cors' })
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
