import { useEffect, useState } from 'react';
import api from '../api/api';

const TipoPage = () => {
  const [tipos, setTipos] = useState([]);

  useEffect(() => {
    api.get('/tipos') 
      .then((res) => setTipos(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Tipos</h1>
      <ul>
        {tipos.map((tipo) => (
          <li key={tipo._id}>{tipo.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default TipoPage;
