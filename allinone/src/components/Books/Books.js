import { useEffect, useState } from "react";
import axios from 'axios';
export default function Books(){
  

  axios.get(`https://www.googleapis.com/books/v1/volumes?q=java&key=AIzaSyAFH6VcFGFwnoVaO-ER32twGdgCa86v8Dw&maxResults=20`).then(hh=>{
    console.log(hh.data.items);
  })


    return(
        <h1>hello</h1>
    )
}