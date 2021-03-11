import React, { Component } from 'react'

class AnswerKey extends Component {
    render() {
        return (
            <div className="answer-key">
                {
                    this.props.questions.map((question, index) => {
                        return (
                            <div key={index}>
                                <center> 
                                    <h4>Question {index + 1}</h4>
                                    {question.text}<br /><br />
                                    <h4>Answer</h4>
                                    {question.correct}
                                </center>
                                <hr />
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}  /// use min-width: 0 to fit answer list in a container.... used with material ui

export default AnswerKey;