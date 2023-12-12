import './App.css';
import { Content } from './Content';
import { Footer } from './Footer';
import Header from './Header';
import AddItems from './AddItems'
import { useEffect, useState } from 'react';
import SearchItem from './SearchItem';
import ApiRequest from './ApiRequest';

function App() {

  const API_URL = "http://localhost:3500/items"
  const [items, setItems] = useState([]);

  const[newItem, setNewItem]=useState('')

  const [search,setSearch]= useState('')

  const [fetchError,setFetcherror]=useState(null);

  const[isLoading,setIsLoading]= useState(true);

  const handlechange= async(id)=>{
    const arritems = items.map((item)=>
      item.id===id?{...item,checked:!item.checked}:item
    )
  setItems(arritems); 
//patch-Update
  const myItem = arritems.filter(item=>item.id===id);

  const updateOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ checked: myItem[0].checked })
  };
  const reqUrl = `${API_URL}/${id}`;
  const result = await ApiRequest(reqUrl, updateOptions);
  if (result) setFetcherror(result);
}

const addItem =async (item)=>{
 const id = items.length ? items[items.length -1].id+1 : items;
  const addNewItem = {id, checked:false,item};
  const listItems = [...items, addNewItem]
  setItems(listItems);
  //POST-UPDATE
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(addNewItem)
  }
  const result = await ApiRequest(API_URL, postOptions);
  if (result) setFetcherror(result);
}

useEffect(()=>{
const fetchurl = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw  Error('Network response was not ok');
      }
      console.log(response);
      const listitems = await response.json();
      setItems(listitems);
      setFetcherror(null);
    
    }catch(Error){
  setFetcherror(Error)
}finally{
  setIsLoading(false)
}
}
 setTimeout(()=>{
  (async () => {await fetchurl();})()
},2000)

},[]);


const handleDelete = async (id)=>{
  const arritems = items.filter((item)=>
 item.id!==id
    )
  setItems(arritems);  
  const deleteOptions = { method: 'DELETE' };
  const reqUrl = `${API_URL}/${id}`;
  const result = await ApiRequest(reqUrl, deleteOptions);
  if (result) setFetcherror(result)
}

 const handleSubmit =(e)=>{
  e.preventDefault()
  if(!newItem) return
  console.log("SUBMITTED");
  addItem(newItem);
  setNewItem("")
 }
  return (
<div className='App'>
  
 
<Header title={"Todo List"} />
<AddItems
  newItem={newItem}
  setNewItem={setNewItem}
  handleSubmit={handleSubmit}/>
  <SearchItem
  search={search}
  setSearch={setSearch}/>
 
 <main > 
 {fetchError &&<p>{`error:${fetchError}`}</p>}
 {isLoading&&<p>Loading...</p>}
 { !fetchError && !isLoading && <Content
items = {items.filter(item=>(item.item).toLowerCase().includes(search.toLowerCase()))}
handlechange={handlechange}
handleDelete={handleDelete}
/>}
</main>
  <Footer
  length={items.length}/>
</div>
  );
}

export default App;
