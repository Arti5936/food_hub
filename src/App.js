 
 import React from 'react';
 import Home from './screens/Home';
 import {Routes,Route} from "react-router-dom";
 import Login from './screens/Login';
 import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
 import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
 import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup.jsx';

 function App() {
   return (
  
     
   
   <Routes>
       <Route  path="/" element={<Home></Home>}></Route>
       <Route  path="/login" element={<Login></Login>}></Route>
       <Route path='/creatuser' element= {<Signup></Signup>}></Route>
   
 </Routes>

   )
 }
 
 export default App; 