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
        <div className='container book'>
          <h2 className='first-heading'>hello thios is a book search option</h2>
          <p className='para-heading'>Search for any FAV book you like and download and read the PDF</p>
          <div className='search-option'>
          <form onSubmit={formSearchSubmit}>
            <div>
              <input className='search-bar' type='text' onChange={SearchSubmit} placeholder='search books'/>
            </div>
            <button type='submit' className='btn btn-danger btn-option'>Search books</button>
          </form>
          <div>
          </div>
         
          {searchresult.map(mybooks=>{
            return(
              <div className='flex-books'>
              <img src={mybooks.volumeInfo.imageLinks.thumbnail} alt='pic not avialble'></img>
              <h3>{mybooks.volumeInfo.title}</h3>
              <p className='des-book'>{mybooks.volumeInfo.authors}</p>
              <p className=''>{mybooks.volumeInfo.categories}</p>
              <a target='_blank' href={mybooks.volumeInfo.previewLink} className=' btn btn-danger'>Look PDF</a>
              </div>
            )
          })}
          </div>
        </div>
    )
}