// Katya J Crystal Questions //
// Var with array and object for questions 
var questions = [
    {
        title: "What crystal is best for enhancing psychic abilities and master healing of the body?",
        choices: ["Carnelian", "Clear Quartz", "Lemon Quartz", "Angel Quartz"],
        answer: "Clear Quartz"
    },
    {
        title: "What crystal is most famous for emotional support around loss and grief?",
        choices: ["Carnelian", "Jade", "Lepidolite", "Jasper"],
        answer: "Lepidolite"
    },
    {
        title: "What crystal is best for spiritual healing, wisdom and calmness?",
        choices: ["Malachite", "Agate", "Lepidolite", "Amethyst"],
        answer: "Amethyst"
    },
    {
        title: "What crystal is best for brining greater prosperity, luck and fortune?",
        choices: ["Green Jasper", "Citrine", "Smokey Quartz", "Chalcedony"],
        answer: "Citrine"
    },
    {
        title: "What crystal is best for manifesting love and self-love?",
        choices: ["Amethyst", "Rhodonite", "Rose Quartz", "Pink Chalcedony"],
        answer: "Rose Quartz"
    },
  {
        title: "What crystal is best for transformation and positive change?",
        choices: ["Black Agate", "Rhodonite", "Malachite", "Carnelian"],
        answer: "Malachite"
    },
{
        title: "What crystal is best for soothing self-doubt and bringing inner peace?",
        choices: ["Bloodstone", "Chalcedony", "Aquamarine", "Tigers Eye"],
        answer: "Chalcedony"
    },
{
        title: "What crystal is most famous for soothing inflammation, lowering blood pressure and many other medical benefits?",
        choices: ["Lapis-Lazuli", "Turquoise", "Moonstone", "Ruby"],
        answer: "Lapis-Lazuli"
    },
{
        title: "What crystal is heavily used for healing rituals of the earth chakra and magnifying other crystal vibrations?",
        choices: ["Obsidian", "Citrine", "Moonstone", "Moldavite"],
        answer: "Moldavite"
    },
{
        title: "What crystal is best known for powerful vibrations of protection, willpower, focus and strength?",
        choices: ["Obsidian", "Black Onyx", "Black Chalcedony", "Black Agate"],
        answer: "Black Onyx"
    },

];
// Declared variables
var score = 0;
var questionIndex = 0;

// Start working code 
// Declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");


// Seconds left is 15 seconds per question:
var secondsLeft = 76;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 10;
// Creates new element
var ulCreate = document.createElement("ul");

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    $("#startTime").hide();
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.setAttribute("class", "questionsList");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}
// Event to compare choices with answer
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {

        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        // Correct condition 
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.setAttribute("class", "correct");
            createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
            // Correct condition 
        } else {
            // Will deduct -5 seconds off secondsLeft for wrong answers
            secondsLeft = secondsLeft - penalty;
            createDiv.setAttribute("class", "incorrect");
            createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
        }

    }
    // Question Index determines number question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        // All done will append last page with user stats
        allDone();
        createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);

}
// All done will append last page
function allDone() {
    questionsDiv.innerHTML = "";
    currentTime.innerHTML = "";

    // Heading:
    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsDiv.appendChild(createH1);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    // Calculates time remaining and replaces it with score
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    // Label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";
    questionsDiv.appendChild(createLabel);

    // input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);

    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

           

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Travels to final page
            window.location.replace("./HighScores.html");
        }
    });

}


