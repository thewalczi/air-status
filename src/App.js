import React from 'react';
//components
import Header from './components/Header.component';
import Wrapper from './components/Wrapper.component';
//contexts
import CoordinatesContextProvider from './contexts/Coordinates.context';
import MeasurmentContextProvider from './contexts/Measurment.context';
import MapContextProvider from './contexts/Map.context';

const App = () => {

  return (
    <div className="App">
      <CoordinatesContextProvider>
        <MeasurmentContextProvider>
          <MapContextProvider>
            <Header/>
            <Wrapper/>
          </MapContextProvider>
        </MeasurmentContextProvider>
      </CoordinatesContextProvider>
    </div>
  );
}

export default App;
