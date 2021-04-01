import React, { useState, useEffect, useContext } from 'react';
import api from '../utils/api';
import { CoordinatesContext } from './Coordinates.context';

export const MeasurmentContext = React.createContext();

const MeasurmentContextProvider = (props) => {

    const { currentPosition } = useContext(CoordinatesContext);

    const [ measurment, setMeasurment ] = useState();

    const [ params, setParams ] = useState({
        lat: 50.062006,
        lng: 19.940984,
        maxDistanceKM: 10
    });

    const GetMeasurment = () => {
        api.get(`v2/measurements/nearest`, {params})
        .then(res => {
            console.log(res.data.current.values);
            setMeasurment(res.data.current);
        })
    }

    const SetMeasurmentParams = (lat, lng) => {
        setParams({...params, lat: lat, lng: lng});
    }

    useEffect(() => {
        if(currentPosition){
            SetMeasurmentParams(currentPosition[0], currentPosition[1]);
            GetMeasurment();
        }
    }, [currentPosition]);

    return (
        <MeasurmentContext.Provider value = {{
            measurment
        }}>
            {props.children}
        </MeasurmentContext.Provider>
    );
}

export default MeasurmentContextProvider;