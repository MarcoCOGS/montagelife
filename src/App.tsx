import './App.css';
import { Home } from './Home';
import { Contacto } from './Contacto';
import { About } from './About';
import { Route, Routes, HashRouter  } from 'react-router-dom';

function App() {
  return (
    <div className="w-screen bg-black">
      <HashRouter>
        <Routes>
          <Route path="/"   Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contacto } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
