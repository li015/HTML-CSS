import React from 'react'
//import Todoappitem from '../components/Todoappitem'
//import Todoappfooter from './Todoappfooter'
import x from '../components/x.png'

function Todoapplist() {

 const [input, setinput]=React.useState("");
const [list, getList]=React.useState([]);

  // const handleSubmit =() =>{
  //     getList((l)=>[...l,{taskName} ])
  //       console.log(list)
  //       console.log(input)
  //       setinput({askName:""})
  //   }

    //   value={Task}
        //   onChange={(e)=>addTask(e.target.value)}
    const handleChange = (event) => {
      setinput(event.target.value)
    } 
    
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        //console.log(input)
        setinput("")
        getList([...list,{input} ])
        console.log(list)
        
      }
    }
  
    return (
        <div>
          <section className='todo-app__main'>
        <input className='todo-app__input'
          type="text"
          placeholder={"What needs to be done?"}
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </section>
      <ul className='todo-app__list'>
        {
          list.map((taskname, ind)=>{
            return(
            <li className='todo-app__item'>
                  <div className='todo-app__checkbox'>
                      <input id={ind} type="checkbox"/>
                      <label for={ind}></label>
                  </div>
                  <h1 className="todo-app__item-detail" >
                      {taskname.input}
                  </h1>
                  
                  <img className="todo-app__item-x" src={x} alt="remove"></img>
              </li>
              )
            }
          )
        }
      </ul>
   
              <footer className='todo-app__footer'>
                <div className='todo-app__total'>{list.length} left</div>
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