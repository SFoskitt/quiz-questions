import React, { Component } from 'react';
// import ReactDOM from 'react-dom'

class Question extends Component {
    render () {
      return (
        <div className="question">
          <li>{this.props.question}</li>
        </div>
      )
      
    }
}

export default Question;
