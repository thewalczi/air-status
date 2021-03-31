import React, { createContext, useContext, useEffect, useState } from 'react';
import { CoordinatesContext } from './Coordinates.context';

export const MapContext = createContext();

const MapContextProvider = (props) => {

    const { currentPosition, setCurrentPosition } = useContext(CoordinatesContext);

    const [ map, setMap ] = useState(null);

    const SetCurrentView = (position) => {
        map.setView(position, 15);
        setCurrentPosition(position);
    }

    useEffect(() => {
        if(map){
            SetCurrentView(currentPosition)
        };
    }, [currentPosition])

    return (
        <MapContext.Provider value={{
            map,
            setMap,
            SetCurrentView
        }}>
            {props.children}
        </MapContext.Provider>
    );
}

export default MapContextProvider;