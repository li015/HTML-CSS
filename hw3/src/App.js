import './App.css';
import './styles.css'
import React, {Component} from 'react';
import Todoappinput from './components/Todoappinput'

class Todolist extends Component{


  render(){
    return(
      
      <div className="todo-app__root">

        <header className="todo-app__header">
          <h1 className='todo-app__title '>todos</h1>
        </header>
        <Todoappinput/>
       
          
        
      </div> 

       );
  }
}
export default Todolist;


/* <div className="todo-app__root">

<header className="todo-app__header">
  </header>
  
  <section className='todo-app__main'>
    <input className='todo-app__input'>what needs to be done?</input>
      <ul className='todo-app__list'>
        <li className='todo-app__item'>
        
        </li>
      </ul>
  </section>


<footer className='todo-app__footer'>
  <div className='todo-app__total'>2 left</div>
  <ul className='todo-app__view-buttons'> all</ul>
  <div className='todo-app__clean'>Clear complete</div>
</footer>
<h1 > 100</h1>
</div> */
