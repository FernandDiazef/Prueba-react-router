import { Route, Routes } from 'react-router-dom';
import { Home } from '../home/home';
import { ProfileProduct } from '../ProfilePoduct/ProfileProduct';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product/:idProduct' element={<ProfileProduct />} />
      </Routes>
    </div>
  );
}

export default App;
