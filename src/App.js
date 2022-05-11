import React, {useState} from 'react';
import './App.css';

function App() {
    const [counter, setCounter] =useState(0)
    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <article>
                <h2>Aardbeien</h2>
                <button onClick={() => setCounter(counter -1)}>
                    -
                </button>
                {counter}
                <button onClick={() => setCounter(counter +1)}>
                    +
                </button>
            </article>
        </>
    );
}

export default App;