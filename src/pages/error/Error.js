import Button from '@components/button/Button';
import { useNavigate } from 'react-router-dom';
// added this after build fail //
import React from 'react';

import '@pages/error/Error.scss';

const Error = () => {
  const navigate = useNavigate();

// suggested use //
// function Error() {
//   return (
//     <div>
//       <h1>Error</h1>
//       <p>Something went wrong.</p>
//     </div>
//   );
// }


  return (
    <div className="error-container">
      <div className="oops">Oops!</div>
      <p className="not-found">Error 404: Page Not Found</p>
      <Button label="Back Home" className="back-button button" handleClick={() => navigate(-1)} />
    </div>
  );
};
export default Error;
