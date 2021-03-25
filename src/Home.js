import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
  };

  useEffect(() => {
    axios.get('http://localhost:8001/blogs').then((res) => {
      setBlogs(res.data);
    });
  }, []);
  return (
    <div className="home">
      <h1>Dojo Blogs</h1>
      <p>Where all ninjas write their stuff</p>
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
