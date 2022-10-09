import React from 'react'
import Todoappitem from '../components/Todoappitem'

function Todoapplist() {
    return (
        <div>
      <ul className='todo-app__list'>
        <Todoappitem/>
      </ul>
      <footer className='todo-app__footer'>
        <div className='todo-app__total'>2 left</div>
        <ul className='todo-app__view-buttons'>
            <button>All</button>
            <button>Active</button>
            <button>Complete</button> 
        
        </ul>
        <div className='todo-app__clean'>Clear complete</div>
    </footer>
      </div>
    );
  }
  
  export default Todoapplist;