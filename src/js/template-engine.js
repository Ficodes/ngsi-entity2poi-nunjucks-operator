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

'use strict'

import * as nunjucks from 'nunjucks/browser/nunjucks.min.js'
import moment from 'moment'
import { buldHtmlAddress } from './utils.js'
import CustomWebLoader from './custom-webloader.js'
const TemplateEngine = new nunjucks.Environment(new CustomWebLoader(`${MashupPlatform.prefs.get('assets_host').trim()}${MashupPlatform.prefs.get('views_path').trim()}`), { autoescape: false })

TemplateEngine.addGlobal('getEntity', function () {
  return this.getVariables()
})

TemplateEngine.addFilter('date', function (dateStr) {
  return moment(dateStr, null, 'es').format('llll')
})
TemplateEngine.addFilter('is_obj', function (param) {
  return typeof param === 'object'
})
TemplateEngine.addFilter('is_arr', function (param) {
  return Array.isArray(param)
})
TemplateEngine.addFilter('addressProc', function (address) {
  return buldHtmlAddress(address)
})

export default function RenderTemplate (htmlTemplatePath, entity) {
  return TemplateEngine.render(htmlTemplatePath, entity).replace(/([\r\n]+ +)+/gm, '').replace(/[\r\n]+/gm, '')
}
