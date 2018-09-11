
// Function for time out



// Before Starting: 
// Create a question/answer bank, indicating the correct answer for each question and all variables.
var questAnsArray = [{
  qID: 0,
  question: "In Aladdin, what is the name of Jasmine's pet tiger?",
  choices: ["Rajah", "Bo", "Iago", "Jack"],
  images: ["../images/Rajah.gif"],
  validAnswer: 0
},
{
  qID: 1,
  question: "In Peter Pan, Captain Hook had a hook on which part of his     body?",
  choices: ["Right Foot", "Left Hand", "Left Foot", "Right Hand"],
  images: ["../images/Rajah.gif"],

  validAnswer: 1

},

{
  qID: 2,
  question: "In the Lion King, where does Mufasa and his family live?",
  choices: ["Rocky Mountain", "Forest", "Desert", "Pride Rock"],
  images: ["../images/Rajah.gif"],
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
  count: 0,
  running: false,



};
var pastQuestArray = [],
// ??



function counter() {
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

  intervalId = setInterval(counter, 1000)
  console.log(state.timeRemaining);





  // Timer Starts from 15 sec
};

function nextQuestion() {
  var randQuest = questAnsArray[Math.floor(Math.random() * questAnsArray.length)];
  beginTimer();
  console.log("next question fucntion called: " + randQuest.question);
  // Make sure the questions don't repeat.
  var i;
  for (i = 0, i <)

    $("#question").html(randQuest.question);
  $("#choice1").html("1:" + randQuest.choices[0]);
  $("#choice2").html("2:" + randQuest.choices[1]);
  $("#choice3").html("3:" + randQuest.choices[2]);
  $("#choice4").html("4:" + randQuest.choices[3]);

  // Display scores
  // Display Reset game Button

  pastQuestArray.push(randQuest.qID);
  console.log(pastQuestArray);
  console.log(questAnsArray);
  // Display a random question
  rightChoice = randQuest.choices[randQuest.validAnswer];

}


//Function to select the correct answer. 
function selectAns() {
  /* If the user clicks the correct choice, then display the image and alert Correct
  Else, alert incorrect and display the image and the correct answer*/

  return null;
};

function renderQuestions() {
  // Begin timer as soon as 
  beginTimer();

  var randQuest = questAnsArray[Math.floor(Math.random() * questAnsArray.length)];

  $("#question").html(randQuest.question);
  $("#choice1").html("1:" + randQuest.choices[0]);
  $("#choice2").html("2:" + randQuest.choices[1]);
  $("#choice3").html("3:" + randQuest.choices[2]);
  $("#choice4").html("4:" + randQuest.choices[3]);

  // Display scores
  // Display Reset game Button

  pastQuestArray.push(randQuest.qID);
  console.log(pastQuestArray);
  console.log(questAnsArray);
  // Display a random question
  rightChoice = randQuest.choices[randQuest.validAnswer];
}


function newGame() {
  var state = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentQuestion: -1,
    timeRemaining: 3,
    // May or may not need Count or running
    count: 0,
    running: false,
  }
  var pastQuestArray = [],

  // Do stuff to initiate the game
}

function init() {
  newGame(); // resets the game to the initial state
  // starttimer() // initialize the timer
  renderQuestions();
  selectAns();
  nextQuestion();

}

$(document).ready(function () {
  $("#start-game").on("click", function () {
    // Removes the button and initializes function init
    // $(this).remove();
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
