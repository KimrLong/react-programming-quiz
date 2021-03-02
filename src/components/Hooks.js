import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment}from '../actions/templateActions';
import {DivSC, H1S, Paper} from './Styles';


const Hooks = () => {
    //getting global state
    const count = useSelector(state => state.counter);

    //useSelector/useDispatch instead of mapStateToProps, mapDispatchToProps
    //recieve dispatch func

    const dispatch = useDispatch();
  return (
    <>
      Hooksss
    <DivSC>
      <H1S>Hooks</H1S>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(increment(4))}>Click ME!!</button>
    </DivSC>›

      <Paper width="333px" height="600px">
          Here is my paper container bhjbjijfi jfioewjf oifjoiwhf iwfh wehf iwe hfiowhc h riowe hcroirihcio hrieh riew hrw eh icuhruwehr jwbedhjwb beurh8h8wrb
      </Paper>
    </>
  )
}

export default Hooks;
