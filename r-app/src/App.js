import React from "react";
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// }from "react-router-dom";

function App() {
  const[mode ,setDarkMode]=useState('light')// wether dark mode is enabled or not.

  const[alert , setAlert]=useState(null);
  const showAlert=(message , type)=>{
      setAlert({
        msg : message,
        type : type
      });

      setTimeout(()=>{
        setAlert(null);
      },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setDarkMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been activated","success");
      document.title='R-app - Dark Mode';
    }
    else if(mode==='dark'){
      setDarkMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been activated" , "success");
      document.title='R-app - Light Mode';
    }
  }
  return (
  <>  
 {/* <Router> */}

    
    {/* <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below" mode={mode}/>}/> 
    </Routes> */}
    
{/* </Router>   */}
   <NavBar title="R-app" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
     <TextForm showAlert={showAlert} heading="Enter the text below" mode={mode}/>
    </div>
</>
  );
}

export default App;