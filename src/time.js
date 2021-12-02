import React from 'react'
import ReactDOM from 'react-dom'
export default function time () {
   setTimeout(function(){ 
    ReactDOM.render(
      <h1>🖐Hi🤙</h1>,
      document.getElementById('app')
  )},3000)
  setTimeout(function(){ 
    ReactDOM.render(
      <h1>🖐🤙</h1>,
      document.getElementById('app')
  )},3000)
  }