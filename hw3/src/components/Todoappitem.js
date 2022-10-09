import React from 'react'
import x from '../components/x.png'

function Todoappitem() {
    return (
        <li className='todo-app__item'>
            <div className='todo-app__checkbox'>
                <input id="2" type="checkbox"/>
                <label for="2"></label>
            </div>
            <h1 className="todo-app__item-detail">
                This is the third TODO
            </h1>
            <img className="todo-app__item-x" src={x} alt="remove"></img>
        </li>
    );
  }
  
  export default Todoappitem;