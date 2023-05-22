import React, {useState} from 'react'
import Header from "./components/Header"
import Fruit from "./components/Fruit"
import Resetbutton from "./components/Resetbutton"
import Input from "./components/Input"
import Bezorgfrequentie from "./components/Bezorgfrequentie"
import Opmerkingen from "./components/Opmerkingen"
import Voorwaarden from "./components/Voorwaarden"
import {useForm} from 'react-hook-form'
import './App.css'

function App() {

    const [aardbei, setAardbei] = useState(0)
    const [banaan, setBanaan] = useState(0)
    const [appel, setAppel] = useState(0)
    const [kiwi, setKiwi] = useState(0)
    const [accoord, toggleAccoord] = useState(false)

    function handleFormSubmit({firstName, lastName, age, postcode, frequentie, dagdeel, opmerking, checkbox}) {
        console.log(`
        Bestelling:
        ${aardbei} aardbeien 
        ${banaan} bananen 
        ${appel} appels 
        ${kiwi} kiwi's\n
        Verzenden naar:
        Naam: ${firstName} ${lastName}, Leeftijd ${age}
        Postcode: ${postcode}\n
        Wanneer:
        ${frequentie} dagdeel: ${dagdeel}\n
        Opmerkingen:
        ${opmerking}\n
        Accoord met de voorwaaden: ${checkbox}`)
    }

    const {register, handleSubmit} = useForm()

    return (
        <>
            <Header/>
            <section>
                <Fruit
                    name="🍓 Aardbeien "
                    state={aardbei}
                    setState={setAardbei}
                />
                <Fruit
                    name="🍌 Bananen "
                    state={banaan}
                    setState={setBanaan}
                />
                <Fruit
                    name="🍏 Appels "
                    state={appel}
                    setState={setAppel}
                />
                <Fruit
                    name="🥝 Kiwi's "
                    state={kiwi}
                    setState={setKiwi}
                />
                <Resetbutton
                    type="button"
                    className="reset"
                    label="Reset"
                    setAardbei={setAardbei}
                    setBanaan={setBanaan}
                    setAppel={setAppel}
                    setKiwi={setKiwi}
                />
            </section>
            <div className="form-container">
                <form onSubmit={handleSubmit(handleFormSubmit)}>
                    <Input
                        label="Voornaam"
                        id="firstName"
                        inputType="text"
                        name="firstName"
                        register={register}
                    />
                    <Input
                        label="Achternaam"
                        id="lastName"
                        inputType="text"
                        name="lastName"
                        register={register}
                    />
                    <Input
                        label="Leeftijd"
                        id="leeftijd"
                        inputType="number"
                        name="age"
                        register={register}
                    />
                    <Input
                        label="Postcode"
                        id="postcode"
                        inputType="text"
                        name="postcode"
                        register={register}
                    />
                    <Bezorgfrequentie
                        label="Bezorgfrequentie"
                        register={register}
                    />

                    <Opmerkingen
                        label="Opmerkingen"
                        name="opmerking"
                        register={register}
                    />
                    <Voorwaarden
                        name="checkbox"
                        register={register}
                        accoord={accoord}
                        toggleAccoord={toggleAccoord}
                    />
                    <p>
                        <Resetbutton
                            type="submit"
                            className="verzend"
                            label="Verzend"
                        />
                    </p>
                </form>
            </div>
        </>
    )
}

export default App
