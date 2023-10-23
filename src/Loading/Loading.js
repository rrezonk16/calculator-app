import React from 'react';
import './Loading.css'; // Import the CSS file for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div>Loading</div>
    </div>
  );
};

export default Loading;
