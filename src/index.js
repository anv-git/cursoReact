import React from 'react'
import ReactDOM from 'react-dom'
import GoodMorning from './components/GoodMorning'
import { GoodAfternoon, GoodNight } from './components/multiple'



ReactDOM.render(
    <div>
        <GoodMorning name="Ana"/>
        <GoodAfternoon name="Maria"/>
        <GoodNight name="Mia"/>
    </div>, document.getElementById('root'))