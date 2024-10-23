document.addEventListener("DOMContentLoaded", () => {

    //all JS code in here:

    const startButton = document.getElementById("start");
    const nextButton = document.getElementById("next");
    const resetButton = document.getElementById("reset");

    const questionsContainer = document.getElementById("questions-container");
    // const topic = questionsArray[0].questions;
    let topic = "Cornwall";
    //change shuffledQuestions to a function later
    let shuffledQuestions = shuffleQuestions(topic);
    // let shuffledQuestions = topic;
    let currentQuestionIndex = 0;
    let answerButtons = document.getElementById("answers-container");

    let userScore = 0;


    //Paulina
    //marker 1
    startButton.addEventListener("click", startQuiz);
    nextButton.addEventListener("click", onNextButton);
    resetButton.addEventListener("click", resetVars);

    function startQuiz() {
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
    }


    //Luke
    //marker 5
    function onNextButton() {
        nextButton.classList.toggle("hide");
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            removeLastQuestion();
        } else if (currentQuestionIndex === shuffledQuestions.length) {
            // finishedQuizScene();
            console.log("create finished quiz scene function");
            finishedQuizScene();
        } else {
            console.log("Luke messed this if up");
        }
        }
    
    // //marker 6
    // finishedQuizScene()
    // needs more than this, will add on Thursday, but needed boilerplate for now.
    function finishedQuizScene () {
        resetButton.classList.toggle("hide");
    }

    function resetVars() {
        userScore = 0;
        currentQuestionIndex = 0;
        shuffledQuestions = shuffle(topic);
    }

    function shuffleQuestions (topicName) {
        for (let questionSet of questionsArray) {
            // console.log
            console.log(questionSet.topic, topicName);
            console.log(questionSet.topic == topicName);
            
            if (questionSet.topic == topicName){
                console.log(topic, topicName);
                console.log(topic == topicName);
                return questionSet.questions.sort(() => Math.random() - 0.5);
            }
        }
});