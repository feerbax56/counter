import React from 'react';
import './App.css';

type MonitorType = {
    counter: number
}

function Monitor(props: MonitorType) {
    const totalCount = props.counter
    let className = 'monitor'
    if (props.counter === 5) {
        className += ' ' + 'red_text';
    }

    return (
        <div className={className}
        >{totalCount}</div>
    )
}

export default Monitor