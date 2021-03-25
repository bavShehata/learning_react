import axios from 'axios';
import { useState, useEffect } from 'react';

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setIsPending(false);
        setError(null);
      })
      .catch((e) => {
        console.log("Couldn't load data\n", e);
        setError(e.message);
        setIsPending(false);
      });
  }, []);
  return { data, isPending, error };
};

export default useGet;
