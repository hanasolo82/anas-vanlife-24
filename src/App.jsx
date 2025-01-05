import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Vans from './Pages/Vans';
import './server'


export default function App() {
  
  return (
    <BrowserRouter>
      <header>
          <Link className='navbar-logo' to='/'>#VANLIFE</Link> 
        <nav className='navar'>
          <Link className='link-about' to='/about'>About</Link>
          <Link to='/vans'>Vans</Link>
        </nav>
      </header>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/vans" element={<Vans/>} />
      </Routes>
      <footer className='footer'>Ⓒ 2022 #VANLIFE</footer>
    </BrowserRouter>
  )
}


