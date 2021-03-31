import React from 'react';
//components
import Header from './components/Header.component';
import Wrapper from './components/Wrapper.component';
//contexts
import CoordinatesContextProvider from './contexts/Coordinates.context';
import InstallationsContextProvider from './contexts/Installations.context';
import MapContextProvider from './contexts/Map.context';

const App = () => {

  return (
    <div className="App">
      <InstallationsContextProvider>
        <CoordinatesContextProvider>
          <MapContextProvider>
            <Header/>
            <Wrapper/>
          </MapContextProvider>
        </CoordinatesContextProvider>
      </InstallationsContextProvider>
    </div>
  );
}

export default App;
