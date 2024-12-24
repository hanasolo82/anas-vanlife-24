import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Vans from './Pages/Vans';
import './server'


export default function App() {
  
  return (
    <BrowserRouter>
      <nav className='navar'>
        <h1 className='navbar-logo'>#VANLIFE</h1>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/vans'>Vans</Link>
      </nav>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/vans" element={<Vans/>} />
      </Routes>
      <footer className='footer'>Ⓒ 2022 #VANLIFE</footer>
    </BrowserRouter>
  )
}


