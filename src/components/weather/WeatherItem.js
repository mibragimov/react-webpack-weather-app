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

  function renderTemp(temp) {
    if (temp === 'low') {
      return (
        <p className='card-text'>
          Low <span className='h3'>{Math.floor(day.main.temp_min)}&#8451;</span>
        </p>
      );
    }
    return (
      <p className='card-text'>
        High <span className='h3'>{day.main.temp_max.toFixed(0)}&#8451;</span>
      </p>
    );
  }

  return (
    <div
      className={`card ${pathname === '/' ? 'effect' : ''}`}
      onClick={handleNavigate}
      style={{ height: '24rem' }}
    >
      <div className='p-3'>
        <WeatherIcon icon={day.weather[0].main} />
      </div>

      <div className='card-body'>
        <h5 className='card-title'>{renderDate()}</h5>
        <div className='d-flex justify-content-between'>
          {renderTemp('low')}
          {renderTemp()}
        </div>
      </div>
    </div>
  );
};

WeatherItem.propTypes = {
  day: PropTypes.object.isRequired,
};

export default WeatherItem;
