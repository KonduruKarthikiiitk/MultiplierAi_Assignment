import React from "react";

const ToDoItem = (props) => {
  
  return (
    <div
      onClick={() => {

        props.onChecked(props.index);
      }}
    >
      <li
       style={{textDecoration:props.done?"line-through":null}}>
       {props.text}</li>
    </div>
  );
};
export default ToDoItem;
