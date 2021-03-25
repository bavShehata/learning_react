import axios from 'axios';
import { useState, useEffect } from 'react';

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
    setTimeout(() => {
      axios
        .get(url, {
          cancelToken: cancelTokenSource.token,
        })
        .then((res) => {
          setData(res.data);
          setIsPending(false);
          setError(null);
        })
        .catch((e) => {
          if (axios.isCancel(e)) {
            console.log('The GET Request got cancelled');
          } else {
            console.log("Couldn't load data\n", e);
            setError(e.message);
            setIsPending(false);
          }
        });
    }, 1000);

    return () => cancelTokenSource.cancel();
  }, [url]);
  return { data, isPending, error };
};

export default useGet;
