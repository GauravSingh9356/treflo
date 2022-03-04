import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeProduct } from '../actions/cart';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => {
    // console.log(state.cart);
    return state.cart.items;
  });
  // console.log(items);
  const [size, setSize] = useState(new Array(items.length).fill(0));

  const [total, setTotal] = useState();
  const [productPrices, setProductPrices] = useState(
    new Array(items.length).fill(0)
  );

  const handleTotal = () => {
    console.log(productPrices);
    let grandTotal = 0;
    productPrices.forEach((price, index) => {
      grandTotal += price;
    });
    console.log(grandTotal);
    setTotal(grandTotal);
  };

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };
  return (
    <div className='cart-box'>
      <h1>Shopping Cart</h1>
      {items.length == 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '40px',
            background: 'orange',
            marginTop: '20px',
          }}
        >
          <h4>Empty Cart! Please Add Something</h4>
          <Link to={'/'}>
            <button className='myBtn' style={{ background: 'black' }}>
              Return To HomePage
            </button>
          </Link>
        </div>
      ) : (
        <div className='shopping-cart'>
          <div className='column-labels'>
            <label className='product-image'>Image</label>
            <label className='product-details'>Product</label>
            <label className='product-price'>Price</label>
            <label className='product-quantity'>Quantity</label>
            <label className='product-removal'>Remove</label>
            <label className='product-line-price'>Total</label>
          </div>

          {items.map((item, index) => {
            return (
              <div className='product' key={item.product.id}>
                <div className='product-image'>
                  <img src={item.product.img_url} />
                </div>
                <div className='product-details'>
                  <div className='product-title'>{item.product.name}</div>
                  <p className='product-description'>
                    {item.product.description}
                  </p>
                </div>
                <div className='product-price'>{item.finalPrice}</div>
                <div className='product-quantity'>
                  <input
                    type='number'
                    min='0'
                    value={size[index]}
                    onChange={(e) => {
                      let sizes = [...size];
                      sizes[index] = e.target.value;
                      let prices = [...productPrices];
                      prices[index] = item.finalPrice * e.target.value;
                      setProductPrices(prices);

                      setSize(sizes);
                    }}
                  />
                </div>
                <div className='product-removal'>
                  <button
                    className='remove-product'
                    onClick={() => handleRemove(item.product.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className='product-line-price'>
                  {item.finalPrice * size[index]}
                </div>
              </div>
            );
          })}

          <div className='totals'>
            <div className='totals-item totals-item-total'>
              <label>Grand Total</label>
              <div
                className='totals-value'
                id='cart-total'
                style={{ fontWeight: '800', fontSize: '24px' }}
              >
                {total}
              </div>
            </div>
          </div>

          <button className='checkout' onClick={handleTotal}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
