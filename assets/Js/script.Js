var times; 
var timeLeft = 70; 

var timerInterval; 
var score = 0;
var index = 0; 
var onQuestion = 0; 
var acttiveTime = document.getElementById('time');
var questionBody = document.getElementById('questionBody'); 
var starts  = document.getElementById('startB');
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
  document.getElementById('timeLeft').innerHTML = timeLeft;
  times = setInterval(function(){
    timeLeft --; //deduct the time, and start the game counter
      document.getElementById('timeLeft').innerHTML = timeLeft; // for html 
        if (timeLeft <= 0) {
          clearInterval(times);
          finishGame();
          
        } 
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
  document.getElementById('quizBody').innerHTML = quizBody; 
  var quizBody = 
  `<main id="lastScore">
    <div container class="results">
      <h2>Finished!</h2>
      <p>Your score was: '${score}'</p>
      <p>Enter your Name:<span placeholder="Input here" id="name"></span></p> 
    </div>
  </main>`

}

function gameResets() {
  clearInterval(times); // clear the time
  document.getElementById('timeLeft').innerHTML = timeLeft; 
  // set all vars to 0 or null to do full reset. 
  timeLeft = 0;
  score = 0;
  onQuestion = 0; 
  times = null;

  var quizBody = 
  `<main id="start">
    <h1 style="text-align: center;">Hello! Welcome to my Quiz!</h1>
      <h3 style = "text-align: center; ">Simple answer these questions, you will be asked a series of questions and you must answer them to your best ability</h3>
      <h5 style = "text-align: center;">Good Luck!</h5>
      <button type = "button" onClick = "startGame">Start Game.</button>
  </main>`
document.getElementById('quizBody').innerHTML = 'quizBody';
}

function continueGame() {
  onQuestion ++; //loops
  if(onQuestion > myQuestions.length - 1){
    finishGame(); 
    return; 
  }
    var quizBody = `<h2> ${myQuestions[onQuestion]}.title</h2>`
    // add the buttons as choices 
  for (var loops = 0; loops < myQuestions[onQuestion].length; loops++) {
    var btnCs = "<button onClick =\"[answer]\">[choice]</button>"
    btnCs = btnCs.replace("[choice]", myQuestions[onQuestion].options[loops]);
    if (myQuestions[onQuestion].options[loops] == myQuestions[onQuestion].answer) { 
      btnCs = btnCs.replace("[answer]", "correct()");

    }else { 
      btnCs = btnCs.replace("[answer]","wrong()");
    }
    quizBody += btnCs; 
  }


  document.getElementById('quizBody').innerHTML = quizBody; 
}

  // we need to add html in Js to open up the start of the quiz. 
  // store local functions 
  function addScores(){ 
    localStorage.setItem('bestScore', score ); 
    localStorage.setItem('scoreName', document.getElementById('names')); 
    grabResults(); 
  }

  function grabScores(){
    document.getElementById('quizBody').innerHtml = quizBody; 
    var quizBody = 
    `<main id="highScores"> 
      <h2>Top scores</h2>
      <h2> + localStorage.getItem('bestScore') + </h2>
      <h1>  + localStorage.getItem('scoreName') + </h1>

      <button class = "again" onClick = "restartGame()">Again</button>
      <button class = "clear" onClick = "resetScore">Reset Score</button>
      </main>`
    
  
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