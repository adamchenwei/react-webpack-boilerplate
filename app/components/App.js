import React from 'react';
import img from '../assets/images/react_logo_512x512.png';
import ChildComp from './childFolder/ChildComp';

const App = () => {
  return (
    <div>
      <h2 id="heading">Hello ReactJS</h2>
      <ChildComp />
      <img
        className="image"
        style={{ margin: '0.5em' }}
        height="40"
        width="40"
        src={img}
        alt="React Logo"
      />
    </div>
  );
};

export default App;
