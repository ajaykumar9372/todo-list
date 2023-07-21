import React, { useState } from "react";
import Todolist from "./todolist";
function App() {
  let [inputitem, setinputitem] = useState("");
  let [saveinput, setsaveinput] = useState([]);
  function handleinput(event) {
    let value = event.target.value;



    setinputitem(value);
 
}
  function add() {
   
    setsaveinput((previtem) => {
      return [...previtem, inputitem];
    });

    setinputitem("");

  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleinput} type="text" value={inputitem} />
        <button onClick={add}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {saveinput.map((item) => 
          <Todolist
           todoitem={item}

           />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
