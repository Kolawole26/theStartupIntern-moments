import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Register from './Pages/Register';
import { useState } from 'react';
import AddItem from './Pages/AddItem';
import EditItem from './Pages/EditItem';
import MyBuckets from './Pages/MyBuckets';
import SingleItem from './Pages/SingleItem';

function App() {
  const [active, setActive] = useState(false)

    const onClick = () => {
        setActive(!active);
    };

  return (
    <div className="App font-Poppins">
      <Router>
        <Routes>
          <Route path='/' element={<MyBuckets onClick={onClick} active={active}/>}/>
          <Route path='/login' element={<Login onClick={onClick} active={active}/>}/>
          <Route path='/register' element={<Register onClick={onClick} active={active}/>}/>
          <Route path='/addItem' element={<AddItem onClick={onClick} active={active}/>}/>
          <Route path='/updateItem' element={<EditItem onClick={onClick} active={active}/>}/>
          <Route path='/singleItem' element={<SingleItem onClick={onClick} active={active}/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
