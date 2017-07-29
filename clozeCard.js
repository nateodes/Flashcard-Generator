
var inquirer = require("inquirer");

var clozeCard = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
  		
};

module.exports = clozeCard;


var question1 = new clozeCard("A movie about a custodian (Dave Chappelle) and his friends trying to sell weed in NYC to bail his friend out of jail?\n", "Half Baked");

var question2 = new clozeCard("Harry Potter and the Philosopher's Stone was released in ... ?\n", "2001");

var question3 = new clozeCard("I am a film released in 2000 in which Guy Pierce plays a man suffering short term memory loss. What is my one word title ... ?\n", "Memento");

var question4 = new clozeCard("I am a film producer, director and screenwriter specialising in comedies. My movies include : Knocked Up, Superbad, Step Brothers, Pineapple Express and Funny People. Who am I ... ?\n", "Judd Apatow");

var question5 = new clozeCard("Name the capital city of Virginia, U.S.A.\n", "Richmond");

var question6 = new clozeCard("In the opening scene of The Big Lebowski, the Dude wrote a check for the amount of 69 cents. What item did he purchase with it?\n", "Milk");

function runGame () {

inquirer.prompt([

    {
      type: "input",
      message: question1.text,
      name: "answer1"
    },
    {
      type: "input",
      message: question2.text,
      name: "answer2"
      
    },
    
    {
      type: "input",
      message: question3.text,
      name: "answer3"
    },
    {
      type: "input",
      message: question4.text,
      name: "answer4"
      
    },
    
    {
      type: "input",
      message: question5.text,
      name: "answer5"
    },
    
    {
      type: "input",
      message: question6.text,
      name: "answer6"
      
    }
  ])
  .then(function(response) {

  	var score = 0;

    	if (response.answer1 === question1.cloze) {
    		score++;
    		console.log("Question 1 is correct")
    	}

    	if (response.answer2 === question2.cloze) {
    		score++;
    		console.log("Question 2 is correct");

    	}

    	 if (response.answer3 === question3.cloze) {
    		score++;
    		console.log("Question 3 is correct");

    	}

    	 if (response.answer4 === question4.cloze) {
    		score++;
    		console.log("Question 4 is correct");

    	}

    	 if (response.answer5 === question5.cloze) {
    		score++;
    		console.log("Question 5 is correct");

    	}

    	 if (response.answer6 === question6.cloze) {
    		score++;
    		console.log("Question 6 is correct");

    	}

    	else {
    		console.log("You got this many correct: " + score);
    	}

    	console.log("You got this many correct: " + score);

    	inquirer.prompt([
    
    {
      type: "confirm",
      message: "Do you want to play again?",
      name: "confirm",
      default: true
    },
    	]).then(function(response) {
    		if (response.confirm) {
    			runGame();
    		}

    		else {
    			console.log("Game is over, go have a beer")
    		}
  });

})};

runGame();