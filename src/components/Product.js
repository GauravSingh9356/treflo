import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { sendToCart } from '../actions/cart';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  const [checkedState, setCheckedState] = useState(
    new Array(product.toppings[0].items.length).fill(false)
  );

  const noOfItem = useRef();

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + 70;
        }
        return sum;
      },
      Number(product.price)
    );

    setTotal(totalPrice);
  };

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleTotalPrice = () => {
    let finalPrice = 0;
    const items = noOfItem.current.value;
    if (size == 'Regular') {
      finalPrice = total;
    } else if (size == 'Medium') {
      finalPrice = total + 100;
    } else if (size == 'Large') {
      finalPrice = total + 500;
    }

    dispatch(
      sendToCart({
        product,
        finalPrice,
        size: items,
      })
    );

    setOpen(false);

    toast.success('🚀 Added To Cart!', {
      position: 'bottom-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // navigate('/cart');
  };

  return (
    <div className='col-md-3'>
      <div className='wsk-cp-product'>
        <div className='wsk-cp-img'>
          {open && (
            <Modal open={open} onClose={onCloseModal} center>
              <div style={{ textAlign: 'center' }}>
                <h2>Add to Cart</h2>
                <div className='outer-box-modal'>
                  <h5>{product.size[0].title}</h5>
                  <div className='radio-box'>
                    {product.size[0].items.map((r) => {
                      return (
                        <label className='radio'>
                          <p>{r.size}</p>
                          <input
                            type='radio'
                            checked={size == r.size}
                            value={r.size}
                            name='radio'
                            onChange={(e) => setSize(e.target.value)}
                          />
                          <span class='checkmark'></span>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <div className='outer-box-modal'>
                  <h5>{product.toppings[0].title}</h5>
                  <div className='check-box'>
                    {product.toppings[0].items.map((r, index) => {
                      return (
                        <label className='radio'>
                          <p>{r.name}</p>
                          <input
                            type='checkbox'
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                          />
                          <span class='checkmark'></span>
                        </label>
                      );
                    })}
                  </div>
                </div>
                <input type='number' ref={noOfItem} min='1' /> <br />
                <br />
                <button className='myBtn' onClick={handleTotalPrice}>
                  Add to Cart
                </button>
              </div>
            </Modal>
          )}
          <img src={product.img_url} className='img-responsive' />
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              fontWeight: '900',
              marginTop: '4px',
            }}
          >
            <span>{product.rating} ⭐</span>
          </div>
        </div>
        <div className='wsk-cp-text'>
          <div className='category'>
            <span>{product.isVeg ? 'Veg' : 'Non Veg'}</span>
          </div>
          <div className='title-product'>
            <h3>{product.name}</h3>
          </div>
          <div className='description-prod'>
            <p>{product.description}</p>
          </div>
          <div className='card-footer'>
            <div className='wcf-left'>
              <span className='price'>${product.price}</span>
            </div>
            <div className='wcf-right'>
              <a
                className='buy-btn'
                onClick={() => setOpen(!open)}
                style={{ fontWeight: '900' }}
              >
                <i className='zmdi zmdi-shopping-basket'>+ -</i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </div>
  );
};

export default Product;
