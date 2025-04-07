// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/genero">Géneros</Link></li>
        <li><Link to="/director">Directores</Link></li>
        <li><Link to="/productora">Productoras</Link></li>
        <li><Link to="/tipo">Tipos</Link></li>
        <li><Link to="/media">Media</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

