import './index.css';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderConstruction from './pages/UnderConstruction';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen onFinish={() => setLoading(false)} />;

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/underconstruction' element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;
