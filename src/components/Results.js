import React, { Component } from 'react';
import AnswerKey from './AnswerKey';
import { Container } from 'react-bootstrap';
import {Paper, Button, HS2, HS1} from './Styles';

class Results extends Component {
    createScoreMessage(percent) {
        let message = ''
        if (percent === 100) {
            message = 'You are the new CTO!'
        } else if (percent > 80) {
            message = 'You are promoted to Principal Architect!'
        } else if (percent < 80 && percent > 60) {
            message = 'You have made Team Lead but still have work to do!'
        } else {
            message = "Still a Junior Developer. Keep Trying!"
        }
        return message
    }

    render() {
        var percent = (this.props.score / this.props.questions.length * 100)
        return (
            <div>
                <Paper>
                    <center>
                        <HS2>You made {this.props.score} answers out of {this.props.questions.length} Correct</HS2>
                        <HS1>{percent}%</HS1>
                        <hr />
                        <HS2>{this.createScoreMessage(percent)}</HS2>
                    </center>
                    <hr />
                    <center>
                        <Button href="/">Take Again</Button>
                    </center>

                    <hr />
                </Paper>
                <center>
                    <h3>Answer Key</h3>
                </center>
                <AnswerKey questions={this.props.questions} />
            </div >
        )
    }
}

export default Results