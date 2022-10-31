import React from 'react';

type MaxValueProps = {
    maxValue: number
}

const MaxValue: React.FC<MaxValueProps> = (props) => {
    return (
        <div className={'max_value'}>
            max value
            <input
                value={props.maxValue}
            type="number"
        />
        </div>
    );
};

export default MaxValue;