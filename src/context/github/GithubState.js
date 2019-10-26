import React, { useReducer } from 'react';
import axios from 'axios';
import githubContext from './githubContext';
import githubReducer from './githubReducer';

import {
  SEARCH_USERS,
  GET_USERS,
  SET_LOADING,
  GET_REPOS,
  CLEAR_USERS,
  GET_USER,
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

const clientID = process.env.REACT_APP_GITHUB_CLIENT_ID;
const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
    alert: null
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  // get users main page
  React.useEffect(() => {
    setLoading();
    async function fetchMyApi() {
      const res = await axios.get(`https://api.github.com/users?client_id=
              ${clientID}&client_secret=${clientSecret}`);
      dispatch({ type: GET_USERS, payload: res.data });
    }
    fetchMyApi();
  }, []);

  // search users
  const searchUsers = async anyText => {
    if (anyText.length > 0) {
      setLoading();
      const usersFound = await axios.get(
        `https://api.github.com/search/users?q=${anyText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      dispatch({ type: SEARCH_USERS, payload: usersFound.data.items });
    }
  };
  // get user
  const getUser = async username => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=
              ${clientID}&client_secret=${clientSecret}`);
    dispatch({ type: GET_USER, payload: res.data });
  };

  // get repos
  const getUserRepos = async username => {
    setLoading();
    const reposFound = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
              ${clientID}&client_secret=${clientSecret}`);

    dispatch({ type: GET_REPOS, payload: reposFound.data });
  };

  // clear users
  const clearUser = () => {
    dispatch({ type: CLEAR_USERS, payload: [] });
  };

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  //set alert
  const setAlert_ = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message, type } });
    // setAlert({ message, type });
    const timeout = 5000;
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
  };

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        repos: state.repos,
        alert: state.alert,
        searchUsers,
        getUser,
        clearUser,
        getUserRepos,
        setAlert_
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};
export default GithubState;
