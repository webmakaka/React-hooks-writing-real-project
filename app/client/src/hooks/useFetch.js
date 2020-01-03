import { useState, useEffect } from 'react';
import axios from 'axios';

export default url => {
  const BASE_URL = 'https://conduit.productionready.io/api';

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    console.log('options');
    console.log(options);

    axios(BASE_URL + url, options)
      .then(res => {
        console.log('success', res);
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch(error => {
        console.log('error', error);
        setIsLoading(false);
        setError(error.response.data);
      });
  }, [isLoading]);

  return [{ isLoading, response, error }, doFetch];
};
