import React from 'react'
import x from '../components/x.png'
// const store = createStore()
// const initialTasks = [
//     { taskName: "task1", isCompleted: false },
//     { taskName: "task2", isCompleted: true },
//     { taskName: "task3", isCompleted: false },
//   ];
// //   switch (action.type) {
// //     default:
// //       return state;
// //   }

class Todoappitem extends React.Component(props) {
    constructor(props) {
        super(props)
        this.state = {
          inputValue: ''
        }
      }
AddTask = () => setInputValue(event.target.value)}


      render () {
        const { inputValue } = this.state


    return (
        <li className='todo-app__item'>
            <div className='todo-app__checkbox'>
                <input id="2" type="checkbox"/>
                <label for="2"></label>
            </div>
            <h1 className="todo-app__item-detail">
                {this.task.taskName}
            </h1>
            <img className="todo-app__item-x" src={x} alt="remove"></img>
        </li>
        
    );
   
  }
  
  export default Todoappitem;