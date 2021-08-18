import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Crypto(){
    const [search, setcryptoSearch] = useState('');
    const [cryptos, setCryptos] = useState([]);
    


      const SearchSubmit=(e)=>{
        const mycrypto= e.target.value;
        setcryptoSearch(mycrypto);
   };
   const formSearchSubmit=(e)=>{
    e.preventDefault()
    axios.get( 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false')
    .then(hh =>{
        console.log(hh.data);
        setCryptos(hh.data)
    })
  }
  

    return (
        <div className='container crypto'>
          <h2 className='first-heading'>Search Your FAV Crypto</h2>
          <p className='para-heading'>Look for all of your Fav crypto currency at one Place</p>
          <div className='search-option'>
          <form onSubmit={formSearchSubmit}>
            <div>
              <input className='search-bar' type='text' onChange={SearchSubmit} placeholder='search books'/>
            </div>
            <button type='submit' className='btn btn-danger btn-option'>Your Cryptos</button>
          </form>
          
          </div>
        {cryptos.map(hello=>{
            return(
              <div className='flex-books'>
              <img src={hello.image} alt='pic not avialble'></img>
              <h3>{hello.name}</h3>
              <p className='des-book'>{hello.symbol}</p>
              <p className=''> MARKET RANK : {hello.market_cap_rank}</p>
              <p className=''> Price : {hello.current_price}$</p>
              </div>
            )
          })}
      </div>
      
    )
}