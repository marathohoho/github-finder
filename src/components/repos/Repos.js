import React from 'react';
import RepoItem from '../repos/RepoItem';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Repos = () => {
  const githubContext = React.useContext(GithubContext);

  return githubContext.repos.map(repo => (
    <RepoItem repo={repo} key={repo.id} />
  ));
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
