import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
  const githubContext = useContext(GithubContext);

  const { clearUser, users, setAlert_ } = githubContext;

  // substitution for state using hooks
  const [text, setText] = useState('');

  const handleChange = event => setText(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    if (text.length === 0) {
      setAlert_('Please enter into the search', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search of a user"
          name="text"
          value={text}
          onChange={handleChange}
        />
        <input
          type="Submit"
          defaultValue="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {users.length > 0 && (
        <button
          className="btn btn-light btn-block btn-primary"
          onClick={clearUser}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
