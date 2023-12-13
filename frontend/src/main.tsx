// import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'
import 'src/styles/index.css'

// TODO make sure it works in strict mode
ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
)
