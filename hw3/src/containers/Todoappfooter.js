import React from 'react'


class Todoappfooter extends React.Component() {

      render () {
    if (this.props.count !== 0){
    return (
        <footer className='todo-app__footer'>
        <div className='todo-app__total'>{this.props.count} left</div>
        <ul className='todo-app__view-buttons'>
            <button>All</button>
            <button>Active</button>
            <button>Complete</button> 
        
        </ul>
        <div className='todo-app__clean'>Clear complete</div>
    </footer>
    )
    }
      }
    }
    export default Todoappfooter;