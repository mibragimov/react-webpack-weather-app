import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import WeatherItem from '../components/weather/WeatherItem';

const Forecast = ({ data }) => {
  const params = useParams();
  const history = useHistory();

  const renderContent = () => {
    const parts = params.day.split(' ');
    const days = data.filter((d) => d.dt_txt.includes(parts[0]));
    return days.map((day) => {
      return (
        <div className='col mb-2' key={day.dt}>
          <WeatherItem day={day} />
        </div>
      );
    });
  };

  return (
    <div className='container'>
      <h3>Hourly Forecast</h3>
      <div className='row'>{renderContent()}</div>
      <button
        type='button'
        className='btn btn-outline-primary btn-lg'
        onClick={() => history.goBack()}
      >
        &#8617; Back
      </button>
    </div>
  );
};

Forecast.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Forecast;
