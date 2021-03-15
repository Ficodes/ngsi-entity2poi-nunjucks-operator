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
        opts = opts || {}
        if (!baseURL) {
            throw new Error('CustomWebLoader baseUrl param required')
        } else if (!baseURL.endsWith("/")) {
            baseURL += "/"
        }
        this.baseURL = baseURL
        this.useCache = !!opts.useCache;
        this.async = !!opts.async;
    }

    getSource(name, cb) {
        const url = new URL(name, this.baseURL)
        let result
        this.fetch(url, (err, src) => {
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
                    path: name,
                    noCache: this.useCache
                }
                this.emit('load', name, result)
                if (cb) {
                    cb(null, result)
                }
            }
        })

        // if this WebLoader isn't running asynchronously, the
        // fetch above would actually run sync and we'll have a
        // result here
        return result;
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
