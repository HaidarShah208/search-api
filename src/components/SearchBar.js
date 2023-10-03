import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa'
import './SearchBar.css'

const SearchBar = ({setResults}) => {

    const [input,setINput]=useState("")

    const fetchdata=(value)=>{
        fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then(json=>{
        const results=json.filter((user)=>{
         return (value && user && user.name && user.name.toLowerCase().includes(value)
         );
         })
         console.log(results);
        setResults(results)
    })
    }

    const handleSubmit=(value)=>{
        setINput(value);
        fetchdata(value)
    }

    return (
        <div className='input-wrapper'>
          <FaSearch id='search-icons'/>
          <input type="text" value={input} onChange={(e)=>{handleSubmit(e.target.value)}} placeholder='type to search...' />
        </div>
    );
}

export default SearchBar;
