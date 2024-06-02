import { useState } from 'react'
import './App.css'
function App() {

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleInput = (e) =>{
    setInput(e.target.value);
  }
  const handleTask = () =>{
    if(input.trim() !== ''){
    setList([...list, input]);
    setInput("");
    }
  }
  const handleDelete = (index) =>{
           const filterList = list.filter((_, i) => i !== index);
    setList(filterList)
  }

  return (
    <>
      <h1>My Todo App</h1>
      <div className="container">
        <div className="input-box">
          <input type="text" value={input} onChange={(e)=>handleInput(e)}/><button onClick={handleTask}>Add Task</button>
        </div>
        <div className="list">
          <ul>
            {list.map((item, index)=><li key={index}>{item}<span id='removeBtn' onClick={()=>handleDelete(index)}>X</span></li>)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App
