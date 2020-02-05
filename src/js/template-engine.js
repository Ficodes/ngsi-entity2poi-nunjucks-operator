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
TemplateEngine.addFilter('addressProc', function (address) {
  return buldHtmlAddress(address)
})

export default function RenderTemplate (htmlTemplatePath, entity) {
  return TemplateEngine.render(htmlTemplatePath, entity).replace(/([\r\n]+ +)+/gm, '').replace(/[\r\n]+/gm, '')
}
