import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title, handleDelete }) => {
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
                handleDelete(blog.id, 0);
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
