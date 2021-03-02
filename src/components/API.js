import axios from 'axios';
import MyData from './MyData';

const getQuestionsFromAPI = async () => {
    try {
        const promise1 = await axios.get('https://opentdb.com/api.php?amount=10&category=18&type=multiple')
        const promise2 = MyData[0].results;
        console.log([...promise1.data.results, ...promise2])
        return [...promise1.data.results, ...promise2]
        
    } catch (error) {
        console.log(error)
    }
}


const decodeHTML = (html) => {
    var txt = document.createElement("textarea")
    txt.innerHTML = html
    return txt.value
    
}


const formatChoices = choices => {
    return choices.map((choice, index) => {
        return { text: decodeHTML(choice.trim()) }
    })
}
const combineAllChoices = question => question.correct_answer.split(',').concat(question.incorrect_answers)

const formatQuestion = (question, index) => {
    return {
        id: index,
        category: question.category,
        type: question.type,
        difficulty: question.difficulty,
        text: decodeHTML(question.question.trim()),
        choices: formatChoices(combineAllChoices(question)),
        correct: decodeHTML(question.correct_answer.trim()),
        incorrect: question.incorrect_answers
    }
}

const formatAPIQuizData = questions => {
    return questions.map((question, index) => {
        return formatQuestion(question, index)
    })
}

const createQuizData = async () => {
    try {
        const questions = await getQuestionsFromAPI()
        const formattedQuestions = await formatAPIQuizData(questions)
        console.log("formatted Qs", formattedQuestions)
        return formattedQuestions
    } catch (error) {
        console.log(error)
    }
}

export { createQuizData };