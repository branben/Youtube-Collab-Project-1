import "./App.css";
import Home from "./Home";
import Videos from "./Videos";
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Extra from "./Extra";
import Dropdown from "./Dropdown";

function App() {
 
  return (
    <div className="App">
      <Router>
        <header><img src="https://www.pngfind.com/pngs/m/0-986_free-icons-png-youtube-logo-3d-transparent-png.png" style={{height:"60px"}} id="tube-icon"></img><h1>Kendon's YouTube</h1></header>
        <Nav />
        {/* <Extra /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos/:id" element={<Videos />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
