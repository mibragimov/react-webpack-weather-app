// External imports

import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// App imports
import Home from './pages/Home';
import useFetchForecastData from './components/hooks/useFetchForecastData';
import useGeocode from './components/hooks/useGeocode';
const Forecast = React.lazy(() => import('./pages/Forecast'));

const App = () => {
  const [status, isLocating, lat, lon] = useGeocode();
  const [data, city, isLoading, error] = useFetchForecastData(lat, lon);

  return (
    <div className='container' style={{ marginTop: '10rem' }}>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};

export default App;
