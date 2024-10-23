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



    //Paulina
    //marker 1
    startButton.addEventListener("click", startQuiz);

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
        
        console.log("log answer buttons:", answerButtons);

        
        if (selectedButton.getAttribute("data-answer")) {
            questionsContainer.style.backgroundColor = "green";
            swal({
                title: "Good job!",
                text: "You got the right answer!",
                icon: "success",
                button: document.getElementById("next"),
            });
        } else {
            questionsContainer.style.backgroundColor = "red";
            swal({
                title: "Good try! but...",
                text: "You got the wrong answer!",
                icon: "warning",
                button: document.getElementById("next"),
            });
        }
        
        for (let button of answerButtons.children) {
            button.disabled = true;
        }

        // Remove the 'selected' class from all other buttons
        const otherButtons = document.querySelectorAll('button:not(.selected)');
        otherButtons.forEach(button => button.classList.remove('selected'));
    }


    //Luke
    //marker 5
    onNextButton(); //<--should maybe be submit button and next button?
    function onNextButton() {
            const answer = shuffledQuestions[currentQuestionIndex].answer;
            console.log(shuffledQuestions);
            console.log(answer);
            
            if (document.querySelector(".selected").id == answer) {
                console.log("correct")
                console.log("score++")
            } else {
                console.log("incorrect")
            }
            
            currentQuestionIndex++;
            if (currentQuestionIndex + 1 != shuffledQuestions.length) {
                // removeLastQuestion();
                console.log("create remove last question function");
            } else if (currentQuestionIndex + 1 == shuffledQuestions.length) {
                // finishedQuizScene();
                console.log("create finished quiz scene function");
            } else {
                console.log("Luke messed this if up");
            }
        }
    
	// check which answer button has selected/choice
	// if the button with selected is the same array value as answer
	// 	score increases by one
    
	// increase the current question index by 1
    
    // check if current question index + 1 is greater than shuffled question index array
    // 	if false,
    // 		call(removeLastQuestion)
    // 	else if true,
    // 		call(finishedQuizScene)
    // 	else,
    // 		log an error to the console saying luke typed out the wrong pseudo code
    
    
    // //marker 6
    // finishedQuizScene()
    
});