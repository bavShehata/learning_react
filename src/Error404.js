import { Link } from 'react-router-dom';
const Error404 = () => {
  return (
    <div className="error404">
      <h2>Error 404: Not found</h2>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};

export default Error404;
