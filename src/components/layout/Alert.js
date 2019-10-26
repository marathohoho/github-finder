import React from 'react';
import GithubContext from '../../context/github/githubContext';

const Alert = () => {
  const githubContext = React.useContext(GithubContext);
  const { alert } = githubContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.message}
      </div>
    )
  );
};

export default Alert;
