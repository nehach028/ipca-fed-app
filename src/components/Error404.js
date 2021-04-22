import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <p>Page not found</p>
      <p><Link to='/'>Go to Home page</Link></p>
    </div>
  );
};

export default Error404;