import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Books from './components/Books/Books'
import Pokemon from './components/Pokemon/Pokemon';
import Crypto from './components/Crypto/Crypto'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Books/>
     <Pokemon/>
     <Crypto/>
     
    </div>
  );
}

export default App;
