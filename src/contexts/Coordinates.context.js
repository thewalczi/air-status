import React, { createContext, useEffect, useState } from 'react';

export const CoordinatesContext = createContext();

const CoordinatesContextProvider = (props) => {

    const [ map, setMap ] = useState(null);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [currentPosition, setCurrentPosition] = useState();

    //Center of Poland as a default location
    const [defaultPosition, setDefaultPosition] = useState([
        52.04,
        19.28
    ])

     const GetUserPosition = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords);
            setCurrentPosition([position.coords.latitude, position.coords.longitude]);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          });
     }

    useEffect(() => {
        setCurrentPosition(defaultPosition);
    }, []);

    return (
        <CoordinatesContext.Provider value ={{
            currentPosition,
            setCurrentPosition,
            map,
            setMap,
            GetUserPosition,
            latitude,
            setLatitude,
            longitude,
            setLongitude
        }}>
            {props.children}
        </CoordinatesContext.Provider>
    );
}

export default CoordinatesContextProvider;