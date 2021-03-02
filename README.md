
## Overview:
Designed a quiz app that will tell you what level of programmer you are! Don't worry this is just for fun!! It uses an API to generate questions and It is combined with questions that I have supplied myself! 

The questions focus on Computer Science, React/Redux, Javascript


__________________________________________

## Technologies used:

- JS ES6
- HTML
- CSS
- React
- Redux
- styled-components
- JSX
- JSON
- Bootstrap

- API- Open Trivia DB
 https://opentdb.com/


__________________________________________
## background credit to-

http://www.unsplash.com/

edu-lauton-TyQ-0lPp6e4-unsplash.jpg

_____________________________________________________


## MVP

- Quiz that keeps score,
- saves and displays correct ansewers
- returns percentage
- lets the user know what 'professional 'level' they are at (4 levels)


_____________________________________________

## Stretch Goals

- Annimation
- Set Timer
- more categories and levels


_________________________________________________

## code snippets
_____________________________________________________

## Baselayout


import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Yellow from '../../assets/images/edu-lauton-TyQ-0lPp6e4-unsplash.jpg';
import '../../components/styles.css'




const BaseLayout = (props) => {
  return (
    <>
    <img className="bg-img" src={Yellow} alt="logo"/>
    <Header/><br/>
       {props.children}
    <Footer/>
    </>
  )
}

export default BaseLayout;

______________________________________________________


## In the beginning.....

<p>
<img src="src/assets/images/0B82E0E3-FDD8-4BCD-A525-23C79177EA21.jpeg">
</p>

__________________________________________________________________

## using reducers/actions
<p>
<img src="src/assets/images/12716DE7-EFC3-4B17-8E96-D417E74386AE.jpeg">
</p>


<p>
<img src="src/assets/images/123672A1-FA13-4465-AC3E-0D494477E19D_4_5005_c.jpeg">
</p>

__________________________________________________

## using styled-components
<p>

<img src="src/assets/images/350C380C-F29A-43FC-9905-7530C7B5D078_4_5005_c.jpeg">


</p>


________________________________________________________

## Function based
<p><img src="src/assets/images/43F7F231-29D7-4501-B95E-0525499B0F2E.jpeg"></p>

____________________________________________________________

## Class based


<p><img src="src/assets/images/C2C28285-A310-48EE-A5E8-E6F3652E2315.jpeg"></p>





______________________________________________________________________
 ## working tree


reactReduxApp-
    src-
        -actions-
            -index.js
            -types.js
        -assets-
            -images
        -components-
            -AboutMe.js
            -Answerkey.js
            -API.js
            -MyData.js
            -Question.js
            -QuestionList.js
            -Quiz.js
            -Results.js
            -Scorebox.js
            -StartPage.js
        -reducers-
            -questions.js
            -answersInfo.js
    -App.js
    -index.js
        































# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# react-programming-quiz
