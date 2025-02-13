"use strict";
class Quiz {
    constructor(questions) {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = questions;
    }
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }
    checkAnswer(selectedAnswer) {
        const isCorrect = this.getCurrentQuestion().correctAnswer === selectedAnswer;
        if (isCorrect)
            this.score++;
        return isCorrect;
    }
    nextQuestion() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            return true;
        }
        return false;
    }
    getScore() {
        return this.score;
    }
}
const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the capital of China?",
        choices: ["Shanghai", "Chongqing", "Beijing", "Chengdu"],
        correctAnswer: "Beijing"
    },
    {
        question: "What is the capital of India?",
        choices: ["New Delhi", "Mumbai", "Pune", "Bangalore"],
        correctAnswer: "New Delhi"
    },
    {
        question: "What is the capital of Malaysia?",
        choices: ["George Town", "Malacca", "Kota Kinabalu", "Kuala Lumpur"],
        correctAnswer: "Kuala Lumpur"
    },
    {
        question: "What is the capital of Russia?",
        choices: ["Saint Petersburg", "Moscow", "Samara", "Belgorod"],
        correctAnswer: "Moscow"
    }
];
const quiz = new Quiz(questions);
const questionText = document.getElementById("question-text");
const choicesContainer = document.getElementById("choices-container");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score-display");
function renderQuestion() {
    const currentQuestion = quiz.getCurrentQuestion();
    questionText.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";
    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => handleAnswer(choice));
        choicesContainer.appendChild(button);
    });
    nextButton.disabled = true;
}
function handleAnswer(selectedAnswer) {
    const isCorrect = quiz.checkAnswer(selectedAnswer);
    alert(isCorrect ? "Correct!" : "Wrong answer.");
    nextButton.disabled = false;
    scoreDisplay.textContent = `Score: ${quiz.getScore()}`;
}
nextButton.addEventListener("click", () => {
    if (quiz.nextQuestion()) {
        renderQuestion();
    }
    else {
        alert(`Quiz Over! Your final score is: ${quiz.getScore()}`);
        nextButton.disabled = true;
    }
});
renderQuestion();
