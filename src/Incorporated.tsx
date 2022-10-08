import React from 'react';
import './App.css';


type IncorporatedType = {
    addCount: () => void
    counter: number
}

function Incorporated(props: IncorporatedType) {

    return (
        <div className={'btn_inc'}>
            <button onClick={props.addCount}
                    disabled={props.counter === 5}

            >inc
            </button>
        </div>
    )
}

export default Incorporated