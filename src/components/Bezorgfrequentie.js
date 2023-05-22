import React from 'react';
import WeekSelect from "./WeekSelect";
import Radiobutton from "./Radiobutton";

function Bezorgfrequentie( { label, register } ) {
    return (
        <label>
            {label}:
            <p>
                <WeekSelect
                    name="frequentie"
                    register={register}
                >
                    <option value="iedere-week">iedere week</option>
                    <option value="om-de-week">om de week</option>
                    <option value="iedere-maand">iedere maand</option>
                </WeekSelect>
            </p>
            <p>
                <Radiobutton
                    type="radio"
                    id="dag"
                    name="dagdeel"
                    value="overdag"
                    register={register}
                    label="Overdag"
                />
                <Radiobutton
                    type="radio"
                    id="avond"
                    name="dagdeel"
                    value="avond"
                    register={register}
                    label="'s Avonds"
                />
            </p>
        </label>
    )
}

export default Bezorgfrequentie;

/*
<label>
    Bezorgfrequentie:
    <p>
        <WeekSelect
            name="frequentie"
            register={register}
        >
            <option value="iedere-week">iedere week</option>
            <option value="om-de-week">om de week</option>
            <option value="iedere-maand">iedere maand</option>
        </WeekSelect>
    </p>
    <p>
        <Radiobutton
            type="radio"
            id="dag"
            name="dagdeel"
            value="overdag"
            register={register}
            label="Overdag"
        />
        <Radiobutton
            type="radio"
            id="avond"
            name="dagdeel"
            value="avond"
            register={register}
            label="'s Avonds"
        />
    </p>
</label>
*/
