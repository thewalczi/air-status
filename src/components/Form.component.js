import React, { useContext, useState } from 'react';
import { CoordinatesContext } from '../contexts/Coordinates.context';

const Form = (props) => {

    const { setCurrentPosition, GetUserPosition, latitude, setLatitude, longitude, setLongitude } = useContext(CoordinatesContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCurrentPosition([+latitude, +longitude]);
    }

    const handleClick = () => {
        GetUserPosition();
    }


    return (
        <form className="form" onSubmit={handleSubmit}>
            <section>
                <label>
                    Latitude
                    <input name="Latitude" type="number" value={latitude} onChange={(e) => setLatitude(e.target.value)}/>
                </label>
            </section>
            <section>
                <label htmlFor="lng">
                    Longitude
                    <input name="Longitude" type="number" id="lng" value={longitude} onChange={(e) => setLongitude(e.target.value)}/>
                </label>
            </section>
            <section>
                <button type="submit">Find</button>
                <button onClick={handleClick}>Use my localization</button>
            </section>
        </form>
    );
}

export default Form;