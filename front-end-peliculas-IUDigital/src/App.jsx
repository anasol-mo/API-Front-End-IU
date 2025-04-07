import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import GeneroPage from './pages/GeneroPage';
import DirectorPage from './pages/DirectorPage';
import ProductoraPage from './pages/ProductoraPage';
import TipoPage from './pages/TipoPage';
import MediaPage from './pages/MediaPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genero" element={<GeneroPage />} />
        <Route path="/director" element={<DirectorPage />} />
        <Route path="/productora" element={<ProductoraPage />} />
        <Route path="/tipo" element={<TipoPage />} />
        <Route path="/media" element={<MediaPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


