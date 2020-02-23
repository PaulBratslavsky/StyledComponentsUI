import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import UIContextProvider from './Context/UIContext'

ReactDOM.render(<UIContextProvider><App /></UIContextProvider>, document.getElementById('root'))

