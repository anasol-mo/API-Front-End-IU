import { useEffect, useState } from 'react';
import api from '../api/api';

const GeneroPage = () => {
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    api.get('/generos') 
      .then((res) => setGeneros(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Géneros</h1>
      <ul>
        {generos.map((genero) => (
          <li key={genero._id}>{genero.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default GeneroPage;
