import React from 'react';
import PropTypes from 'prop-types';
import WeatherList from '../components/weather/WeatherList';
import BaseAlert from '../components/ui/BaseAlert';

const Home = ({ isLocating, status, data, city, isLoading, error }) => {
  if (isLocating)
    return (
      <BaseAlert text='Please, enable location services to view weather forecast.' />
    );
  if (!!status) return <BaseAlert text={status} />;
  if (isLoading) return <BaseAlert text='Loading...' />;
  if (error) return <BaseAlert text={error} />;

  const renderData = () => {
    const days = data.filter((day) => day.dt_txt.includes('15:00:00'));

    return (
      <div className='container'>
        <div className='jumbotron jumbotron-fluid'>
          <div className='container'>
            <h1 className='display-4'>{city && city.name}</h1>
            <p className='lead'>5 day / 3 hour forecast data</p>
          </div>
        </div>
        <WeatherList days={days} />;
      </div>
    );
  };

  return renderData();
};

Home.propTypes = {
  isLocating: PropTypes.bool,
  status: PropTypes.string,
  data: PropTypes.array.isRequired,
  city: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default Home;
