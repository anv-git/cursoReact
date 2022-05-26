import React from 'react'
import { createRoot } from 'react-dom/client';
import GoodMorning from './components/GoodMorning'
import Multi, { GoodNight} from './components/multiple'

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <div>
        <GoodMorning name="Ana"/>
        <Multi.GoodAfternoon name="Maria"/>
        <GoodNight name="Mia"/>
    </div>
)