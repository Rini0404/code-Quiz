var playB = document.getElementById("#startB"); 
var init = document.getElementById("#initials"); 
document.getElementById("#results")
var questionBox = document.getElementById("questionsCon")



var index = 0;
var timerId; 
var copyQuestions = []; 

var myQuestions = [
  { 
    question: "What devil fruit did Monkey D. Luffy accidently eat?",
    choices: ["Op Op Fruit", "Gumo Gumo Fruit", "Flame-Flame fruit"], 
    answer: "Gumo Gumo Fruit",

  },

  {

    question: "What is Roronoa. Zoro's famous fighting style?",
    choices:["Fish-man Karate", "Black Leg Style", "Three Sword Style"],
    answer:"Three Sword Style", 

  },
  {

    question: "What is the name of the famous pirate group that Luffy, Zoro, Chopper, Sanji, Brook, Nami, Robin, Franky, Usopp, and Jinbe are in?" ,
    coices:["The Red Hair Pirates", "The Straw Hat Pirates", "The Heart Pirates" ],
    answer:"The Straw Hat Pirates", 

  },
  {

    question: "How did Red Haired Shanks loose his arm?",
    coices:["Bit off by a shark", "Cut off in a sword battle", "When tortured"],
    answer:"Bit off by a shark", 

  },
]

// function to begin the Quiz
function startGame () { 
  var startGameEl = document.getElementById("startB")
  // lets me hide the starting screen when I accept to start the quiz
  playB.classList.add("hide")
  questionBox.classList.remove("hide")
  // storage for user choices. 
  
}


function questionGrab () {
  var postedQs = myQuestions[index]; 
  postedQs.forEach(() => {
    copyQuestions.push(); 
    console.log(questionGrab); 
  });
}


// when ready submit, show results 
// then add initials 
// startB.addEventListener("click", startGame);
// submitButton.addEventListener("click", showResults); 