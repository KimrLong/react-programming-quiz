import React, { Component } from 'react';
import {Paper, HS2, HS1} from './Styles';
import QuestionList from './QuestionList'
import Scorebox from './Scorebox'
import Results from './Results'
import './styles.css'
import { createQuizData as quizData } from './API'

class App extends Component {
constructor(props) {
    super(props)
    this.state = {
    questions: [],
    score: 0,
    current: 0,
    loading: undefined
    }
}

setCurrent(current) {
    this.setState({ current })
}

setScore(score) {
    this.setState({ score })
}

async componentDidMount() {
    try {
    this.setState({ loading: true })
    this.setState({ questions: await quizData(), loading: false })
    } catch (err) {
    console.log(err)
    }
}

render() {
    if (this.state.loading === false) {
    if (this.state.current >= this.state.questions.length) {
        var scorebox = ''
        var results = <Results {...this.state} />
    } else {
        scorebox = <Scorebox {...this.state} />
        results = ''
    }
    return (
        <Paper>
        {scorebox}
        <QuestionList
            {...this.state}
            setCurrent={this.setCurrent.bind(this)}
            setScore={this.setScore.bind(this)}
        />
        {results}
        </Paper>
    )
    } else {
    return null
    }
}
}

export default App;

