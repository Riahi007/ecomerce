import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from './App';

function Box({ product }) {

  const dispatch = useDispatch(); 

  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
  };

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} alt={product.title}  style={{ height: '300px' }}  />
        <Card.Body>
        <Card.Title 
            style={{ 
              whiteSpace: 'nowrap', 
              overflow: 'hidden',  
              textOverflow: 'ellipsis' 
            }}
          >
            {product.title}
          </Card.Title>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>{product.price} $</Card.Text>

          <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Box;
