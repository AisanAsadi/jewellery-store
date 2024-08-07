import { Container } from 'react-bootstrap';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Shop from './pages/shop';
import {CardProvider} from './context/Cardcontext'
import Success from './pages/Success';
import SignIn from './components/SignIn';
import Login from './components/LogIn';
import 'react-toastify/dist/ReactToastify.min.css'
import Ring from './components/Category/Ring';
import Neckless from './components/Category/Neckless';
import Bangle from './components/Category/Bangle'
import Footer from './components/Footer';

function App(){
  return (
    <div className="App">
      <CardProvider>

       <Container>
        <Navbar></Navbar>
         <Routes>
         
          <Route path='/'element={<Shop/>}/>
          <Route path='/success'element={<Success/>}/>
          <Route path='/signin'element={<SignIn/>}/>
          <Route path='/login'element={<Login/>}/>
          <Route path='/ring'element={<Ring/>}/>
          <Route path='/neckless'element={<Neckless/>}/>
          <Route path='/bangle'element={<Bangle/>}/>

       
         </Routes>
         <Footer></Footer>
         
       </Container>
       
 
      </CardProvider>

    </div>
  );
}

export default App;
