import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory();

  const objectsEqual = (o1, o2) => {
    if (o1 && o2) {
      return JSON.stringify(o1) === JSON.stringify(o2);
    } else {
      return false;
    }
  };

  const handleDelete = (id, homepage = 0) => {
    axios
      .delete(`http://localhost:8001/blogs/${id}`)
      .then(() => {
        console.log('Blog deleted');
        setData([]);
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
        if (!objectsEqual(res.data, data)) {
          console.log('object');
          setData(res.data);
        }
        console.log(res.data);
        console.log(data);
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
  }, [url, data]);
  return { data, isPending, error, handleDelete };
};

export default useGet;
