import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';
import moment from 'moment';

const WeatherItem = ({ day }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  function handleNavigate() {
    if (pathname !== '/') {
      return;
    }
    history.push(`/${day.dt_txt}`);
  }

  function renderDate() {
    if (pathname !== '/') {
      return moment(day.dt_txt).format('dddd, hA');
    } else {
      return moment(day.dt_txt).format('dddd');
    }
  }

  return (
    <div className='card' onClick={handleNavigate} style={{ height: '24rem' }}>
      <div className='p-3'>
        <WeatherIcon icon={day.weather[0].description} />
      </div>

      <div className='card-body'>
        <h5 className='card-title'>{renderDate()}</h5>
        <p className='card-text'>{day.main.temp_min.toFixed(0)}</p>
        <p className='card-text'>{day.main.temp_max.toFixed(0)}</p>
      </div>
    </div>
  );
};

WeatherItem.propTypes = {
  day: PropTypes.object.isRequired,
};

export default WeatherItem;
