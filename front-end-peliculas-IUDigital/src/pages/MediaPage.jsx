import { useEffect, useState } from 'react';
import api from '../api/api';

const MediaPage = () => {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    api.get('/media') 
      .then((res) => setMedias(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Películas y Series</h1>
      <ul>
        {medias.map((media) => (
          <li key={media._id}>
            {media.titulo} - {media.tipo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaPage;
