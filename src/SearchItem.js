import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    
    <form className='searchForm'  onSubmit={(e)=>{e.preventDefault()}}>
    <label htmlFor='search'>Search</label>
    <input
    role='Searchbox'
    placeholder='Search Items'
    id='search'
    type='text'
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    />
    
    </form>


  )
}

export default SearchItem