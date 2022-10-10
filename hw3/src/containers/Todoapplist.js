import React from 'react'
//import Todoappitem from '../components/Todoappitem'
import Todoappfooter from './Todoappfooter'
import x from '../components/x.png'

function Todoapplist() {

const [input, setinput]=React.useState("");
const [isnotActive, setIsActive] = React.useState(false);
const [list, getList]=React.useState([]);

    const handleChange = (event) => {
      setinput(event.target.value)
    } 
    
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        //console.log(input)
        setinput("")
        getList([...list,{input, isnotActive} ])
        console.log(list)
        
      }
    }

// function handleCheck (ind)  {
//     //setIsActive(current => !current);
//     //console.log(isnotActive)
//     //setIsActive("")
//     const newList = list.map((c, i) => {
//         if(i===ind){
//           const updatedItem = {
//           ...c,
//           isnotActive: !c.isnotActive,
//         }
//         return updatedItem
//       }
      
//           return c;
          
//     });
//     getList(newList);
//   }

const handleCheck =(ind) => {
  setIsActive(current => !current);
  //console.log(isnotActive)
  //setIsActive("")
  const newList = list.map((c, i) => {
      if(i===ind){
        const updatedItem = {
        ...c,
        isnotActive: !isnotActive,
      }
      console.log(updatedItem)
      return updatedItem
    }
    
        return c;
        
  });
  getList(newList);
  console.log(list);
}
    
// function toggle() {
//   setIsActive(!isnotActive);
// }


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
                      <input id={ind} type="checkbox" onClick={() =>handleCheck(ind)}/>
                      <label for={ind}></label>
                  </div>
                  {/* <h1 className="todo-app__item-detail"  > */}
                  <h1 className='todo-app__item-detail'
                      style={taskname.isnotActive ?  { textDecoration:'line-through',opacity: 0.5 } : {}}
                   >
                  {/* <h1 className={isnotActive ? 'todo-app__item-detail':''} > */}
                      {taskname.input}
                  </h1>
                  
                  <img className="todo-app__item-x" src={x} alt="remove"></img>
              </li>
              
              )
            }
          )
        }
      </ul>
      <Todoappfooter count={list.length}/>
             {/* <footer className='todo-app__footer'>
                
                 <div className='todo-app__total'>{list.length} left</div>
                <ul className='todo-app__view-buttons'>
                    <button>All</button>
                    <button>Active</button>
                    <button>Complete</button> 
                
                </ul>
                <div className='todo-app__clean'>Clear complete</div> 
            </footer>*/}
      </div>
    );
  }

  
  export default Todoapplist;