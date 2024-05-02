import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Explorer from './Explorer';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <h1 className="Nav">GitHub Explorer</h1>
        
      </div>
      <Routes>
          <Route path="/" element={<Explorer />} />
        </Routes>
        <footer className="footer">
    <div className="copy">© 2023 CodePro</div>
    <div className="bottom-links">
      <div className="links">
        <span>More Info</span>
        <a href={"/"}>Home</a>
        
      </div>
       
    </div>
  </footer>
    </BrowserRouter>

  );
}

export default App;
