import { useParams } from 'react-router';
import useGet from './useGet';

const BlogDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:8001/blogs/${id}`;
  const { data: blog, isPending, error, handleDelete } = useGet(url);
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>
            <p>{blog.body}</p>
          </div>
          <button
            onClick={() => {
              handleDelete(blog.id, 1);
            }}
          >
            Delete blog
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
