import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Forecast from './pages/Forecast';
import Home from './pages/Home';
import useFetchForecastData from './components/hooks/useFetchForecastData';
import useGeocode from './components/hooks/useGeocode';

const App = () => {
  const [status, isLocating, lat, lon] = useGeocode();
  const [data, city, isLoading, error] = useFetchForecastData(lat, lon);

  return (
    <div className='container' style={{ marginTop: '10rem' }}>
      <Switch>
        <Route path='/' exact>
          <Home
            isLocating={isLocating}
            status={status}
            data={data}
            city={city}
            isLoading={isLoading}
            error={error}
          />
        </Route>
        <Route path='/:day'>
          <Forecast data={data} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
