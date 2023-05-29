import React from 'react'

function WeekSelect( { name, register, children } ) {
    return (
        <select
            id={name}
            {...register(name)}
        >
            {children}
        </select>
    )
}

export default WeekSelect