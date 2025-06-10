import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <LoadingScreen /> : <HomePage />}
    </>
  );
}

export default App;
