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