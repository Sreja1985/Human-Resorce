import React from 'react'
import './Searchbar.css'

function Searchbar(search) {
  return (
    <section className='searchbar'>
        <input 
            type="text" 
            name="searchbar" 
            className="form-control" 
            placeholder='Name or Department' 
            required
            onChange={search.onChange}
          />   
      
    </section>
  )
}

export default Searchbar
