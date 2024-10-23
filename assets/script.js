document.addEventListener("DOMContentLoaded", () => {
    
    //all JS code in here:

    const startButton = document.getElementById("start");
    const nextButton = document.getElementById("next");
    let topic = questionsArray[0].questions;
    //change shuffledQuestions to a function later
    let shuffledQuestions = topic.sort(() => Math.random() - 0.5);
    let currentQuestionIndex = 0;
    let answerButtons = document.getElementById("answers-container").children;

    //Paulina
    //marker 1




    //Becky
    //marker 2




    //Kate
    //marker 3



    //Ellie
    //marker 4



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
            removeLastQuestion();
        } else if (currentQuestionIndex + 1 == shuffledQuestions.length) {
            finishedQuizScene();
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

    
});

