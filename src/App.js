import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
