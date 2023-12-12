import React from 'react'


import ListItem from './ListItem';

const ItemList = ({items,handlechange,handleDelete}) => {
  return (
    <ul>
    {items.map((item) => (
     
    <ListItem
    item={item}
    key={item}
    handlechange={handlechange}
    handleDelete={handleDelete}
    />
    ))}
    </ul>
      )}

export default ItemList