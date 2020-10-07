import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Forecast from './pages/Forecast';
import Home from './pages/Home';
import useFetchForecastData from './components/hooks/useFetchForecastData';

const App = () => {
  const [data, isLoading, error] = useFetchForecastData();

  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact>
          <Home data={data} isLoading={isLoading} error={error} />
        </Route>
        <Route path='/:day'>
          <Forecast data={data} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
