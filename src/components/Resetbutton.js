import React from 'react'

function Resetbutton( { type, className, label, setAardbei, setBanaan, setAppel, setKiwi } ) {
    function handleReset(type) {
        if (type === "button") {
            setAardbei(0)
            setBanaan(0)
            setAppel(0)
            setKiwi(0)
        }
    }
    return (
        <button type={type} className={className} onClick={() => {
            handleReset(type)
        }}>{label}
        </button>
    )
}

export default Resetbutton;