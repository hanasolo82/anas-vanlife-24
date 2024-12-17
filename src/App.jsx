import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';



export default function App() {
  
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>.
      </Routes>
    </BrowserRouter>
  )
}


