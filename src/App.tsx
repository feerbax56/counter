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

    const addCount = () => {
        setCounter(counter + 1)
    }

    const resetCount = () => {
        setCounter(0)
    }

    return (
        <div className={'tablo'}>
            <div className={'setter'}>
                <MaxValue/>
                <StartValue/>
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
