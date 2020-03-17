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
import { Loader } from 'nunjucks'

export default class CustomWebLoader extends Loader {
  constructor (baseURL, opts) {
    super()
    if (!baseURL) throw new Error('CustomWebLoader baseUrl param required')
    this._views = new Map()
    this.baseURL = baseURL
    this.opts = opts || {}
  }
  getSource (name, cb) {
    let result
    if (!this._views.get(name)) {
      this.fetch(`${this.baseURL}/${name}`, (err, src) => {
        if (err) {
          if (cb) {
            cb(err.content)
          } else if (err.status === 404) {
            result = null
          } else {
            throw err.content
          }
        } else {
          result = {
            src: src,
            path: name
          }
          this.emit('load', name, result)
          if (cb) {
            cb(null, result)
          }
        }
      })
    } else {
      result = {
        src: src,
        path: name
      }
      this.emit('load', name, result)
    }
    return result
  }

  fetch (url, cb) {
    const ajax = new XMLHttpRequest()
    let loading = true
    ajax.onreadystatechange = () => {
      if (ajax.readyState === 4 && loading) {
        loading = false
        if (ajax.status === 0 || ajax.status === 200) {
          cb(null, ajax.responseText)
        } else {
          cb({
            status: ajax.status,
            content: ajax.responseText
          })
        }
      }
    }

    ajax.open('GET', url, this.async)
    ajax.send()
  }
}
