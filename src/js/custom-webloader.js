/*
 * Copyright (c) 2020-2021 Future Internet Consulting and Development Solutions S.L.
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
/* globals XMLHttpRequest */
import { Loader } from 'nunjucks'

export default class CustomWebLoader extends Loader {
    constructor(baseURL, opts) {
        super()
        if (!baseURL) {throw new Error('CustomWebLoader baseUrl param required')}
        this.baseURL = baseURL
        this.opts = opts || {}
    }

    getSource(name, cb) {
        this.fetch(new URL(name, this.baseURL), (err, src) => {
            if (err) {
                if (cb) {
                    cb(err.content)
                }
            } else {
                const result = {
                    src: src,
                    path: name
                }
                this.emit('load', name, result)
                if (cb) {
                    cb(null, result)
                }
            }
        })
    }

    fetch(url, cb) {
        const ajax = new XMLHttpRequest()
        let loading = true
        ajax.onreadystatechange = () => {
            if (ajax.readyState === 4 && loading) {
                loading = false
                if (ajax.status === 200) {
                    cb(null, ajax.responseText)
                } else {
                    const err = new Error('Unable to retrieve the template')
                    err.details = {
                        status: ajax.status,
                        content: ajax.responseText
                    }
                    cb(err)
                }
            }
        }

        ajax.open('GET', url, this.async)
        ajax.send()
    }
}
