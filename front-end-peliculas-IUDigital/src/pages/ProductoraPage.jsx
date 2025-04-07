import { useEffect, useState } from 'react';
import api from '../api/api';

const ProductoraPage = () => {
  const [productoras, setProductoras] = useState([]);

  useEffect(() => {
    api.get('/productoras') 
      .then((res) => setProductoras(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Productoras</h1>
      <ul>
        {productoras.map((productora) => (
          <li key={productora._id}>{productora.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductoraPage;
