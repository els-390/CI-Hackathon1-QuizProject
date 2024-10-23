document.addEventListener("DOMContentLoaded") => {

    //all JS code in here:

    const startButton = document.getElementById("start")
    const nextButton = document.getElementById("next")
    let topic = questionsArray[0].questions;
    //change shuffledQuestions to a function later
    let shuffledQuestions = topic.sort(Math.random() - 0.5);
    let currentQuestionIndex = 0;
    let answerButtons = document.getElementById("answers-container").children;

    //Paulina
    //marker 1
    startButton.addEventListener("click", startQuiz)

    function startQuiz() {
        console.log("Started")
        currentQuestionIndex = 0;
        startButton.classList.add("hide")
        currentQuestionIndex.classList.remove("hide")
        shuffledQuestions = questions.sort(() => Math.random() - .5)
    }

}
//Becky
//marker 2




//Kate
//marker 3



//Ellie
//marker 4

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
  
    



//Luke
//marker 5
;