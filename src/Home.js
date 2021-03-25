import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useGet from './useGet';

const Home = () => {
  let url = 'http://localhost:8001/blogs';
  const { data: blogs, isPending, error } = useGet(url);
  //   useEffect(() => {
  //     useGet(url);
  //   }, [url]);
  return (
    <div className="home">
      <h1>Dojo Blogs</h1>
      <p>Where all ninjas write their stuff</p>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={'All blogs'} />}
    </div>
  );
};

export default Home;
