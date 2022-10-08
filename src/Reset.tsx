import React from 'react';

type ResetType = {
    resetCount: () => void
    counter: number
}

function Reset(props: ResetType) {
    return (
        <div className={'btn_reset'}>
            <button disabled={props.counter === 0}
                    onClick={props.resetCount}
            >reset
            </button>
        </div>
    )
}

export default Reset