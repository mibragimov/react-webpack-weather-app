import React from 'react';
import PropTypes from 'prop-types';
import WeatherList from '../components/weather/WeatherList';

const Home = ({ data, isLoading, error }) => {
  if (isLoading) return <h3>Loading...</h3>;
  if (error) return <p>{error}</p>;

  const renderData = () => {
    const days = data.filter((day) => day.dt_txt.includes('15:00:00'));
    console.log(days);
    return <WeatherList days={days} />;
  };

  return renderData();
};

Home.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

export default Home;
