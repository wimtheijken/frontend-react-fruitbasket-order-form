import React from 'react';

function Fruit( { name, state, setState } ) {

    return (
        <article className={state === 0 ? "fruitmand-leeg" : "fruitmand-vol"}>
            <div><span className="fruit">{name}</span>
                <button type="button" disabled={state === 0} onClick={() => setState(state - 1)}>-
                </button>
                <span className="cijfer">{state}</span>
                <button type="button" onClick={() => setState(state + 1)}>+</button>
            </div>
        </article>
    )
}

export default Fruit;