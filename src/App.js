import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Register from './Pages/Register';
import { useEffect, useState } from 'react';
import AddItem from './Pages/AddItem';
import EditItem from './Pages/EditItem';
import MyBuckets from './Pages/MyBuckets';
import SingleItem from './Pages/SingleItem';
import Navigation from './Components/Navigation';
import api from './api/Url.js'
import {useNavigate} from 'react-router-dom';

function App() {
  const [active, setActive] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [futureDate, setFutureDate] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [posts, setPosts] = useState([]);
  const [editTitle, setEditTitle] = useState("");
  const [editDetails, setEditDetails] = useState("");
  const [editFutureDate, setEditFutureDate] = useState("");
  
  const navigate = useNavigate();
  
  let info = localStorage.getItem("user-info");
    info = JSON.parse(info);
    
  
  useEffect(() => {
    const getProfile = async () => {
      const config = {
        headers: {
            Authorization: info.token
        }
    }
      try {
        const response = await api.get('/moment', config);
        setPosts(response.data.data)
        console.log(response.data.data)
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range 
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
      
    }

    
    getProfile();
  }, [info.token, ])



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

      const RegisterSubmit = async (e) => {
        e.preventDefault();
        const details = {fullname, email, password}
        try {
          const response = await api.post('/users/signup', details);
          console.log(response.request);
          setFullname('');
          setEmail('');
          setPassword('');
          localStorage.setItem("user-info", JSON.stringify(response.data));
          navigate('/login');
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
     
      }
        
      const LoginSubmit = async (e) => {
        e.preventDefault();
        const details = { email, password}
        try {
          const response = await api.post('/users/login', details);
          console.log(response.request);
          setEmail('');
          setPassword('');
          localStorage.setItem("user-info", JSON.stringify(response.data));
          navigate('/');
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      
  }

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const config = {
      headers: {
          Authorization: info.token
      }
  }
    const detail = {title, details, futureDate}
    try {
      const response = await api.post('/moment', detail, config);
      
      console.log(response.request);
      
      setFutureDate('');
      setTitle('');
      setDetails('');
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
 
  }

  const handleDelete = async (id) => {
    const config = {
      headers: {
          Authorization: info.token
      }
  }
    try {
      await api.delete(`/moment/${id}`, config);
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }


  const handleEdit = async (id) => {
   
    const updatedMoment = {editTitle, editDetails, editFutureDate };
    const config = {
      headers: {
          Authorization: info.token
      }
  }
    try {
      const response = await api.patch(`/moment/${id}`, updatedMoment, config);
      console.log(response.request);
      setEditTitle('');
      setEditDetails('');
      setEditFutureDate('');
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }


  return (
    <div className="App font-Poppins">
      
        <Navigation links={links} onClick={onClick} active={active}/>
        <Routes>
          <Route path='/' element={<MyBuckets secondLinks={secondLinks} posts={posts}/>}/>
          <Route path='/login' element={<Login firstLinks={firstLinks}  email={email} setEmail={setEmail} password={password} 
          setPassword={setPassword} LoginSubmit={LoginSubmit}/>}/>
          <Route path='/register' element={<Register firstLinks={firstLinks} fullname={fullname} 
          setFullname={setFullname} email={email} setEmail={setEmail} password={password} 
          setPassword={setPassword} RegisterSubmit={RegisterSubmit}/>}/>
          <Route path='/addItem' element={<AddItem secondLinks={secondLinks} futureDate={futureDate} 
          setFutureDate={setFutureDate} title={title} setTitle={setTitle} details={details} 
          setDetails={setDetails} handleSubmit={handleSubmit}/>}/>
          <Route path='/updateItem/:id' element={<EditItem secondLinks={secondLinks} editFutureDate={editFutureDate} 
          setEditFutureDate={setEditFutureDate} editTitle={editTitle} setEditTitle={setEditTitle} editDetails={editDetails} 
          setEditDetails={setEditDetails} handleEdit={handleEdit} posts={posts} />}/>
          <Route path='/singleItem/:id' element={<SingleItem secondLinks={secondLinks} posts={posts} handleDelete={handleDelete} />}/>
        </Routes>
        <Footer />
      
    </div>
  );
}

export default App;
