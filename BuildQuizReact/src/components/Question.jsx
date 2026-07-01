import  QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from '../questions.js';

import { useState } from "react";

export default function Question({ 
    questionIndex,    
    onSelectAnswer, 
    selectedAnswer, 
    onSkipAnswer    
}) {

    const [answerData, setAnswerData] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 10000;

    if (answerData.selectedAnswer) {
        timer = 1000;
    }

    if (answerData.isCorrect !== null) {
        
    }

    function handleSelectAnswer(answer) {
        setAnswerData({
            selectedAnswer: answer,
            isCorrect: null,
        });

        setTimeout(() => {            
            setAnswerData({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].answers[0] === answer,
            })

            setTimeout(() => {
                onSelectAnswer(answer);            
            }, 2000);
        }, 1000);
    }

    let answerState = '';

    if (answerData.selectedAnswer && answerData.isCorrect !== null) {
        answerState = answerData.isCorrect ? 'correct' : 'wrong';
    } else if (answerData.selectedAnswer) {    
        answerState = 'answered';
    }

    return (
        <div id="question">
            <QuestionTimer 
                key={timer}
                timeout={timer} 
                onTimeout={answerData.selectedAnswer === '' ? onSkipAnswer : null} 
                mode={answerState} 
            />
                <h2>{QUESTIONS[questionIndex].text}</h2>
                <Answers                    
                    answers={QUESTIONS[questionIndex].answers}
                    selectedAnswer={answerData.selectedAnswer}
                    answerState={answerState}
                    onSelectAnswer={handleSelectAnswer}
                />
        </div>
    );
}