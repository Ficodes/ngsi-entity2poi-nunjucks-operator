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

import Schema from '../src/js/schema.js'

describe('Test Schema Model', () => {
  it('test  Schema validation without template property throw error', () => {
    expect(() => new Schema({})).to.throw('Schema: options   requires "type" property')
  })
  it('test  Schema validation without without schema property throw error ', () => {
    expect(() => new Schema({ type: 'OffStreetParking' })).to.throw('Schema: options  requires "schema" property')
  })
  it('test SchemaLoader validate add schema no error ', () => {
    expect(() => { new Schema({ type: 'OffStreetParking', schema: 'http://127.0.0.1:8080/schemas/off-street-parking.json' }) }).to.not.throw()
  })
})
