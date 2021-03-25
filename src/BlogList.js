import axios from 'axios';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8001/blogs/${id}`)
      .then(() => {
        console.log('Blog deleted');
        window.location.reload();
      })
      .catch((e) => {
        console.log("Blog couldn't get deleted\n", e);
      });
  };
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>{blog.author}</p>
            </Link>
            <button
              onClick={() => {
                handleDelete(blog.id);
              }}
            >
              Delete blog
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
