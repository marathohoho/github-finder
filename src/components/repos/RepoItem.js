import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  const { name, description, html_url } = repo;
  return (
    <Fragment>
      <div className="card all-center">
        <a href={html_url} alt="link come here">
          <h3>{name}</h3>
        </a>
        <p1>{description}</p1>
      </div>
    </Fragment>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;
