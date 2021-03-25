import axios from 'axios';
import { useHistory, useParams } from 'react-router';
import useGet from './useGet';

const BlogDetails = () => {
  const { id } = useParams();
  const url = `http://localhost:8001/blogs/${id}`;
  const { data: blog, isPending, error } = useGet(url);
  const history = useHistory();
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8001/blogs/${id}`)
      .then(() => {
        console.log('Blog deleted');
        history.push('/');
      })
      .catch((e) => {
        console.log("Blog couldn't get deleted\n", e);
      });
  };
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
              handleDelete(blog.id);
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
