import React, {useState} from 'react';
import './App.css';
import Button from "./components/button/Button";


function App() {
    // form properties

    const [formFirstName, setFormFirstName]  = React.useState('');
    const [formLastName, setFormLastName]  = React.useState('');
    const [formAge, setFormAge] = React.useState(0);
    const [formZipcode, setFormZipcode] =React.useState('')
    const [deliveryFrequency, setDeliveryFrequency] =useState('Iedere week')
    const [deliveryTimeslot, setDeliveryTimeSlot] =useState('daytime')
    const [formReview, setFormReview] =React.useState ('');
    const [checkedNewsLetter, toggleCheckedNewsLetter] =React.useState(false)

    // fruit properties
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

    function handleSubmit(e) {
        e.preventDefault();
        console.log( counterAardbei, counterBanaan, counterAppel, counterKiwi, formFirstName, formLastName, formAge, formZipcode, deliveryFrequency, deliveryTimeslot, formReview, checkedNewsLetter)
    }

    return (


        <>
            <header>
                <h1>Fruitmand bezorgservice</h1>
            </header>
            <main>
            <Button name="🍓 Aardbeien" fruitName={counterAardbei} setFruitName={setCounterAardbei}/>
            <Button name="🍌 Bananen" fruitName={counterBanaan} setFruitName={setCounterBanaan}/>
            <Button name="🍏 Appel" fruitName={counterAppel} setFruitName={setCounterAppel}/>
            <Button name="🥝 Kiwi's" fruitName={counterKiwi} setFruitName={setCounterKiwi}/>

            <button className="reset"
                type="button"
                onClick={reset}> reset</button>

            <form onSubmit={handleSubmit}>

            <fieldset>
                <label htmlFor="firstName-details">
                    Voornaam:
                    <input
                        type="text"
                        name="voornaam"
                        id="firstName-details"
                        value={formLastName}
                        onChange={(e) => setFormLastName(e.target.value)}
                    />
                </label>
                <label htmlFor="lastName-details">
                    Achternaam:
                    <input
                        type="text"
                        name="achternaam"
                        id="lastName-details"
                        value={formFirstName}
                        onChange={(e) => setFormFirstName(e.target.value)}
                    />
                </label>
                <label htmlFor="age-details">
                    Leeftijd:
                    <input
                        type="number"
                        name="age"
                        id="age-details"
                        value={formAge}
                        onChange={(e) => setFormAge(parseInt(e.target.value))}
                    />
                </label>
                <label htmlFor="zipcode-details">
                    Postcode:
                    <input
                        type="text"
                        name="zipcode"
                        id="zipcode-details"
                        value={formZipcode}
                        onChange={(e) => setFormZipcode(e.target.value)}
                    />
                </label>

                <label htmlFor="frequency-field">
                    Bezorgfrequentie
                    <select
                        name="frequency"
                        id="frequency-details"
                        value={deliveryFrequency}
                        onChange={(e) => setDeliveryFrequency(e.target.value)}>
                        <option value="Iedere week">Iedere week</option>
                        <option value="Om de week">Om de week</option>
                        <option value="Iedere maand">Iedere maand</option>


                    </select>

                </label>
                <label htmlFor="timeslot-field-daytime">
                    Overdag
                    <input
                        type="radio"
                        value="daytime"
                        name="timeslot"
                        id="timeslot-field-daytime"
                        checked={deliveryTimeslot === 'daytime'}
                        onChange={(e) => setDeliveryTimeSlot(e.target.value)}
                    />
                </label>
                <label htmlFor="timeslot-field-evening">
                    's Avonds'
                    <input
                        type="radio"
                        value="evening"
                        name="timeslot"
                        id="timeslot-field-evening"
                        checked={deliveryTimeslot === 'evening'}
                        onChange={(e) => setDeliveryTimeSlot(e.target.value)}
                    />
                </label>
                <label htmlFor="review-details">
                    Opmerkingen:
                    <textarea
                        type="text"
                        name="review"
                        id="formReview"
                        rows="4"
                        cols="40"
                        value={formReview}
                        onChange={(e) => setFormReview(e.target.value)}
                    >

                    </textarea>
                </label>
                <label htmlFor="newsLetter">
                    <input
                        type="checkbox"
                        name="newsLetter"
                        checked={checkedNewsLetter}
                        onChange={(e) => toggleCheckedNewsLetter(e.target.value)}
                    />
                     Ik schrijf me in voor de nieuwsbrief
                </label>


                <button
                    type="submit"
                >
                    Versturen
                </button>
            </fieldset>
            </form>
            </main>
        </>
    );
}

export default App;