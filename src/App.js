import React, {useState} from 'react';
import './App.css';
import Button from "./components/button/Button";
import logo from './assets/screenshot-logo.png'

function App() {
    const [counterAardbei, setCounterAardbei] =useState(0);
    const [counterBanaan, setCounterBanaan] =useState(0);
    const [counterAppel, setCounterAppel] =useState(0);
    const [counterKiwi, setCounterKiwi] =useState(0);

    function reset(){
        setCounterAardbei(0);
        setCounterBanaan(0);
        setCounterAppel(0);
        setCounterKiwi(0);
    }

    return (
        <>
            <header> <img scr={logo} />
            </header>
            <h1>Fruitmand bezorgservice</h1>
            <Button name="🍓 Aardbeien" fruitName={counterAardbei} setFruitName={setCounterAardbei}/>
            <Button name="🍌 Bananen" fruitName={counterBanaan} setFruitName={setCounterBanaan}/>
            <Button name="🍏 Appel" fruitName={counterAppel} setFruitName={setCounterAppel}/>
            <Button name="🥝 Kiwi's" fruitName={counterKiwi} setFruitName={setCounterKiwi}/>

            <button className="reset"
                type="button"
                onClick={reset}> reset</button>

        </>
    );
}

export default App;