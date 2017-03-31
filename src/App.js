import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import Answers from './Answers';

class App extends Component {
  constructor(){
    super();
    this.state = {
      questions: [],
      userAnswers: []
    }
    this.handleGetQuestions = this.handleGetQuestions.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleGetQuestions() {
    fetch('https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple')
    .then(response => { 
      if(response.ok){
        return response.json();
      }
    })
    .then(data => {
      this.setState({
        questions: data.results
      })
    })
  }

  handleCardClick () {
    // when the card is clicked, re-render with next question (maybe update current question)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Crazy-Simple Quiz Questions</h2>
        </div>
        <div className="App-intro">
          <span>It's quiz questions.</span>
        </div>
        <div className="Outer-lsit">
          {/*PASS ONLY ONE QUESTION TO CARD - PASS CLICK HANDLER - EACH CLICK UPDATE THE QUESTION UNTIL INDEX */}
          <Card getQuestions={this.handleGetQuestions} questions={this.state.questions} />
        </div>
        <div>
          <Answers answers={this.state.userAnswers}></Answers>
        </div>
      </div>
    );
  }
}

export default App;
