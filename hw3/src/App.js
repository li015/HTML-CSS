import './App.css';
import './styles.css'
import React, {Component} from 'react';
import Todoapplist from './containers/Todoapplist'
//import Todoappfooter from '../src/containers/Todoappfooter'


class Todolist extends Component{
  constructor(props) {
    super(props);
    this.state = { condition: 'Active' };
  }
  handleCondition = (e) => {
    this.setState({ condition: e})
  }

  render(){
    return(
      
      <div className="todo-app__root">

        <header className="todo-app__header">
          <h1 className='todo-app__title '>todos</h1>
        </header>
        <Todoapplist/>
       
        {/* <Todoappfooter count="0"/> */}
        
      </div> 

       );
  }
}
export default Todolist;

