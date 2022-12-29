import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import TicTacToe from './pages/TicTacToe';
import About from './pages/About';
import Error from './pages/Error';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="TicTacToe" element={<TicTacToe/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
