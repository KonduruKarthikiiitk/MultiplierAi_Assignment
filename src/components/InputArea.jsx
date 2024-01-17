import React,{ useState } from "react";
import axios from "axios"
function InputArea(props){

  const [inputText,setinputText] =useState("")

    function handleChange(e){
        const newValue= e.target.value
        setinputText(newValue)
      }
    function handleAdd(e){
      e.preventDefault()
       axios.post("http://localhost:4000/db",{inputText})
       .then(result => {window.location.reload()})
       .catch(err => console.log(err))
       setinputText("")
    } 
    return(
        <div className="form">
        <input value={inputText} onChange={handleChange} type="text" />
        <button onClick={handleAdd}>
          <span>Add</span>
        </button>
      </div>
    )
}

export default InputArea