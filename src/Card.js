import React, { Component } from 'react';
import Question from './Question';

class Card extends Component {

  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    return (
      <div>
        <ul className="card">
          {this.props.questions.map((question) => {
            return <Question key={question.question} question={question.question} />
          })}
        </ul>
        {/*multiple choice options here*/}
      </div>
    )
  }
}

export default Card;
