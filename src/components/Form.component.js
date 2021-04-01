import React, { useContext } from 'react';
import { CoordinatesContext } from '../contexts/Coordinates.context';

const Form = (props) => {

    const { setCurrentPosition, GetUserPosition, latitude, setLatitude, longitude, setLongitude } = useContext(CoordinatesContext);

    const formSubmit = (e) => {
        e.preventDefault();
        setCurrentPosition([+latitude, +longitude]);
    }

    const handleClick = () => {
        GetUserPosition();
    }

    return (
        <form className="form" onSubmit={formSubmit}>
            <section className="form__section">
                <label className="form__label">
                    Latitude
                </label>
                <input className="form__input" name="Latitude" type="number" value={latitude} onChange={(e) => setLatitude(e.target.value)}/>
            </section>
            <section className="form__section">
                <label className="form__label">
                    Longitude
                </label>
                <input className="form__input" name="Longitude" type="number" id="lng" value={longitude} onChange={(e) => setLongitude(e.target.value)}/>
            </section>
                <button className="button button--primary" type="submit">Find</button>
                <button className="button button--secondary" onClick={handleClick}>Use my localization</button>
        </form>
    );
}

export default Form;