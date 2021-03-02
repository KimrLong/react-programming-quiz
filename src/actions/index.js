import { START_QUIZ } from "./types";
import { ABOUT_ME } from "./types";
import { ANSWER_QUESTION } from "./types";
import { NEW_QUIZ } from "./types";




export function startQuiz(data) {
    return {
    type: START_QUIZ,
    payload: data
    };
}

export function aboutMe(data) {
    return {
    type: ABOUT_ME,
    payload: data
    };
}

export function answerQuestion(data) {
    return {
    type: ANSWER_QUESTION,
    payload: data
    };
}

export function newQuiz(data) {
    return {
    type: NEW_QUIZ,
    payload: data
    };
}

