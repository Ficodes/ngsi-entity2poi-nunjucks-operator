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
