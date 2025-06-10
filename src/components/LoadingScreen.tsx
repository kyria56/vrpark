import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="loading-screen-bg fixed inset-0 flex flex-col items-center justify-center text-white z-[9999]">
      <h1 className="loading-text-flash text-6xl md:text-8xl font-extrabold uppercase tracking-widest">
        Loading...
      </h1>
      {/* Add more elements here for particles, etc. later if needed */}
    </div>
  );
};

export default LoadingScreen; 