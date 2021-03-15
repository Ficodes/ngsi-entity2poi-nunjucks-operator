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

export const  MOCK_VIEW = `
<div>
    {% if description %}
        <p>{{description}}</p>
    {% endif %}
    {% if address and address | is_obj  %}
        {{ address | addressProc  }} <br/>
    {% elif address %}
        {{ address }} <br/>
    {% endif %}
    <p><b><i class="fa fa-fw fa-clock" /> Date: </b> {{ dateModified | date }}</p>
    {% if availableSpotNumber and  totalSpotNumber %}
        <p><i class="fa fa-fw fa-info" />{{availableSpotNumber}} available parking spots out of {{totalSpotNumber }}</p>
    {% elif availableSpotNumber %}
        <p><i class="fa fa-fw fa-info" /> {{availableSpotNumber}} available parking spots out of {{totalSpotNumber }}</p>
    {% endif %}
</div>

`

export const AGRI_PARCEL_MOCK_VIEW = `
<style>
    .list-group {
        display: flex;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
    }

    .list-group-item-action {
        width: 100%;
        color: #495057;
        text-align: inherit;
    }

    .list-group-item-action:hover, .list-group-item-action:focus {
        z-index: 1;
        color: #495057;
        text-decoration: none;
        background-color: #f8f9fa;
    }

    .list-group-item-action:active {
        color: #212529;
        background-color: #e9ecef;
    }

    .list-group-item {
        position: relative;
        display: block;
        padding: 0.75rem 1.25rem;
        margin-bottom: 0;
        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.125);
    }

    .list-group-item:first-child {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    .list-group-item:last-child {
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }

    .list-group-item.disabled, .list-group-item:disabled {
        color: #6c757d;
        pointer-events: none;
        background-color: #fff;
    }

    .list-group-item.active {
        z-index: 2;
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
    }

    .list-group-item + .list-group-item {
        border-top-width: 0;
    }

    .list-group-item + .list-group-item.active {
        margin-top: -1px;
        border-top-width: 1px;
    }

    .list-group-horizontal {
        flex-direction: row;
    }

    .list-group-horizontal .list-group-item:first-child {
        border-bottom-left-radius: 0.25rem;
        border-top-right-radius: 0;
    }

    .list-group-horizontal .list-group-item:last-child {
        border-top-right-radius: 0.25rem;
        border-bottom-left-radius: 0;
    }

    .list-group-horizontal .list-group-item.active {
        margin-top: 0;
    }

    .list-group-horizontal .list-group-item + .list-group-item {
        border-top-width: 1px;
        border-left-width: 0;
    }

    .list-group-horizontal .list-group-item + .list-group-item.active {
        margin-left: -1px;
        border-left-width: 1px;
    }

    .scroll-content {
        max-height: 365px;
        position: relative;
        display: block;
        overflow: auto;
    }

</style>
<div class="scroll-content">
    {% if description %}
    <p>{{description}}</p>
    {% endif %}
    {% if dateCreated %}
    <p><b><i class="fa fa-fw fa-clock"/> Created: </b> {{ dateCreated | date }}</p>
    {% endif %}
    {% if dateModified %}
    <p><b><i class="fa fa-fw fa-clock"/> Modified: </b> {{ dateModified | date }}</p>
    {% endif %}
    {% if area %}
    <p><b>Modified: </b> {{ area }}</p>
    {% endif %}
    {% if category and  category | is_arr %}
    <p><b>Category: </b> {{ category | join(",")}}</p>
    {%else %}
    <p><b>Category: </b> {{ category }}</p>
    {% endif %}
    {% if relatedSource %}
    <h5>Related sources</h5>
    {% for source in relatedSource %}
    <p>Application: {{ source.application}}</p>
    <p>ApplicationEntityId: {{ source.applicationEntityId}}</p>
    {% endfor %}
    {% endif %}
    {% if seeAlso %}
    <h5>See Also</h5>
    {% for item in seeAlso %}
    <p><a href="{{item | safe}}">{{agroVocConcept | safe}}</a></p>
    {% endfor %}
    {% endif %}
    {% if belongsTo %}
    <p><b> Belongs To: </b> {{ belongsTo }}</p>
    {% endif %}
    {% if ownedBy %}
    <p><b> Owned By: </b> {{ ownedBy }}</p>
    {% endif %}
    {% if hasAgriParcelParent %}
    <p><b>Parent Parcel: </b> {{ hasAgriParcelParent }}</p>
    {% endif %}
    {% if hasAgriParcelChildren %}
    <h5>Children Parcels</h5>
    <ul class="list-group">
        {% for child in hasAgriParcelChildren %}
        <li class="list-group-item"> {{ child }}</li>
        {% endfor %}
    </ul>
    {% endif %}
    {% if hasAgriCrop %}
    <p><b>Agri Crop: </b> {{ hasAgriCrop }}</p>
    {% endif %}
    {% if cropStatus %}
    <p><b>Crop Status: </b> {{ cropStatus }}</p>
    {% endif %}
    {% if lastPlantedAt %}
    <p><b>Last PLanted At: </b> {{ lastPlantedAt }}</p>
    {% endif %}
    {% if hasAgriSoil %}
    <p><b>Agri Soil: </b> {{ hasAgriSoil }}</p>
    {% endif %}
    {% if hasDevice %}
    <h5>Devices</h5>
    <ul class="list-group">
        {% for device in hasDevice %}
        <li class="list-group-item"> {{ device }}</li>
        {% endfor %}
    </ul>
    {% endif %}
</div>
    `