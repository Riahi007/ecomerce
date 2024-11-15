import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './App';


function AddProduct() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');


  const dispatch = useDispatch();
  

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const newProduct = {
      title,
      category,
      price,
      image
    };

    dispatch(addProduct(newProduct));

    setTitle('');
    setCategory('');
    setPrice('');
    setImage('');
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className='Add'>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
        
          <input type="text"value={category}onChange={(e) => setCategory(e.target.value)} placeholder='Category' />
          <input type="text"value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price'/>
          <input type="text"value={image}onChange={(e) => setImage(e.target.value)} placeholder='Image URL'/>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
