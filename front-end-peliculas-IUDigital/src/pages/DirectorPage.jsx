import { useEffect, useState } from 'react';
import api from '../api/api';

const DirectorPage = () => {
  const [directores, setDirectores] = useState([]);

  useEffect(() => {
    api.get('/directores') 
      .then((res) => setDirectores(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Directores</h1>
      <ul>
        {directores.map((director) => (
          <li key={director._id}>{director.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default DirectorPage;
