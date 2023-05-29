import React from 'react';

function Radiobutton( { type, id, name, value, register, label } ) {
    return (
        <>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                {...register(name)}
            />
            <label
                htmlFor={value}>
                {label}
            </label>
        </>
    )
}

export default Radiobutton;