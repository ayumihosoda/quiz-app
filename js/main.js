//Questions & Answers
var questions = [
	{
		question: "What color were the slipper in the original Wizard of OZ?",
		answer: "silver"
	},
	{
		question: "What was the first movie ever given the title Blockbuster?",
		answer: "Jaws"
	},
	{
		question: "Which part of body did Charlie Chaplin insure?",
		answer: "feet"
	},
	{
		question: "What prize did Casablanca win in 1943 in the Oscars?",
		answer: "Best film"
	},
	{
		question: "Who played Chewbacca in Star Wars?",
		answer: "Peter Mayhew"
	},
	{
		question: "What was the name of the first James Bond film?",
		answer: "Dr. No"
	},
	{
		question: "Who won the most Academy Awards in acting categories?",
		answer: "Katherine Hepburn"
	}
]
//Loop through each question and show the text

for (i=0; i < questions.length; i++) {
	var question = questions[i].question;
	// get questions from html and store in variable el
	var el = document.getElementById("question" + [i]);
	console.log(question, el);
	// display questions by adding the text
	el.textContent = question;
}

//Once results are submitted
function Results() {
	var correct = 0;
	var incorrect = 0;

	for (i=0; i < questions.length; i++) {
		var answer = questions[i].answer;
		var guess = document.getElementById("answer" + [i]).value
		var questionSpot = document.getElementById("question" + [i])
		if (answer == guess) {
			questionSpot.className = "correct";
			correct++;
		} else {
			questionSpot.className = "incorrect";
			incorrect++;
		};
	};

  document.getElementById('correct').textContent = correct;
  document.getElementById('incorrect').textContent = incorrect;

}