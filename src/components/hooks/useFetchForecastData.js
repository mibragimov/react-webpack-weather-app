import React from 'react';
import axios from 'axios';

const useFetchForecastData = (lat, lon) => {
  const [data, setData] = React.useState([]);
  const [city, setCity] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  function fetchData() {
    setIsLoading(true);
    axios(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&APPID=fb4334ad0ec213d0da731ec1dacdbc11`
    )
      .then((response) => {
        setData(response.data.list);
        setCity(response.data.city);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message || 'Failed to fetch from api');
      });
  }
  React.useEffect(() => {
    if (!!lat && !!lon) {
      fetchData();
    }
  }, [lat, lon]);

  return [data, city, isLoading, error];
};

export default useFetchForecastData;
