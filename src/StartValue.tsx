import React from 'react';


type StartValueProps = {
    startValue: number
}


const StartValue: React.FC<StartValueProps> = (props) => {
    return (
        <div className={'start_value'}>
           start value
            <input
                value={props.startValue}
                type="number"/>
        </div>
    );
};

export default StartValue;