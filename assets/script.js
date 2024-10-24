document.addEventListener("DOMContentLoaded", () => {

    //all JS code in here:

    const startButton = document.getElementById("start");
    const nextButton = document.getElementById("next");
    const resetButton = document.getElementById("reset");
    const scoreCounter = document.getElementById("score");

    const questionsContainer = document.getElementById("questions-container");
    // const topic = questionsArray[0].questions;
    let topic = "Cornwall";
    //change shuffledQuestions to a function later
    let questionSet = shuffledQuestions(topic);
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
        showNextQuestion(questionSet[currentQuestionIndex]);
    }
    
    function showNextQuestion(shuffledObject) {
        const nextQuestion = document.getElementById("question");
        const answer = questionSet[currentQuestionIndex].answer;
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
            selectedButton.style.backgroundColor = "green";
            if (!userScore) {
                scoreCounter.classList.toggle("hide");
            }
            userScore++;
            let textScore = `Correct answers: ${userScore} out of ${10}`;
            scoreCounter.innerText = textScore;
        } else {
            selectedButton.style.backgroundColor = "red";
        }
        
        for (let button of answerButtons.children) {
            button.disabled = true;
        }
    
        nextButton.classList.toggle("hide"); //reveals next button
    }


    //Luke
    //marker 5
    function onNextButton() {
        nextButton.classList.toggle("hide");  //hides next button
    
        currentQuestionIndex++;
    
        if (currentQuestionIndex != 10) {
            removeLastQuestion();
        } else {
            announceScore();
        }
    }
    
    // //marker 6
    // finishedQuizScene()
    // needs more than this, will add on Thursday, but needed boilerplate for now.
    function finishedQuizScene () {
        resetButton.classList.toggle("hide");
    }

    function resetVars() {
        resetButton.classList.toggle("hide");
        scoreCounter.classList.add("hide");
        answerButtons.classList.toggle("hide");

        userScore = 0;
        scoreCounter.innerText = "";
        hideAnswerButtonsToggle();

        currentQuestionIndex = 0;
        // Insert way to change topic selected??
        questionSet = shuffledQuestions(topic);
        removeLastQuestion();
    }

    function shuffledQuestions (topicName) {
        for (let questionSet of questionsArray) {
            
            if (questionSet.topic == topicName){
                return questionSet.questions.sort(() => Math.random() - 0.5);
            }
        }
    }

    function announceScore() {
        const announce = (message) => {
            document.getElementById("question").innerText = message;
        }

        answerButtons.classList.toggle("hide");
        hideAnswerButtonsToggle();
        scoreCounter.classList.toggle("hide");
        resetButton.classList.toggle("hide");

        if (userScore < 3) {
            let message = `Meur ras for taking our quiz on Cornwall! You got ${userScore} questions correct out of 10...
            better luck next time!`
            announce(message);
        } else if (userScore < 7) {
            let message = `Meur ras for taking our quiz on Cornwall! You got ${userScore} questions correct out of 10...
            could you do better?`
            announce(message);
        } else {
            let message = `Meur ras for taking our quiz on Cornwall! You got ${userScore} questions correct out of 10...
            Great job!`
            announce(message);
        }
    }

    function hideAnswerButtonsToggle() {
        for (let button of answerButtons.children) {
            button.classList.toggle("hide");
        }
    }

});
