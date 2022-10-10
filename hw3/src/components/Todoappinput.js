import React from 'react'
import Todoapplist from '../containers/Todoapplist'
//import x from '../components/x.png'

function Todoappinput (){

    
    return (
        
        <section className='todo-app__main'>
        <input className='todo-app__input'
          type="text"
          placeholder={"What needs to be done?"}
        />
        <Todoapplist/>
         
      </section>
    
    );
  }

  export default Todoappinput;