import logo from './logo.svg';
import './App.css';
import './home-style.css'
import { Navigate, Route, Routes } from 'react-router-dom';
import Counter from './Counter';
import Form from './Form';
import Input from './Input';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/input' element={<Input/>}/>
      <Route path='/counter' element={<Counter/>}/>
    </Routes>
    </>
  );
}

export default App;
