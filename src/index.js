import React from 'react'
import ReactDOM from 'react-dom'
import Father from './components/Father'
import Son from './components/Son'



ReactDOM.render(
    <div>
       <Father name="Paulo" lastName="Silva">
         <Son name="Pedro"/>
         <Son name="Carla"/>
         <Son name="Junior"/>
       </Father>
    </div>, document.getElementById('root'))