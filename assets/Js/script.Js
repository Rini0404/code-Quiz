var times; 
var timeLeft = 70; 

var timerInterval; 
var score = 0;
var index = 0; 
var questionIndex = 0; 
var acttiveTime = document.getElementById('time');
var questionsEl = document.getElementById('questions');
var questionBody = document.getElementById('questionBody'); 
var starts  = document.getElementById('startB');
var questionDiv = document.getElementById('choicesUl');
console.log(starts);
var myQuestions = [
  { 
    title: "What devil fruit did Monkey D. Luffy accidently eat?",
    choices: ["Op Op Fruit", "Gumo Gumo Fruit", "Flame-Flame fruit"], 
    answer: "Gumo Gumo Fruit",

  },

  {

    title: "What is Roronoa. Zoro's famous fighting style?",
    choices:["Fish-man Karate", "Black Leg Style", "Three Sword Style"],
    answer:"Three Sword Style", 

  },
  {

    title: "What is the name of the famous pirate group that Luffy, Zoro, Chopper, Sanji, Brook, Nami, Robin, Franky, Usopp, and Jinbe are in?" ,
    coices:["The Red Hair Pirates", "The Straw Hat Pirates", "The Heart Pirates" ],
    answer:"The Straw Hat Pirates", 

  },
  {

    title: "How did Red Haired Shanks loose his arm?",
    coices:["Bit off by a shark", "Cut off in a sword battle", "When tortured"],
    answer:"Bit off by a shark", 

  },
]

function startGame () {
  
  times = setInterval(function(){
    document.getElementById('timeLeft').innerHTML = timeLeft;
    timeLeft --; //deduct the time, and start the game counter
    timeLeft.textContent = timeLeft; 
        if (timeLeft <= 0) {
          clearInterval(times);
          
          finishGame();
          
        } 
        console.log(times)
  }, 1000); 
  continueGame();
}

// to clear all local data, for score calculation
function clearScore() {
  localStorage.setItem('scoreName', ""); 
  localStorage.setItem('bestScore', ""); 
      gameResets(); // after cleared, game resets. 
}


// add a funtion to show end game results and display. 
function finishGame () {
  clearInterval(times); // clear the time. no more count 

}

function gameResets() {
  clearInterval(times); // clear the time
  document.getElementById('timeLeft').innerHTML = timeLeft; 
  // set all vars to 0 or null to do full reset. 
  timeLeft = 0;
  score = 0;
  questionIndex = 0; 
  times = null;
document.getElementById('quizBody').innerHTML = 'quizBody';
}

function continueGame() {
  questionIndex ++; //loops
  if(questionIndex > myQuestions.length - 1){
    finishGame();
    console.log(quizBody);
    return; 
  }
    var quizBody = myQuestions[questionIndex].title;
  console.log(quizBody);
    // add the buttons as choices 
    var userQuestion = myQuestions[questionIndex].title; 
    var userChoices = myQuestions[questionIndex].choices;
    questionDiv.textContent = userQuestion; 

  console.log(userChoices);
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem; 
    questionDiv.appendChild(listItem);
})  
}

  // we need to add html in Js to open up the start of the quiz. 
  // store local functions 
  function addScores(){ 
    localStorage.setItem('bestScore', score ); 
    localStorage.setItem('scoreName', document.getElementById('names')); 
    grabResults(); 
  }

// correct/ wrong 

function wrong () { 
  timeLeft -= 10; 
  continueGame();
}

function correct() {
  continueGame();
}

starts.addEventListener("click", startGame)