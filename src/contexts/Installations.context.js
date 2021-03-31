import React, { useState, useEffect } from 'react';
import api from '../utils/api';

export const InstallationsContext = React.createContext();

const InstallationsContextProvider = (props) => {

    const [ installations, setInstallations ] = useState({lat: 50.2944923, lng: 18.6713802});

    const params = {
        lat: 50.062006,
        lng: 19.940984,
        maxDistanceKM: 5,
        maxResults: 1
    };

    // useEffect(() => {
    //     api.get(`v2/installations/nearest`, {params})
    //     .then(res => {
    //     console.log(res.data);
    //     setInstallations(res.data[0].location);
    //     })
    // }, []);

    return (
        <InstallationsContext.Provider value = {{
            installations
        }}>
            {props.children}
        </InstallationsContext.Provider>
    );
}

export default InstallationsContextProvider;