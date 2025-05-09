import React, { useEffect } from 'react';
import jenishsoni from '../assets/jenishsoni.svg';

function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loading-container">
      <img src={jenishsoni} alt="loading" loading='lazy' className="loading-image" />
    </div>
  );
}

export default LoadingScreen;
