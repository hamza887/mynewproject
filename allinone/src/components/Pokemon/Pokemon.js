import {useEffect,  useState } from "react";
import axios from 'axios';
export default function Pokemon(){
    const[anyPokemon, setAnypokemon]=useState('');
    const[pokeResult,setPokeresult]=useState([]);
  
    
    const SearchPokemon=(e)=>{
        e.preventDefault()
       const mypokemon= e.target.value;
       setAnypokemon(mypokemon);
  }
  
  const formSearchPokemon=(e)=>{
    e.preventDefault()
    axios.get(`https://pokeapi.co/api/v2/pokemon/${anyPokemon}`)
    .then(hh =>{
        console.log(hh.data);
        setPokeresult(hh.data)

    })
  }



    return(
        <div className='container crypto'>
        <h2 className='first-heading'>Search For your FAV Pokemons</h2>
        <p className='para-heading'>Get All of Your Fav Pokemons at One Place</p>
        <div className='search-option'>
        <form onSubmit={formSearchPokemon}>
          <div>
            <input className='search-bar' type='text' onChange={SearchPokemon} placeholder='search Pokemon'/>
          </div>
          <button type='submit' className='btn btn-danger btn-option'>Search Pokemons</button>
        </form>
                {/* {pokeResult.map(hello=>{
                    return(
                        <h1>{hello.name}</h1>
                    )
                })} */}
            </div>

        </div>
    )
}