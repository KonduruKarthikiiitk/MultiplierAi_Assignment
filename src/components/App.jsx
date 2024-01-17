import React,{useState,useEffect} from "react";
import ToDoItem from "./List";
import InputArea from "./InputArea";
import axios from "axios";
function App() {

  const [items,setItem] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:4000/get")
    .then(result=>setItem(result.data))
    .catch(err => console.log(err))
  
  },[])
    function handleEdit(id){
    console.log(id)
    axios.put("http://localhost:4000/update/"+id)
    .then(result=>{window.location.reload()})
    .catch(err => console.log(err))
  

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea/>
          
      <div>
        <ul>
          {items.map((todoitem) =>
          <ToDoItem 
          index={todoitem._id}
          key={todoitem._id}
          text={todoitem.inputText} 
          onChecked={handleEdit}
          done={todoitem.done}
          /> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
