import Header from './components/Header';
import Products from './components/Products';
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Cart from './components/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
