import React from 'react';
import axios from 'axios';

const useFetchForecastData = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    function fetchData() {
      setIsLoading(true);
      axios(
        'http://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&APPID=fb4334ad0ec213d0da731ec1dacdbc11'
      )
        .then((response) => {
          setData(response.data.list);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message || 'Failed to fetch from api');
        });
    }

    fetchData();
  }, []);

  return [data, isLoading, error];
};

export default useFetchForecastData;
