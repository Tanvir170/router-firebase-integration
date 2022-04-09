import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Header/Home/Home';
import LogIn from './components/Login/LogIn';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
