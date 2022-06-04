import './App.css';
import IsLogged from "./modules/Auth/IsLogged"
import IsNotLogged from "./modules/Auth/IsNotLogged"
import AuthChecker from "./modules/Auth/AuthChecker"
import Panel from "./components/Panel/Panel"
import Login from "./components/Login/Login"
import Room from "./components/Room/Room"
import { Routes, Route, Navigate } from "react-router-dom";



function App() {
  return (
    <>
      <AuthChecker />
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path='/' element={<IsLogged><Panel /></IsLogged>} />
        <Route path='/login' element={<IsNotLogged><Login /></IsNotLogged>} />
        <Route path='/room/' element={<IsLogged><Room /></IsLogged>} />
      </Routes>
      
    </>
  );
}

export default App; 
