import React, { Fragment } from 'react';
import SpinnerGif from './Spinner.gif';
const Spinner = () => (
  <Fragment>
    <img
      src={SpinnerGif}
      alt="Loading..."
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
