// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Signup from './Signup';
import Loginsec from './Loginsec';
import Signupsec from './Signupsec';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image,setImage] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setTimeout(() => {
          setName(user.displayName);
          setEmail(user.email);
          setImage(localStorage.getItem(user.email));
          console.log(user);
        }, 1000);

      }
    })
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Loginsec />} />
        <Route path="/signup" element={<Signupsec />} />
        <Route path='/signedin' element={
          <div className='app'>
            <Sidebar />
            <Feed name={name} email={email} image={image} />
            <Widget />
          </div>
        } />
      </Routes>

      {/* {logout ? <>
        <Routes>
          <Route path='/' element={<Loginsec setLogout={setLogout}/>} />
          <Route path='/signup' element={<Signupsec />} />
        </Routes>
      </> : <div className='app'>
        <Sidebar islogout={logout} setlogout={setLogout} />
        <Feed />
        <Widget /></div>} */}
    </>

  )
}

export default App;


// {
//   value1?
//   <div className='cmntbox'>
//     <div className='cmntboxchild'>
//       <button onClick={()=>{setValue1((p)=>!p); HandleClick()}}>Close</button>
//       <input type="text" ref={inputRef} />
//     </div>
//   </div>:null
// }