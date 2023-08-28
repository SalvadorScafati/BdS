import React from 'react';
import '../styles/loadingLoop.css';

const LoadingLoop = () => {
  return (
    <div className="loading-loop">
      <div className="loading-spinner"></div>
      <p>Cargando...</p>
    </div>
  );
};

export default LoadingLoop;
