import {  useState } from "react";
import axios from 'axios';
export default function Books(){
  const[booksearch, setBooksearch]=useState('');
  const[searchresult,setSearchresult]=useState([]);

  
  const SearchSubmit=(e)=>{
     const mybook= e.target.value;
     setBooksearch(mybook);
}

const formSearchSubmit=(e)=>{
  e.preventDefault()
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${booksearch}&key=AIzaSyAFH6VcFGFwnoVaO-ER32twGdgCa86v8Dw&maxResults=20`)
  .then(hh =>{
      console.log(hh.data.items);
      setSearchresult(hh.data.items)
  })
}


    return(
        <div className='container'>
          <h2>hello thios is a book search option</h2>
          <p>Search for any FAV book you like and download and read the PDF</p>
          <form onSubmit={formSearchSubmit}>
            <div>
              <input type='text' onChange={SearchSubmit} placeholder='search books'/>
            </div>
            <button type='submit' className='btn btn-danger'>Search books</button>
          </form>
          <div>

          </div>
        </div>
    )
}