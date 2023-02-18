import React from 'react'
import './Search.css'
import { useState } from 'react'

const Search = ({searchInput, setSearchInput}) => {

  // const [searchItem, setSearchItem] = useState("")

  function handleSearch(event){
    setSearchInput(event.target.value)
    console.log(searchInput)
    console.log(event.target.value)
  }




  return (
    <div className='search-div'>
        <input className='search-bar' type = "text" placeholder='search' value={searchInput} onChange={handleSearch}/>
    </div>
  )
}

export default Search