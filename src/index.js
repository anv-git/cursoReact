import React from 'react'
import ReactDOM from 'react-dom'
import GoodMorning from './components/GoodMorning'
import Multi, { GoodNight } from './components/multiple'



ReactDOM.render(
    <div>
        <GoodMorning name="Ana"/>
        <Multi.GoodAfternoon name="Maria"/>
        <GoodNight name="Mia"/>
    </div>, document.getElementById('root'))