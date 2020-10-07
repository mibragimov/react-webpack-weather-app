import React from 'react';
import PropTypes from 'prop-types';
import ReactAnimatedWeather from 'react-animated-weather';

const App = ({ icon, color, size, animate }) => {
  let iconName;
  switch (icon) {
    case 'clear sky':
      iconName = 'CLEAR_DAY';
      break;
    case 'few clouds':
    case 'broken clouds':
      iconName = 'PARTLY_CLOUDY_DAY';
      break;
    case 'scattered clouds':
    case 'thunderstorm':
      iconName = 'CLOUDY';
      break;
    case 'shower rain':
    case 'rain':
    case 'light rain':
      iconName = 'RAIN';
      break;
    case 'snow':
      iconName = 'SNOW';
      break;
    case 'mist':
      iconName = 'FOG';
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
  color: 'purple',
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
