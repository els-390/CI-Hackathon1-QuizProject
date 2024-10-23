document.addEventListener("DOMContentLoaded") => {

    //all JS code in here:

    const startButton = document.getElementById("start")
    const nextButton = document.getElementById("next")
    let topic = questionsArray[0].questions;
    //change shuffledQuestions to a function later
    let shuffledQuestions = topic.sort(Math.random() - 0.5);
    let currentQuestionIndex = 0;
    let answerButtons = document.getElementById("answers-container").children;
}

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
//marker 3\

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

function onAnswerSelected(e) {
    const answerButtons = document.querySelector('.answer-btn');
    answerButtons.forEach(button => {
    e.target.classList.add('selected');
    });
    button.classList.remove('selected');
}
	
add attribute class “selected” or “choice” to answer button clicked
create a css style targeting the selected class to give it a border colour to highlight
if answer changes remove previous “selected” class (use toggle for this?)
	and apply selected to new choice of button

    function onAnswerSelected(e) {
        // Get the clicked button element
        const answerButtons = e.target;
      
        // Toggle the 'selected' class on the clicked button
        answerButtons.classList.toggle('selected');
      
        // Remove the 'selected' class from all other buttons
        const otherButtons = document.querySelectorAll('button:not(.selected)');
        otherButtons.forEach(button => button.classList.remove('selected'));
      }
}


// //Luke
// //marker 5


// //marker 6
// finishedQuizScene()
