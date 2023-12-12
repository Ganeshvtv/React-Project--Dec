import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const ListItem = ({item,handleDelete,handlechange}) => {
  return (
   
       
    <li className="item" key={item.id}>
         <input type="checkbox" onChange={()=>handlechange(item.id)} checked={item.checked} />
         <label onDoubleClick={()=>handlechange(item.id)}  style={item.checked?{textDecoration:"line-through"}:null} >{item.item}</label>
         <FaTrashAlt onClick={()=>handleDelete(item.id)} role="button" tabIndex="0" />
       </li>
  )}
export default ListItem