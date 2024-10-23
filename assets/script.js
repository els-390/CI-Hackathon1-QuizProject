document.addEventListener("DOMContentLoaded", () => {
    
    //all JS code in here:

    const startButton = document.getElementById("start");
    const nextButton = document.getElementById("next");
    let topic = questionsArray[0].questions;
    //change shuffledQuestions to a function later
    let shuffledQuestions = topic.sort(Math.random() - 0.5);
    let currentQuestionIndex = 0;
    let answerButtons = document.getElementById("answers-container").children;
}

    //Paulina
    //marker 1
//marker 1
// add event listener to start button for StartFunction

// StartFunction
// 	when startButton is clicked, hide start button (or grey out?)
// 	unhide questions-container
// 	call next function (remove last question)



// //Becky
// //marker 2
// remove last question
// 	clear the content of the #question element
// 	clear the innerhtml of the answers-container
// 	call next function (setNextQuestion)


// //Kate
// //marker 3
// setNextQuestion
// 	next question is the current index of shuffled questions array
// 	set the content of #question element to nextQuestion.question
// 	for each item in nextQuestion’s options paramater
// 		make new button
// 		content of button equals the current item of options paramater
// 		add attribute to the correct answer button indicating it is correct
// 		add event listeners to answer buttons


//Ellie
//marker 4
// function onAnswerSelected(e) {
//     const answerButtons = document.querySelector('.answer-btn');
//     answerButtons.forEach(button => {
//     e.target.classList.add('selected');
//     });
//     button.classList.remove('selected');
// }
	
//add attribute class “selected” or “choice” to answer button clicked
//create a css style targeting the selected class to give it a border colour to highlight
//if answer changes remove previous “selected” class (use toggle for this?)
//	and apply selected to new choice of button

//     function onAnswerSelected(e) {
//         // Get the clicked button element
//         const answerButtons = e.target;
      
//         // Toggle the 'selected' class on the clicked button
//         answerButtons.classList.toggle('selected');
      
//         // Remove the 'selected' class from all other buttons
//         const otherButtons = document.querySelectorAll('button:not(.selected)');
//         otherButtons.forEach(button => button.classList.remove('selected'));
//       }
// }


// //Luke
// //marker 5
// onNextButton( )
// 	let the answer be current index of shuffled questions array.answer

// 	check which answer button has selected/choice
// 	if the button with selected is the same array value as answer
// 		score increases by one

// 	increase the current question index by 1

// 	check if current question index + 1 is greater than shuffled question index array
// 		if false,
// 			call(removeLastQuestion)
// 		else if true,
// 			call(finishedQuizScene)
// 		else,
// 			log an error to the console saying luke typed out the wrong pseudo code



// //marker 6
// finishedQuizScene()
// 	hide the answer buttons
// 	change the question content to a congrats message
// 	make the start button say take again or restart 

  
// });

