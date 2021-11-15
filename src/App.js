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
import Navigation from './Components/Navigation';

function App() {
  const [active, setActive] = useState(false)

    const onClick = () => {
        setActive(!active);
    };

    const [links, setLinks] = useState(true);
  
    const firstLinks = () => {
            setLinks(true)
    }
    const secondLinks = () => {
            setLinks(false)
    }

  return (
    <div className="App font-Poppins">
      <Router>
        <Navigation links={links} onClick={onClick} active={active}/>
        <Routes>
          <Route path='/' element={<MyBuckets secondLinks={secondLinks}/>}/>
          <Route path='/login' element={<Login firstLinks={firstLinks}/>}/>
          <Route path='/register' element={<Register firstLinks={firstLinks}/>}/>
          <Route path='/addItem' element={<AddItem secondLinks={secondLinks}/>}/>
          <Route path='/updateItem' element={<EditItem secondLinks={secondLinks}/>}/>
          <Route path='/singleItem' element={<SingleItem secondLinks={secondLinks}/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
