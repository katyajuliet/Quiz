
// //Section list
// var quizSection = document.querySelectorAll("quizSection");

// //Start
// var startBtn = document.getElementById("startBtn");

// //Quiz questions
// var quizQuestions = document.getElementById("quizQuestions");
// var timeRemaining = document.getElementById("timeRemaining");
// var question = document.getElementById("question");
// var choices = document.getElementById("choices");
// var choiceStatus = document.querySelectorAll("choiceStatus");
// var correct = document.getElementById("correct");
// var wrong = document.getElementById("wrong");

// //End
// var endSection= document.getElementById("end");
// var endTitle = document.getElementById("endTitle");
// var score = document.getElementById("score");
// var initialsInput = document.getElementById("initialsInput");
// var submitScore = document.getElementById("submitScore");
// var errorMessage = document.getElementById("errorMessage");


// var question = document.getElementById('question');
// var choices = Array.from(document.getElementsByClassName('questionList'));
// var progressText = document.getElementById('progressText');
// var scoreText = document.getElementById('score');
// var progressBarFull = document.getElementById('progressBarFull');
// var loader = document.getElementById('loader');
// var play = document.getElementById('play');
// let currentQuestion = {};
// let acceptingAnswers = false;
// let score = 0;
// let questionCounter = 0;

// class question {
//     constructor (question, choices, indexOfCorrectChoice) {
//       this.question = question;
//       this.choices = choices;
//       this.indexOfCorrectChoice = indexOfCorrectChoice;
//     }
//   }

// var question_1 = new question("What crystal is best for enhancing psychic abilities and master healing of the body?", 
// ["Carnelian", "Clear Quartz", "Lemon Quartz", "Angel Quartz"], 1);
// var question_2 = new question("What crystal is most famous for emotional support around loss and grief?", 
// ["Carnelian", "Jade", "Lepidolite", "Jasper"], 2);
// var question_3 = new question("What crystal is best for spiritual healing, wisdom and calmness?", 
// ["Malachite", "Agate", "Lepidolite", "Amethyst"], 3);
// var question_4 = new question("What crystal is best for brining greater prosperity, luck and fortune?", 
// ["Green Jasper", "Citrine", "Smokey Quartz", "Chalcedony"], 1);
// var question_5 = new question("What crystal is best for manifesting love and self-love?", 
// ["Amethyst", "Rhodonite", "Rose Quartz", "Pink Chalcedony"], 2);
// var question_6 = new question("What crystal is best for transformation and positive change?", 
// ["Black Agate", "Rhodonite", "Malachite", "Carnelian"], 2);
// var question_7 = new question("What crystal is best for soothing self-doubt and bringing inner peace?", 
// ["Bloodstone", "Chalcedony", "Aquamarine", "Tigers Eye"], 1);
// var question_8 = new question("What crystal is most famous for soothing inflammation, lowering blood pressure and many other medical benefits?", 
// ["Lapis-Lazuli", "Turquoise", "Moonstone", "Ruby"], 0);
// var question_9 = new question("What crystal is heavily used for healing rituals of the earth chakra and magnifying other cystal vibrations?", 
// ["Obsidian", "Citrine", "Moonstone", "Moldavite"], 3);
// var question_10 = new question("What crystal is heavily used for healing rituals of the earth chakra and magnifying other cystal vibrations?", 
// ["Obsidian", "Black Onyx", "Black Chalcedony", "Black Agate"], 1);

// var questionList = [question_1, question_2, question_3, question_4, question_5, quesiton_6, question_7, question_8, question_9, question_10];

// let questionList = 0;
// let totalTime = 75;
// let totalTimeInterval;
// let choiceStatusTimeout; 

// // Event Listeners // 
// startBtn.addEventListener('click', startGame);
// choices.addEventListener('click', processChoice);
// submitScore.addEventListener('submit', processInput);

// // Start Game //
// function startGame() {
//         showElement(questionList);
        
//         displayTime();  
//         displayQuestion();
      
//         startTimer();
//       }

//       //Show / hide // 
// function showElement(siblingList, showElement) {
//     for (element of siblingList) {
//       hideElement(element);
//     }
//     showElement.classList.remove("hidden");
//   } 
  
//   function hideElement(element) {
//     if (!element.classList.contains("hidden")) {
//       element.classList.add("hidden");
//     }
//   }
  
//   // Time // 
//   function displayTime() {
//    timeRemaining.textContent = totalTime;
//   }
  
//   function startTimer() {
//     totalTimeInterval = setInterval(function() {
//       totalTime--;
//       displayTime();
//       checkTime();
  
//     }, 1000);
//   }
  
//   function checkTime() {
//     if (totalTime <= 0) {
//       totalTime = 0;
//       endGame();
//     }
//   }

  
//   //when user answers a question
//   function processChoice(event) {
//     const userChoice = parseInt(event.target.parentElement.dataset.index);
  
//     resetChoiceStatusEffects();
//     checkChoice(userChoice);
//     getNextQuestion();
//   }
  
//   //Displaying choice statuses
//   function resetChoiceStatusEffects() {
//     clearTimeout(choiceStatusTimeout);
//     styleTimeRemainingDefault();
//   }
  
//   function styleTimeRemainingDefault() {
//     timeRemaining.style.color = "#4616E8";
//   }
  
//   function styleTimeRemainingWrong() {
//     timeRemaining.style.color = "#E81648";
//   }
  
//   function checkChoice(userChoice) {
//     if (isChoiceCorrect(userChoice)) {
//       displayCorrectChoiceEffects();
//     } else {
//       displayWrongChoiceEffects();
//     }
//   }
  
//   function isChoiceCorrect(choice) {
//     return choice === QUESTION_LIST[currentQuestion].indexOfCorrectChoice;
//   }
  
//   function displayWrongChoiceEffects() {
//     deductTimeBy(10);
  
//     styleTimeRemainingWrong();
//     showElement(CHOICE_STATUSES, WRONG);
  
//     choiceStatusTimeout = setTimeout(function() {
//       hideElement(WRONG);
//       styleTimeRemainingDefault();
//     }, 1000);
//   }
  
//   function deductTimeBy(seconds) {
//     totalTime -= seconds;
//     checkTime();
//     displayTime();
//   }
  
//   function displayCorrectChoiceEffects() {
//     showElement(CHOICE_STATUSES, CORRECT);
  
//     choiceStatusTimeout = setTimeout(function() {
//       hideElement(CORRECT);
//     }, 1000);
//   }
  
//   //Get next question
//   function getNextQuestion() {
//     currentQuestion++;
//     if (currentQuestion >= questionList.length) {
//       endGame();
//     } else {
//       displayQuestion();
//     }
//   }
  
//   /******** ENDING THE GAME ********/ 
//   function endGame() {
//     clearInterval(totalTimeInterval);
    
//     showElement(quizSection, endSection);
//     displayScore();
//     setEndHeading();
//   }
  
//   function displayScore() {
//     score.textContent = totalTime;
//   }
  
//   function setEndHeading() {
//     if (totalTime === 0) {
//       END_TITLE.textContent = "Sorry! time out!";
//     } else {
//       END_TITLE.textContent = "Congrats! Your done!";
//     }
//   }
  
//   /******** SUBMITTING INITIALS ********/ 
//   function processInput(event) {
//     event.preventDefault();
  
//     const initials = initialsInput.value.toUpperCase();
  
//     if (isInputValid(initials)) {
//       const score = totalTime;
//       const highscoreEntry = getNewHighscoreEntry(initials, score);
//       saveHighscoreEntry(highscoreEntry);
//       window.location.href= "./highscores.html";
//     }
//   }
  
//   function getNewHighscoreEntry(initials, score) {
//     const entry = {
//       initials: initials,
//       score: score,
//     }
//     return entry;
//   }
  
//   function isInputValid(initials) {
//     let errorMessage = "";
//     if (initials === "") {
//       errorMessage = "You can't submit empty initials!";
//       displayFormError(errorMessage);
//       return false;
//     } else if (initials.match(/[^a-z]/ig)) {
//       errorMessage = "Initials may only include letters."
//       displayFormError(errorMessage);
//       return false;
//     } else {
//       return true;
//     }
//   }
  
//   function displayFormError(errorMessage) {
//     errorMessage.textContent = errorMessage;
//     if (!initialsInput.classList.contains("error")) {
//       InitialsInput.classList.add("error");
//     }
//   }
  
//   function saveHighscoreEntry(highscoreEntry) {
//     const currentScores = getScoreList();
//     placeEntryInHighscoreList(highscoreEntry, currentScores);
//     localStorage.setItem('scoreList', JSON.stringify(currentScores));
//   }
  
//   function getScoreList() {
//     const currentScores = localStorage.getItem('scoreList');
//     if (currentScores) {
//       return JSON.parse(currentScores);
//     } else {
//       return [];
//     }
//   }
  
//   function placeEntryInHighscoreList(newEntry, scoreList) {
//     const newScoreIndex = getNewScoreIndex(newEntry, scoreList);
//     scoreList.splice(newScoreIndex, 0, newEntry);
//   }
  
//   function getNewScoreIndex(newEntry, scoreList) {
//     if (scoreList.length > 0) {
//       for (let i = 0; i < scoreList.length; i++) {
//         if (scoreList[i].score <= newEntry.score) {
//           return i;
//         }
//       } 
//     }
//     return scoreList.length;
//   }
  









const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];

fetch(
    'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
)
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map((loadedQuestion) => {
            const formattedQuestion = {
                question: loadedQuestion.question,
            };

            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(
                formattedQuestion.answer - 1,
                0,
                loadedQuestion.correct_answer
            );

            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice;
            });

            return formattedQuestion;
        });

        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    game.classList.remove('hidden');
    loader.classList.add('hidden');
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};
