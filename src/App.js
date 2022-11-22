import './App.css';
import Home from './Home';
import Video from './Video';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  
  return (
    <div className="App">
      <Router>
        <nav>
          <header>Kendon's YouTube</header>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/video/:id' element={<Video/>}
          />
          </Routes>
        </nav>
      </Router>
     
    </div>
  );
}

export default App;
