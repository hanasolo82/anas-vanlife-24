import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import './server'


export default function App() {
  
  return (
    <BrowserRouter>
      <nav className='navar'>
        <h1 className='navbar-logo'>#VANLIFE</h1>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>.
      </Routes>
      <footer className='footer'>Ⓒ 2022 #VANLIFE</footer>
    </BrowserRouter>
  )
}


