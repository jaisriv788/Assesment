import React from "react";
import SignIn from "./components/signIn";
import Admin from "./components/admin";
import "./App.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    
    <Routes>
         <Route path='/' element={<SignIn />} />
         <Route path='/admin/:id' element={<Admin />} />
    </Routes>
  );
}

export default App;
