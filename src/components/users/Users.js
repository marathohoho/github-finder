import React from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

const Users = () => {
  const githubContext = React.useContext(GithubContext);

  const { loading, users } = githubContext;
  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map(user => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Users;
