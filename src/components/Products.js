import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/products';
import Product from './Product';
import { getFilter } from '../actions/products';


const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const [filter, setFilter] = useState('Price');

  const handleFilter = () => {
    // console.log(filter);
    dispatch(getFilter(filter));
  };

  const pro = useSelector((state) => state.products);
  console.log(pro);

  //   if (true) return <h1>No Pixxa''s</h1>;

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '16px',
          marginTop: '10px',
        }}
      >
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>Price</option>
          <option>Rating</option>
        </select>
        <div className='btn-box' onClick={handleFilter}>
          <button className='btn'>Filter</button>
        </div>
      </div>

      <div className='shell'>
        <div className='container'>
          <div className='row'>
            {pro.products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
