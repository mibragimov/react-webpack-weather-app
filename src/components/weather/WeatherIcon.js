import React from 'react';
import PropTypes from 'prop-types';
import ReactAnimatedWeather from 'react-animated-weather';

const App = ({ icon, color, size, animate }) => {
  let iconName;
  switch (icon) {
    case 'CLear':
      iconName = 'CLEAR_DAY';
      break;
    case 'Clouds':
      iconName = 'CLOUDY';
      break;
    case 'Thunderstorm':
      iconName = 'WIND';
      break;
    case 'Rain':
      iconName = 'RAIN';
      break;
    case 'Snow':
      iconName = 'SNOW';
      break;
    case 'Drizzle':
    case 'Mist':
    case 'Fog':
    case 'Haze':
      iconName = 'FOG';
      break;
    default:
      iconName = 'CLEAR_DAY';
  }
  return (
    <ReactAnimatedWeather
      icon={iconName}
      color={color}
      size={size}
      animate={animate}
    />
  );
};
ReactAnimatedWeather.defaultProps = {
  animate: true,
  size: 100,
  color: 'black',
};

ReactAnimatedWeather.propTypes = {
  icon: PropTypes.oneOf([
    'CLEAR_DAY',
    'CLEAR_NIGHT',
    'PARTLY_CLOUDY_DAY',
    'PARTLY_CLOUDY_NIGHT',
    'CLOUDY',
    'RAIN',
    'SLEET',
    'SNOW',
    'WIND',
    'FOG',
  ]).isRequired,
  animate: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default App;
