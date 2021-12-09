import './App.css';
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login';
import Footer from './Components/Footer';
import Register from './Pages/Register';
import { useState } from 'react';
import AddItem from './Pages/AddItem';
import EditItem from './Pages/EditItem';
import MyBuckets from './Pages/MyBuckets';
import SingleItem from './Pages/SingleItem';
import Navigation from './Components/Navigation';
import api from './api/Url.js'
import {useNavigate} from 'react-router-dom';
import ForgetPassword from './Pages/ForgetPassword';

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
  const [errorFullname, setErrorFullname] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [errorRegister, setErrorRegister] = useState("");
  const [errorForget, setErrorForget] = useState("");
  const [errorSubmit, setErrorSubmit] = useState("");
  const [user, setUser] = useState([]);
  
  
  const navigate = useNavigate();
  
  let info = localStorage.getItem("user-info");
    info = JSON.parse(info);


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
        checkInputs();
        const details = {fullname, email, password}
        try {
          const response = await api.post('/users/signup', details);
          console.log(response.request);
          setFullname('');
          setEmail('');
          setPassword('');
          localStorage.setItem("user-info", JSON.stringify(response.data));
          setErrorRegister("")
          navigate('/');
          alert('You have succesfully Register')
        } catch (err) {
          console.log(`Error: ${err.message}`);
          setErrorRegister('Registration failed, Please try again');
          
        }
     
      }
        
      const LoginSubmit = async (e) => {
        e.preventDefault();
        checkInputs();
        const details = { email, password}
        try {
          const response = await api.post('/users/login', details);
          console.log(response.request);
          setEmail('');
          setPassword('');
          localStorage.setItem("user-info", JSON.stringify(response.data));
          setErrorLogin("")
          navigate('/buckets');
          alert('Welcome!!! You have succesfully Login')
        } catch (err) {
          console.log(`Error: ${err.message}`);
            setErrorLogin('Login failed, Please try again');
        }
      
  }
      const ForgetPasswordSubmit = async (e) => {
        e.preventDefault();
        checkInputs();
        const details = { email }
        try {
          const response = await api.post('/users/forgotPassword', details);
          console.log(response.request);
          setEmail('');
          setErrorForget("")
          alert('Token have been sent to your email!')  
          navigate('/');
        } catch (err) {
          console.log(`Error: ${err.message}`);
            setErrorForget('failed, Please try again');
        }
      
  }

  function checkInputs() {

    
  //   function isEmail(email) {
  //     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  // }

    


    if (fullname === '') {
      
        setErrorFullname( 'Fullname cannot be empty');
    }
    
    else {
      setErrorFullname("");
    }
    
    if (email === '') {
      
        setErrorEmail( 'Email cannot be empty');
    }
    
    else {
      setErrorEmail("");
    }
    
    
    if (password === '') {
      
        setErrorPassword( 'Password cannot be empty');
    }
    
    else {
      setErrorPassword("");
    }
    

}




  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const config = {
      headers: {
          Authorization: info.token
      }
  }
    const detail = {title: title, details: details, futureDate: futureDate}
    try {
      const response = await api.post('/moment', detail, config);
    
      console.log(response.request);
      
     
      setFutureDate('');
      setTitle('');
      setDetails('');
      setErrorSubmit('');
      navigate('/buckets');
    } catch (err) {
      console.log(`Error: ${err.message}`);
      setErrorSubmit('failed Please try again. Make sure the Date is a future Date');
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
      navigate('/buckets');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }


  const handleEdit = async (id) => {
   
    const updatedMoment = {title: editTitle, details: editDetails, futureDate: editFutureDate };
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
      setErrorSubmit('')
      navigate('/buckets');
    } catch (err) {
      console.log(`Error: ${err.message}`);
      setErrorSubmit('failed Please try again. Make sure the Date is a future Date');
    }
  }
  // const Datehandle =  (e) => {
   
  //   setDateWarn(!dateWarn);
    
     
  // }


  return (
    <div className="App font-Poppins">
      
        <Navigation links={links} onClick={onClick} active={active}/>
        <Routes>
          <Route path='/buckets' element={<MyBuckets secondLinks={secondLinks} posts={posts} setPosts={setPosts} user={user} setUser={setUser} />}/>
          <Route path='/' element={<Login firstLinks={firstLinks}  email={email} setEmail={setEmail} password={password} 
          setPassword={setPassword} LoginSubmit={LoginSubmit} errorEmail={errorEmail} errorPassword={errorPassword} errorLogin={errorLogin}  />}/>
          <Route path='/register' element={<Register firstLinks={firstLinks} fullname={fullname} 
          setFullname={setFullname} email={email} setEmail={setEmail} password={password} 
          setPassword={setPassword} RegisterSubmit={RegisterSubmit} errorFullname={errorFullname} errorEmail={errorEmail} errorPassword={errorPassword} errorRegister={errorRegister} />}/>
          <Route path='/addItem' element={<AddItem secondLinks={secondLinks} futureDate={futureDate} 
          setFutureDate={setFutureDate} title={title} setTitle={setTitle} details={details} 
          setDetails={setDetails} handleSubmit={handleSubmit} errorSubmit={errorSubmit}  />}/>
          <Route path='/updateItem/:id' element={<EditItem secondLinks={secondLinks} editFutureDate={editFutureDate} 
          setEditFutureDate={setEditFutureDate} editTitle={editTitle} setEditTitle={setEditTitle} editDetails={editDetails} 
          setEditDetails={setEditDetails} handleEdit={handleEdit} posts={posts} errorSubmit={errorSubmit} />}/>
          <Route path='/singleItem/:id' element={<SingleItem secondLinks={secondLinks} posts={posts} handleDelete={handleDelete} />}/>
          <Route path='/login/forgetpassword' element={<ForgetPassword ForgetPasswordSubmit={ForgetPasswordSubmit} errorForget={errorForget} email={email} setEmail={setEmail} errorEmail={errorEmail} />}/>
        </Routes>
        <Footer />
      
    </div>
  );
}

export default App;
