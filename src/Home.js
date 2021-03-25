import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },

    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },

    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'mario',
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <h1>Dojo Blogs</h1>
      <p>Where all ninjas write their stuff</p>
      <h2>Current blogs</h2>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
