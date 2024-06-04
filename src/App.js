import './App.css';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast';
import Header from './components/Header';
import Products from './pages/products/Products';
import ProductDetails from './pages/products/ProductDetails';
import EditProfile from './pages/auth/EditProfile';
import ChangePassword from './pages/auth/ChangePassword';

function App() {
  return (
    <div className="">
      <Toaster />
     <Header />
     <div className='centered container'>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/edit-profile' element={<EditProfile/>}/>
      <Route path='/change-password' element={<ChangePassword/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path="/product/:id" element={<ProductDetails />} />
     </Routes>
     </div>
    </div>
  );
}

export default App;
