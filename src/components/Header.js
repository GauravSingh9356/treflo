import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className='site-header'>
        <div className='site-identity'>
          <h1>
            <a onClick={() => navigate('/')}>My Pizza's</a>
          </h1>
        </div>
        <nav className='site-navigation'>
          <ul className='nav'>
            <li>
              <a href='https://gsportfolio.netlify.app'>About</a>
            </li>

            <li className='cart'>
              <a onClick={() => navigate('/cart')}>Go To Cart</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
