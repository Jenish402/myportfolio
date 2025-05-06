import React, { useEffect, useState } from 'react';
import js from '../assets/js.png';

function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loading-container">
      <img src={js} alt="loading" className="loading-image" />
    </div>
  );
}

export default LoadingScreen;
