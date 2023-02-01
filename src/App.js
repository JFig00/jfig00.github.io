import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Editor from './pages/Editor';
import Error from './pages/Error';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path='Editor' element={<Editor />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;