
// Function for time out



// Before Starting: 
// Create a question/answer bank, indicating the correct answer for each question and all variables.

// Add Images to display later
var randQuest = [{
  qID: 0,
  question: "In Aladdin, what is the name of Jasmine's pet tiger?",
  choices: ["Rajah", "Bo", "Iago", "Jack"],
  validAnswer: 0
},
{
  qID: 1,
  question: "In Peter Pan, Captain Hook had a hook on which part of his     body?",
  choices: ["Right Foot", "Left Hand", "Left Foot", "Right Hand"],

  validAnswer: 1

},

{
  qID: 2,
  question: "In the Lion King, where does Mufasa and his family live?",
  choices: ["Rocky Mountain", "Forest", "Desert", "Pride Rock"],
  validAnswer: 3

},
{
  qID: 3,
  question: "In Beauty and the Beast, how many eggs does Gaston eat for    breakfast?",
  choices: ["2 Dozen", "5 Dozen", "5000", "0"],
  validAnswer: 1

}]


var state = {
  correctAnswers: 0,
  incorrectAnswers: 0,
  currentQuestion: -1,
  timeRemaining: 3,
  notRunning: true,



};
var pastQuestArray = [];
var intervalId;
var count= 0;

// ??



function countDown() {
  state.timeRemaining--
  console.log(state.timeRemaining);
  $("#timer").html("Time remaining: " + state.timeRemaining + " seconds");

  if (state.timeRemaining === 0) {
    // $("#q-a-section").empty();
    clearInterval(intervalId);
    alert("Out of time Yo!");
  }
}

function beginTimer() {
  console.log("Begin Timer");

  intervalId = setInterval(countDown, 1000)
  console.log(state.timeRemaining);

  // Timer Starts from 15 sec
};

function showFinalScore(){

};


//Function to select the correct answer. 

function renderQuestions() {
  console.log("Function renderQuestion:")
  
  // beginTimer();
  var currentQuestion= randQuest[count];
  console.log(currentQuestion);

  $("#question").html(currentQuestion.question);
  $("#choice1").html("<div><input type='radio' value=0>"+currentQuestion.choices[0]+ "</div>");
  $("#choice2").html("<div><input type='radio' value=1>"+currentQuestion.choices[1]+ "</div>");
  $("#choice3").html("<div><input type='radio' value=2>"+currentQuestion.choices[2]+ "</div>");
  $("#choice4").html("<div><input type='radio' value=3>"+currentQuestion.choices[3]+ "</div>");


  $("input").on("click", 
  function selectAns() {
    /* If the user clicks the correct choice, then display the image and alert Correct
    Else, alert incorrect and display the image and the correct answer*/
  
    // If state.notRunning is true, then run the following code
    if (!state.notRunning) {
          // Not sure if we need the val()
      value = $("input[type= 'radio']:checked").val();
  
      // if (value== undefined){
      //   $("#message-section").html("Select one of the answers");
      //   $("#message-section").show();
      // }
      // else{
      //   $("#message-section").hide();
  
        if (value === randQuest[count].validAnswer){
          $("#message-section").html("Correct!");
          $("#message-section").show();
          $("#image-section").html()
  
          state.correctAnswers++
          console.log("new Correct answers:"+ state.correctAnswers);
        }
        
        if (value !== randQuest[count].validAnswer){
          $("#message-selection").html("Incorrect!");
          $("#message-selection").show();
  
          state.incorrectAnswers++
          console.log("new incorrect answers:"+ state.incorrectAnswers);
        }
        state.count++
        console.log("new count:"+ state.count++);
  
        if (state.count===randQuest.length){
  
          // If 
          state.notRunning= true;
          showFinalScore();
  
        }
  
        else {
          renderQuestions();
  
        }
  
        // outside of the else first else statement
  
        // Finished selecting the first questions/answer.
  
        // Deciding whether to display the score or go to the next question.
  
  
      }
  
  
    }
  )
  // };
  

  
}


function newGame() {
  state = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: -1,
    timeRemaining: 3,
    // May or may not need Count or notRunning

    count: 0,
    notRunning: false,
  }
  var pastQuestArray = []

  // Do stuff to initiate the game
};

function init() {
  newGame(); // resets the game to the initial state
  // starttimer() // initialize the timer
  renderQuestions();

}

$(document).ready(function () {
  $("#start-game").on("click", function () {
    // Removes the button and initializes function init
    // $(this).hide();
    init();
  })



  // End documennt.ready
});




  /* Pseudo Code

  // 1.) Start the game on hitting start button 
  // 2.) a Question will appear (from a question bank.), with  4 possible answers
  // 3.) Tell the user to select the correct answer
  // 4.) Display the timer of 10 seconds.

  // 5.) 
  //   a.) If the user selects the right answer, display "correct!" (and possible an Image/and or sound), add a score to "correct answer"
  //   b.) If the user selects the wrong answer, then display "Incorrect!", and display "COrrect answer was: "+correct answer, add a score to "incorrect answer"
  //   c.) If the user does not select an answer and runs out of time, display "Out of time!", and display the correct answer, add a score to "ran out of time.

  // 6.) After step 5, move onto the next question automatically.  The previous question dissapears and the next question appears.
  // 7.) Repeat steps 2-6, until the end of the questions....For next app, add a larger question/answer bank and have the app randomize the question/answer

  // 8.) After all questions are finished, display the scores, and create a "start the game" button.

  // Future, create different categories
*/
/* Making a deep copy (object within an array)

var deepCopy= JSON.parse(JSON.stringify(deepArray));

*/
