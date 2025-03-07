import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Dashboard } from './Pages/Dashboard'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { Perfil } from './Pages/Perfil'
import { Layout } from './Pages/Layout'

function App() {

  return (
    <div>
      
      <h1>Rutas</h1>
        <Layout/>
          <Routes>
            <Route path="Dashboard" element={ <Dashboard/> }></Route>
            <Route path="Home" element={ <Home/> }></Route>
            <Route path="Login" element={ <Login/> }></Route>
            <Route path="Perfil" element={ <Perfil/> }></Route>
            <Route path="*" element={ <Home/> }></Route>
          </Routes>
        <footer>Ana Aramoni</footer>
    </div>
  );
}

export default App
