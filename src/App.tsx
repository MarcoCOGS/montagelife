import './App.css';
import { Home } from './Home';
import { Contacto } from './Contacto';
import { About } from './About';
import { Route, Routes, BrowserRouter  } from 'react-router-dom';

function App() {
  return (
    <div className="w-screen bg-black">
      <BrowserRouter>
        <Routes>
          <Route path="/"   Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contacto } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
