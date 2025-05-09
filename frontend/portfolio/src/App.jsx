import './index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, Suspense, lazy } from 'react';

// Lazy-loaded components
const Home = lazy(() => import('./pages/Home'));
const UnderConstruction = lazy(() => import('./pages/UnderConstruction'));
const LoadingScreen = lazy(() => import('./components/LoadingScreen'));


const App = () =>{
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Suspense fallback={<div>Loading screen...</div>}>
        <LoadingScreen onFinish={() => setLoading(false)} />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/underconstruction' element={<UnderConstruction />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
