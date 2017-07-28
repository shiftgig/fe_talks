import React from 'react'
import ReactDOM from 'react-dom'
import {Container} from './components/Container'

const body = document.getElementsByTagName('body')[0]
const app = document.createElement('div')
app.setAttribute('id', 'app')
body.appendChild(app)

ReactDOM.render(<Container/>, app)