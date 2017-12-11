import React from 'react';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

export default (props) => {

    function average(data) {
        return _.round(_.sum(data)/data.length);
    }

    return(
    <div>
        <Sparklines data={props.weatherMetric} height={60} width={180}>
            <SparklinesLine color={props.color}/>
            <SparklinesReferenceLine type="avg"/>
        </Sparklines>
        <div>Average: {average(props.weatherMetric)} {props.units}</div>
    </div>
    )
};