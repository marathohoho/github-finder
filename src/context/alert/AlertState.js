import React, { useReducer } from 'react';
import alertReducer from './alertReducer';
import alertContext from './alertContext';

import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = {
    alert: null
  };
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //set alert
  const setAlert_ = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { message, type } });
    // setAlert({ message, type });
    const timeout = 5000;
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
  };

  return (
    <alertContext.Provider
      value={{
        alert: state.alert,
        setAlert_
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;
