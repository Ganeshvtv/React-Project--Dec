
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'
const AddItems = ({newItem, setNewItem,handleSubmit}) => {

const newvalue =useRef();



  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItems'>Add items</label>
        <input
        autoFocus
        ref={newvalue}
        id='additems'
        placeholder='Add Items'
        type="text"
        onChange={(e)=>setNewItem(e.target.value)}
        value={newItem}
      required
        />
        <button type="submit" onClick={()=>newvalue.current.focus()}aria-label='Add Item'><FaPlus/></button>
    </form>
  )
}

export default AddItems