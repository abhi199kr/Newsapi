import logo from './logo.svg';
import './App.css';
import News from './Components/News';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter,HashRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

function App() {
 
  return (
   <>
    {/* <News/>
    <Login/>
    <Signup/> */}
    <HashRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
    </HashRouter>
   </>
  );
}

export default App;
