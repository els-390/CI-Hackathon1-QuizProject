document.addEventListener("DOMContentLoaded", () => {
    
    //all JS code in here:

    const startButton = document.getElementById("start");
    const nextButton = document.getElementById("next");
    let topic = questionsArray[0].questions;
    //change shuffledQuestions to a function later
    let shuffledQuestions = topic.sort(Math.random() - 0.5);
    let currentQuestionIndex = 0;
    let answerButtons = document.getElementById("answers-container").children;

    //Paulina
    //marker 1




    //Becky
    //marker 2




    //Kate
    //marker 3

    function setNextQuestion() {
        showNextQuestion(shuffledQuestions[currentQuestionIndex]);
    }
    
    function showNextQuestion(question) {
        const nextQuestion = document.getElementById("question");
        nextQuestion.innerText = questionsArray.topic.question;
        question.options.forEach(answer => {
            const newButton = document.createElement("button");
            newButton.innerText = options[topic.questions.answer];
            newButton.classList.add("btn white-black");
            if (answer.correct) {
                newButton.dataset.correct = answer.correct;
                }
                newButton.addEventListener("click", onAnswerSelected);
                answerButtons.appendChild(newButton);
        });
    }
  
    



    //Ellie
    //marker 4



    //Luke
    //marker 5


    
});

