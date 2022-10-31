import React, {useState} from 'react';
import './App.css';
import Monitor from './Monitor';
import Incorporated from './Incorporated';
import Reset from './Reset';
import Set from './Set'
import MaxValue from './MaxValue';
import StartValue from './StartValue';


function App() {

    let [counter, setCounter] = useState(0)

    let setup = {
        max: 0,
        start: 0

    }

    const addCount = () => {
        setCounter(counter + 1)
    }

    const resetCount = () => {
        setCounter(0)
    }

    return (
        <div className={'tablo'}>
            <div className={'setter'}>
                <div className={'value_input'}>
                    <MaxValue
                        maxValue={setup.max}
                    />
                    <StartValue
                        startValue={setup.start}
                    />
                </div>
                <Set/>
            </div>

            <div className={'counter'}>
                <Monitor counter={counter}/>
                <Incorporated addCount={addCount}
                              counter={counter}
                />
                <Reset resetCount={resetCount}
                       counter={counter}
                />
            </div>
        </div>

    );
}

export default App;
