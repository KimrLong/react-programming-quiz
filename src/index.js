import React from 'react';
import ReactDOM from 'react-dom';
import BaseLayout from './components/layout/BaseLayout';
import StartPage from './components/StartPage';
import AboutMe from './components/AboutMe';
import Quiz from './components/Quiz';
import {ThemeProvider} from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducerTemplate';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

const saveToLocalStorage = (reduxGlobalState) =>{
  //serialization = converting js obj to a str
  try{
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('state', serializeState);
  }
  catch(e){
    console.log(e);
  }
}

const loadFromLocalStorage = () =>{
  const serializeState = localStorage.getItem('state');

  if(serializeState ===null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState); //returns JS obj representing local storage
  }
}

const persistedState = loadFromLocalStorage();

const theme = {
  colors:{
    primary: '#820263',
    secondary: '#2e294e',
    base: '#EADEDA',
    accent: '#ffd400',
    third: '#d90368'

  },
  fonts: {
    big: 'Courier',
  }
}



//initializing redux store //requires reducer. second argument is for redux dev-tools extension
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//use to grab what is inside of state
store.subscribe(()=>{
  saveToLocalStorage(store.getState());
})

ReactDOM.render( //component hierachy 
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <BaseLayout>
            <Switch>
              <Route exact path ="/" component={StartPage}/>
              <Route path ="/quiz" component={Quiz}/>
              <Route path ="/aboutme" component={AboutMe}/>
            </Switch>
          </BaseLayout>
        </Router>
      </ThemeProvider>
    </Provider>
</React.StrictMode>,
  document.getElementById('root')
);


