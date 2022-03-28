import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
// import './App.css'

function App() {
  const {authIsReady, user} = useAuthContext()

  return (
    <div className="App">
    {authIsReady && (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element= {(!user && <Navigate to='/login'/>) || (user && <Home/>)}/>
        <Route path="/Login" element={(user && <Navigate to='/'/>) || (!user && <Login/>)}/>
        <Route path="/Signup" element={(user && <Navigate to='/'/>) || (!user && <Signup/>)}/>
      </Routes>
    </BrowserRouter> 
    )}
  </div>
  );
}

export default App
