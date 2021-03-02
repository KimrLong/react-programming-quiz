import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment} from '../actions/templateActions'

class Classes extends Component {
    render() {
        return (
        <>
            <h1>Classy</h1>

            <h2>{this.props.count}</h2>
            <button onClick={()=>this.props.increment(5)}>Click Me</button>
        </>
        )
    }
}


    //maps global satte to a prop
    //count is our props: this.props.count
    const mapStateToProps = (state) =>{
        return{
            count: state.counter
            //counter is refferred from reducer template
        }
    }
    //increment is a prop: this.props.increment(n)
    const mapDispatchToProps = (dispatch) =>{
        return{
            increment: (n)=>dispatch(increment(n)) //callback accepts param and passes it to dispatch
            //update functions for state
        }
    }

//connect takes 2 functions, 
//1st: pulling down state
//2nd: updating state

export default connect(mapStateToProps, mapDispatchToProps)(Classes);

