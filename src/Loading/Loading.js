import React from 'react';
import './Loading.css'; // Import the CSS file for styling
import loadingLogo from "./Loader.png"
const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"><img src={loadingLogo} alt='loader'></img></div>
      <div>Loading</div>
    </div>
  );
};

export default Loading;
