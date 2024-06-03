import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Toaster} from 'react-hot-toast';
import Header from './components/Header';

function App() {
  return (
    <div className="">
      <Toaster />
     <BrowserRouter>
     <Header />
     <div className='centered container'>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
