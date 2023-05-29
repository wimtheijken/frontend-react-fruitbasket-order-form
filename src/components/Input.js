import React from 'react';

function Input({ label, id, inputType, register, name }) {
    return (
        <label htmlFor={label}>
            <p className="label"><span>{label}:</span>
                <input
                    className="input"
                    id={id}
                    type={inputType}
                    {...register(name)}
                /></p>
        </label>
    )
}

export default Input

