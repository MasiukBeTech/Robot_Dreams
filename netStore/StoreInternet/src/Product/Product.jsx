import React from 'react';

const Product = (props) => {
  const { product } = props;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default Product;