import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
  };

  useEffect(() => {
    axios.get('http://localhost:8001/blogs').then((res) => {
      setBlogs(res.data);
      setIsPending(false);
    });
  }, []);
  return (
    <div className="home">
      <h1>Dojo Blogs</h1>
      <p>Where all ninjas write their stuff</p>
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
