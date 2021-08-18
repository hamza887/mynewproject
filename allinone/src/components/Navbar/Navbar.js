import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-scroll';
export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
            <div className='container'>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" href="#">ALL IN ONE</Link>
      
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <Link smooth={true} offset={-110} to='searchbook' className="nav-link nlink" href="#">SearchBook </Link>
            </li>
            <li className="nav-item ">
              <Link smooth={true} offset={-110} to='pokemons' className="nav-link nlink" href="#">Pokemons</Link>
            </li>
            <li className="nav-item ">
              <Link smooth={true} offset={-110} to='cryptos' className="nav-link nlink" href="#">Cryptos</Link>
            </li>
            <li className="nav-item ">
              <Link smooth={true} to='' className="nav-link nlink" href="#">Working</Link>
            </li>
          </ul>
        </div>
            </div>
      </nav>
    )
}