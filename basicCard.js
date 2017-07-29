

// Constructor function for creating CastMember objects
var basicCard = function(front, back) {
  this.front = front;
  this.back = back;
  
  
  
};
// Exporting our CastMember constructor. We will require it in clozeCard.js
module.exports = basicCard;


var firstPresident = new basicCard("Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

