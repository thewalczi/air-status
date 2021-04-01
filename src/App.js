import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import Header from './components/Header.component';
import Wrapper from './components/Wrapper.component';
//contexts
import CoordinatesContextProvider from './contexts/Coordinates.context';
import MeasurmentContextProvider from './contexts/Measurment.context';
import MapContextProvider from './contexts/Map.context';
//pages
import HomePage from './pages/Home.page';

const App = () => {

  return (
    <Router>
      <Switch>
    <div className="App">
      <CoordinatesContextProvider>
        <MeasurmentContextProvider>
          <MapContextProvider>
            <Header/>
            <Route path="/" exact component={HomePage} />
          </MapContextProvider>
        </MeasurmentContextProvider>
      </CoordinatesContextProvider>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
