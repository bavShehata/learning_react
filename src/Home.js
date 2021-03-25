// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useGet from './useGet';

const Home = () => {
  const url = 'http://localhost:8001/blogs';
  const { data: blogs, isPending, error } = useGet(url);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={'All blogs'} />}
    </div>
  );
};

export default Home;
