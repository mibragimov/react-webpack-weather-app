import React from 'react';
import PropTypes from 'prop-types';
import WeatherItem from './WeatherItem';

const WeatherList = ({ days }) => {
  return (
    <div className='container pt-5'>
      <div className='row'>
        {days.map((day) => {
          return (
            <div className='col-md-2' key={day.dt}>
              <WeatherItem day={day} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

WeatherList.propTypes = {
  days: PropTypes.array.isRequired,
};

export default WeatherList;
