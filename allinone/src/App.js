import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Books from './components/Books/Books'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Books/>
    </div>
  );
}

export default App;
