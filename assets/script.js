document.addEventListener("DOMContentLoaded", () => {

    //all JS code in here:

    const startButton = document.getElementById("start");
    const nextButton = document.getElementById("next");
    const questionsContainer = document.getElementById("questions-container");
    let topic = questionsArray[0].questions;
    //change shuffledQuestions to a function later
    let shuffledQuestions = topic.sort(() => Math.random() - 0.5);
    let currentQuestionIndex = 0;
    let answerButtons = document.getElementById("answers-container");

    let userScore = 0;


    //Paulina
    //marker 1
    startButton.addEventListener("click", startQuiz);
    nextButton.addEventListener("click", onNextButton);

    function startQuiz() {
        currentQuestionIndex = 0;
        startButton.classList.add("hide");
        questionsContainer.classList.remove("hide");
        removeLastQuestion();
    }

    //Becky
    //marker 2
    function removeLastQuestion () {
        document.getElementById("question").innerText = "";
        answerButtons.innerHTML = "";
        setNextQuestion();
    }
    
    
    
    //Kate
    //marker 3\
    
    function setNextQuestion() {
        showNextQuestion(shuffledQuestions[currentQuestionIndex]);
    }
    
    function showNextQuestion(shuffledObject) {
        const nextQuestion = document.getElementById("question");
        const answer = shuffledQuestions[currentQuestionIndex].answer;
        nextQuestion.innerText = shuffledObject.question;

        for (let option in shuffledObject.options) {
            console.log(option);
            const newButton = document.createElement("button");
            newButton.innerText = shuffledObject.options[option];
            newButton.classList.add('btn', 'white-black');

            if (option == answer) {
                newButton.setAttribute("data-answer", "true");
            }
            newButton.addEventListener("click", onAnswerSelected);
            answerButtons.appendChild(newButton);
        }
    }
    
    
    //Ellie
    //marker 4
   
    function onAnswerSelected(e) {
        // Get the clicked button element
        const selectedButton = e.target;
        
        
        // Toggle the 'selected' class on the clicked button
        selectedButton.classList.toggle('selected');

        //checks whether answer selected is correct
        if (selectedButton.getAttribute("data-answer")) {
            questionsContainer.style.backgroundColor = "green";
            // swal({
            //     title: "Good job!",
            //     text: "You got the right answer!",
            //     icon: "success",
            //     button: document.getElementById("next"),
            // });
            userScore++;
        } else {
            questionsContainer.style.backgroundColor = "red";
            // swal({
            //     title: "Good try! but...",
            //     text: "You got the wrong answer!",
            //     icon: "warning",
            //     button: document.getElementById("next"),
            // });
        }
        
        for (let button of answerButtons.children) {
            button.disabled = true;
        }

        nextButton.classList.toggle("hide");

        // Remove the 'selected' class from all other buttons
        const otherButtons = document.querySelectorAll('button:not(.selected)');
        otherButtons.forEach(button => button.classList.remove('selected'));
    }


    //Luke
    //marker 5
    function onNextButton() {
        nextButton.classList.toggle("hide");
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            removeLastQuestion();
        } else if (currentQuestionIndex == shuffledQuestions.length) {
            // finishedQuizScene();
            console.log("create finished quiz scene function");
        } else {
            console.log("Luke messed this if up");
        }
        }
    
    // //marker 6
    // finishedQuizScene()
    
});