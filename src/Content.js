import React from "react";

import ItemList from "./ItemList";

export const Content = ({items,handleDelete,handlechange}) => {

 return (
    <>
      {items.length?
           <ItemList 
           key={items}
           items={items}
           handleDelete={handleDelete}
           handlechange={handlechange}/> :<p style={{marginTop:"2rem"}}>List is Empty</p>}
    </>
  );
};
