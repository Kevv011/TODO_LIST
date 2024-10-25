import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';      //Importando Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //Importando Bootstrap
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Importando pages
import { Home_List } from './pages/Home_List'
import { List_View } from './pages/List_View'

//Importando components
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {

  return (
    <Router>
      <Navbar /> {/* Navbar */}
      <Routes>
        <Route path="/" element={<Home_List />} />
        <Route path="/list" element={<List_View />} />
      </Routes>

      <div className="footer-section">
        <Footer /> {/* Footer */}
      </div>

    </Router>
  )
}

export default App
