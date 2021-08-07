import './App.css';
import Header from './Header.js';
import React,{useState} from 'react';
import Axios from 'axios';

function App() {
  const [user,setUser]=useState([]);
  const [loading,setLoading]=useState(false);

  const getUser=()=>{
    setLoading(true);
    Axios.get('https://reqres.in/api/users?page=1')
   .then(res=>{
    setUser(res.data.data); 
    setLoading(false);
    }
   ).catch(err=>{
     console.log(err.message);
   })
  }

  return (
    <div className="App">
      <Header click={getUser}/>
      <div className="container">
      {loading&&(<div class="loader"></div>)}
      {user?(user.map(u=>
      <div className="card">
      <img src={u.avatar} style={{width:"10.5rem",height:"auto",borderRadius:"1rem"}}/>
      <p>{u.first_name}</p>
      <p>{u.last_name}</p>
      <p>{u.email}</p>
      </div>)):(<div class="loader"></div>)} 
      
      </div>
  </div>);
}

export default App;
