import React from 'react'

function Opmerkingen( { name, label, register } ) {
    return (
        <label>
            {label}:
            <p>
                <textarea
                    id={name}
                    rows="3"
                    cols="35"
                    {...register(name)}
                />
            </p>
        </label>
    )
}

export default Opmerkingen;