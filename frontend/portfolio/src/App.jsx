import './index.css'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderConstruction from './pages/UnderConstruction';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/underconstruction' element={<UnderConstruction />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
