import React from 'react';

const useGeocode = () => {
  const [status, setStatus] = React.useState('');
  const [isLocating, setIsLocating] = React.useState(false);
  const [lat, setLat] = React.useState(null);
  const [lon, setLon] = React.useState(null);

  React.useEffect(() => {
    setIsLocating(true);
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
      setIsLocating(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLat(latitude);
      setLon(longitude);
      setIsLocating(false);
    }
    function error(err) {
      setIsLocating(false);
      setStatus(err.message);
    }
  }, []);
  return [status, isLocating, lat, lon];
};

export default useGeocode;
