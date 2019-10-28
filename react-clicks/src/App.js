import React, { Component } from 'react'
import Students from './Students'
import './Student.css'
import StudentNames from './StudentNames'

export default class App extends Component {
  render() {
    return (
      <div>
      <StudentNames names={Students}/>
        
      </div>
    )
  }
}

