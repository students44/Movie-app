
import React from 'react'
import searchImage from '../assets/search.png'
import './Search.css'

const Search = ({searchTerm , setSearchTerm}) => {
  return (
    <div>
      <div className="search-container">
     <div>
        <img src={searchImage} alt="image not found" className='search-icon' />
        <input type="text" placeholder='Search Through of Movies'  style={{width:'770px',display: 'block',
    margin:'0 auto'}}
        value={searchTerm}
        onChange={(event)=> setSearchTerm(event.target.value)} className='search-input'/>
     </div>

      </div>

    </div>
  )
}

export default Search
