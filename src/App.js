import React,{useState} from 'react';
import './App.css';
import {AiOutlineDelete} from 'react-icons/ai';
import {AiOutlineCheck} from 'react-icons/ai';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className='todo-wrapper'>
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input type='text' placeholder="What's the task title?" />
          </div>

          <div className='todo-input-item'>
            <label>Description</label>
            <input type='text' placeholder="What's the task description?" />
          </div>

          <div className='todo-input-item'>
            <button type='button' className='primaryBtn'>Add</button>
          </div>
        </div>

        <div className='btn-area'>
          <button className={`secondaryBtn isCompleteScreen ${isCompleteScreen === false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>ToDo</button>
          <button className={`secondaryBtn isCompleteScreen ${isCompleteScreen === true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Complete</button>
        </div>

        <div className='todo-list'>
          <div className='todo-list-item'>
            <div>
              <h3>task 1</h3>
              <p>Description</p>
            </div>
            
            <div>
            <AiOutlineDelete className='icon'/>
            <AiOutlineCheck className='check-icon'/>
          </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default App;
