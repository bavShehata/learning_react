import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();
  const handleDelete = (id, homepage = 0) => {
    axios
      .delete(`http://localhost:8001/blogs/${id}`)
      .then(() => {
        console.log('Blog deleted');
        if (homepage) {
          history.push('/');
        }
      })
      .catch((e) => {
        console.log("Blog couldn't get deleted\n", e);
      });
  };

  useEffect(() => {
    const cancelTokenSource = axios.CancelToken.source();
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

    return () => cancelTokenSource.cancel();
  }, [url, handleDelete]);
  return { data, isPending, error, handleDelete };
};

export default useGet;
