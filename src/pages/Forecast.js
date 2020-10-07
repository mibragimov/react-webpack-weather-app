import React from 'react';
import { useParams } from 'react-router-dom';
import WeatherItem from '../components/weather/WeatherItem';

const Forecast = ({ data }) => {
  const params = useParams();

  const renderContent = () => {
    const parts = params.day.split(' ');
    const days = data.filter((d) => d.dt_txt.includes(parts[0]));
    return days.map((day) => {
      return (
        <div className='col-md-2' key={day.dt}>
          <WeatherItem day={day} />
        </div>
      );
    });
  };

  return (
    <div className='container'>
      <h3>Forecast</h3>
      <div className='row'>{renderContent()}</div>
    </div>
  );
};

export default Forecast;
