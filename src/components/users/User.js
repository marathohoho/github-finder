import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, user, loading, getUserRepos } = githubContext;

  // console.log(user);
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);
  const {
    name,
    avatar_url,
    location,
    hirable,
    bio,
    blog,
    html_url,
    login,
    company,
    followers,
    following,
    public_gists,
    public_repos
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <Fragment className="containerGrid">
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hirable: {''}
      {hirable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times text-danger" />
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=" goes here"
            className="round-img"
            style={{ width: '180px' }}
          />
          <h1>{name}</h1>
          <p1>Location: {location}</p1>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit GitHub Page
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Blog: </strong> <a href={'http://' + blog}>{blog}</a>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-light">Following: {following}</div>
        <div className="badge badge-success">Repos: {public_repos}</div>
        <div className="badge badge-dark">Gists: {public_gists}</div>
      </div>
      <div className="card text-center">
        <Repos />
      </div>
    </Fragment>
  );
};

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired
};

export default User;
