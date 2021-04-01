import React, { createContext, useEffect, useState } from 'react';

export const CoordinatesContext = createContext();

const CoordinatesContextProvider = (props) => {

    const [ map, setMap ] = useState(null);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [currentPosition, setCurrentPosition] = useState();

 

     const GetUserPosition = () => {
         console.log(currentPosition);
         navigator.geolocation.getCurrentPosition(function(position) {
            console.log(currentPosition);
            setCurrentPosition([position.coords.latitude, position.coords.longitude]);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          });
     }
     
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