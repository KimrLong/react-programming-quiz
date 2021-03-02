import React, { Component } from 'react'
import { Button, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import './styles.css';



var results = []

class Question extends Component {
    onChange(choice, event) {
        event.preventDefault()
        const { setCurrent, setScore, question } = this.props
        if (choice === question.correct) {
            results.push('✓')
            setScore(this.props.score + 1)
            setCurrent(this.props.current + 1)
        } else if (choice !== question.correct) {
            results.push('X')
            setCurrent(this.props.current + 1)
        } else {
            console.log('not right or wrong')
            setCurrent(this.props.current + 1)
        }
    }

    shuffleChoices(choices) {
        for (let index = choices.length - 1; index > 0; index--) {
            let index_2 = Math.floor(Math.random() * (index + 1))
            let temp = choices[index]
            choices[index] = choices[index_2]
            choices[index_2] = temp
        }
        return choices
    }

    render() {
        const { question } = this.props
        return (
            <div>
                {
                    results.length === 0
                        ? <div></div>
                        : <div class="small">
                            <div className="results">
                                <div className="center">
                                    {
                                        results.map( (result, index) => {
                                            if (result === 'X') {
                                                return (
                                                    <span key={`wrong-${index}`} style={style.wrong}>
                                                        {`   ${result}   `}
                                                    </span>
                                                )
                                            } else {
                                                return (
                                                    <span key={`correct_${index}`} style={style.correct}>
                                                        {`   ${result}   `}
                                                    </span>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                }
                <div>
                    <h3><center>{question.text}</center></h3>
                    <hr />
                    <ListGroup>
                        {
                            this.shuffleChoices(question.choices).map((choice, index) => {
                                const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
                                return (
                                    <ListGroupItem key={`choice_${index}`} onClick={this.onChange.bind(this, choice.text)}>
                                        <Button
                                            variant={'warning'}
                                            name={question.id}
                                            key={`choice_button_${index}`}
                                        >
                                            {alphabet[index]}
                                        </Button>
                                        <span className="choice">{choice.text}</span>
                                    </ListGroupItem>
                                )
                            })
                        }
                    
                    <Row>
                        <Col className="category pt-4" md={10}>
                            <strong>Category: </strong>{question.category}
                        </Col>

                    </Row>
                    </ListGroup>
                </div>
            </div>
            //change the md={1} from jsx to javascript
        )
    }
}

const style = {
    correct: {
        color: '#008000'
    },
    wrong: {
        color: '#FF0000'
    }
}

export default Question