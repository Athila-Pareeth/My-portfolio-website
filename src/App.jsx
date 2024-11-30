
import './App.css'
import Header from './Components/Header/Header'
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <>
      <Header/>

      <Routes>
      {/* http://localhost:5173/? */}
        <Route path='/Home' element={<Home myImage="src\assets\athila pareeth.jpg"/>}/>
        {/* http://localhost:5173/projects */}
     <Route path='/projects' element={ <Projects/>}/>
     {/* http://localhost:5173/contact */}
     <Route path='/contact' element={<Contact/>}/>
      </Routes>

      <Footer/>
      

      
    </>
  )
}

export default App
