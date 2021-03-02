import React, { Component } from "react";
import { connect } from "react-redux";
import { startQuiz } from "../actions/index";
import { bindActionCreators } from "redux";
import {Paper, Button, HS1, HS2} from './Styles';
import {Link} from 'react-router-dom';

// import background from "/src/components/assets/images/edu-lauton-TyQ-0lPp6e4-unsplash.jpg";

function mapStateToProps(state) {
    return {
    categories: state
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
    {
        startQuiz: startQuiz,
    },
    dispatch
    );
}

class StartPage extends Component {
    constructor(props) {
    super(props);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
    }

    handleStartQuiz(type) {
    this.props.startQuiz(type);
    }

    render() {
    return (
        <Paper>
        <HS1>Computer Programmer Quiz</HS1>
        <HS2>
            Test your knowledge of Computer Science, Javascript and React/Redux with this interactive quiz!
        </HS2>
        <row>
            <col-6>
            <Link className="badge badge-warning w-100 h-90 mt-5
            text-center  " to="/quiz"><HS2>Start Quiz</HS2></Link><br/>
            <Link className="badge badge-warning w-100 h-90 mt-2
            text-center  " to="/aboutme"><HS2>About Me</HS2></Link>
                {/* <Button
                onClick={() => this.handleStartQuiz("Start Quiz")}
                className="start-button">
                Start the Quiz
                </Button> &nbsp;&nbsp;
            </col-6>
            <col-6>
                <Button class="p-10"
                onClick={() => this.handleStartQuiz("About me")}
                className="start-button">
                About the Developer
                </Button> */}
            </col-6>
        </row>


        </Paper>
    );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);