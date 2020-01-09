import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import useLocalStorage from 'hooks/useLocalStorage';

export default url => {
  const BASE_URL = 'https://conduit.productionready.io/api';

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage('token');

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    let skipGetResponseAfterDestroy = false;
    const requestOptions = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : ''
        }
      }
    };

    if (!isLoading) {
      return;
    }

    axios(BASE_URL + url, requestOptions)
      .then(res => {
        if (!skipGetResponseAfterDestroy) {
          setResponse(res.data);
          setIsLoading(false);
        }
      })
      .catch(error => {
        if (!skipGetResponseAfterDestroy) {
          setError(error.response.data);
          setIsLoading(false);
        }
      });

    return () => {
      skipGetResponseAfterDestroy = true;
    };
  }, [isLoading, options, url, token]);

  return [{ isLoading, response, error }, doFetch];
};
