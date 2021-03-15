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

const g = typeof(window) === 'undefined' ? global : window
g.MashupPlatform = typeof(MashupPlatform) === 'undefined' ? {} : MashupPlatform
g.MashupPlatform.prefs = typeof(MashupPlatform.prefs) === 'undefined' ? {} : MashupPlatform.prefs
g.MashupPlatform.prefs.get = typeof(MashupPlatform.prefs.get) === 'undefined' ? (name) => {
    switch (name) {
    case 'assets_host':
        return 'http://127.0.0.1:8080/'
        break
    case 'views_path':
        return 'views'
        break
    }
} : MashupPlatform.prefs.get

g.MashupPlatform.wiring = typeof(MashupPlatform.wiring) === 'undefined' ? {} : MashupPlatform.wiring
g.MashupPlatform.wiring.EndpointTypeError = class EndpointTypeError extends Error {
    constructor(message) {
        super(message)
    }
}
