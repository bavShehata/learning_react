import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
  };

  useEffect(() => {
    axios
      .get('http://localhost:8001/blogs')
      .then((res) => {
        setBlogs(res.data);
        setIsPending(false);
        setError(null);
      })
      .catch((e) => {
        console.log("Couldn't load blogs\n", e);
        setError(e.message);
        setIsPending(false);
      });
  }, []);
  return (
    <div className="home">
      <h1>Dojo Blogs</h1>
      <p>Where all ninjas write their stuff</p>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title={'All blogs'}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
