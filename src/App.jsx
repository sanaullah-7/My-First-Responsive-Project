
import Login from './pages/Login'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Registration from './pages/Registration';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Share_Recipe from './pages/Share_Recipe';
import Contact from './pages/Contact';




function App() {
 

  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path='/registration' element={<Registration/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/recipe" element={<Recipes/>}/>
      <Route path="/share-recipe" element={<Share_Recipe/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </Router>


   
  
      
    </>
  )
}

export default App
