import React from 'react';
import { useSelector } from 'react-redux';
import Box from './Box';

function Home() {
  const products = useSelector(state => state.products);  

  return (
    <div className="product-list  justify-content-center align-items-center gap-4 d-flex flex-wrap m-4">
      {products.map(product => (
        <Box key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
