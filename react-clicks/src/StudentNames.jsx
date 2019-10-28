import React, { Component } from 'react'
import StudentCard from './StudentCard'

export default class StudentNames extends Component {

allNames = this.props.names.map(e=>{
return <StudentCard name={e}/>
}) 
    render() {
        return (

        <div>
              <div className="container">
            {this.allNames}
            </div>
        </div>
        )
    }
}
