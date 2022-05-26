import React from 'react'
import { createRoot } from 'react-dom/client';

import GoodMorning from './components/GoodMorning'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<GoodMorning name="Maria"/>)