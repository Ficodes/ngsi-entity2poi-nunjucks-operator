const g = typeof (window) === 'undefined' ? global : window
g.MashupPlatform = typeof (MashupPlatform) === 'undefined' ? {} : MashupPlatform
g.MashupPlatform.prefs = typeof (MashupPlatform.prefs) === 'undefined' ? {} : MashupPlatform.prefs
g.MashupPlatform.prefs.get = typeof (MashupPlatform.prefs.get) === 'undefined' ? (name) => {
  switch (name) {
    case 'assets_host':
      return 'http://127.0.0.1:8080/'
      break
    case 'views_path':
      return 'views'
      break
  }
} : MashupPlatform.prefs.get

g.MashupPlatform.wiring = typeof (MashupPlatform.wiring) === 'undefined' ? {} : MashupPlatform.wiring
g.MashupPlatform.wiring.EndpointTypeError = typeof (MashupPlatform.wiring.EndpointTypeError) === 'undefined' ? (message) => {
  throw new Error(message)
} : MashupPlatform.wiring.EndpointTypeError
