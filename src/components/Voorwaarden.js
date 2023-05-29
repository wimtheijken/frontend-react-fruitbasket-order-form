import React from 'react'

function Voorwaarden( { name, register, accoord, toggleAccoord } ) {
    return (
        <label htmlFor="checkbox">
            <p>
                <input
                    id="checkbox"
                    type="checkbox"
                    value={accoord}
                    {...register(name)}
                    onChange={() => toggleAccoord(!accoord)}
                />
                <span>Ik ga accoord met de voorwaarden</span>
            </p>
        </label>
    )
}

export default Voorwaarden;