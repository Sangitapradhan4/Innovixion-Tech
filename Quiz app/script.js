const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const questions = [
	{
		question: 'What is the capital of France?',
		choices: ['Paris', 'London', 'Rome', 'Madrid'],
		answer: 'a'
	},
	{
		question: 'What is the full form og HTML?',
		choices: ['Hyper text markup language', 'Hyper text marking language', 'Hyphenation text markup language', 'Hyphenation test making language'],
		answer: 'a'
	},
    {
		question: 'Yahoo,Infoseek and Lycos are _________',
		choices: ['Search engines', 'Browsers', 'News group', 'None of these'],
		answer: 'a'
	},
    {
		question: 'Java programms are ',
		choices: ['Faster than other', 'Not reusable', 'Platform independent', 'Not scalable'],
		answer: 'c'
	},
    {
		question: 'Who is the president of the United States?',
		choices: ['Donald Trump', 'Joe Biden', 'Barack Obama', 'George Washington'],
		answer: 'b'
	},
    {
    question: 'Java has is its orgin in ',
		choices: ['COBOL', 'C programming language', 'PERRL', 'Oak programming language'],
		answer: 'd'
    },
    {
        question: 'What does "UX" stand for in web design? ',
		choices: ['Universal Experience', 'User Experience', 'User Experties', 'Universal Experties'],
		answer: 'b'
    },
    {
        question: 'Which of the following is not a java features?',
		choices: ['Dynamic', 'Architecture Neutral', 'Use of pointers', 'Object-oriented'],
		answer: 'c'
    },
    {
        question: 'The command javac is used to ',
		choices: ['debug a java program', 'compile a java program', 'Interpret a java program', 'Execute a java program'],
		answer: 'b'
    },
    {
        question: 'what does "UI" stand for in web design?',
		choices: ['Universal interface ', 'User Interaction', 'User Interface', 'User Impact'],
		answer: 'c'
    },

];

let currentQuestion = 0;

function showQuestion() {
	const questionElement = document.getElementById('question');
	const choicesElement = document.getElementById('choices');

	questionElement.textContent = questions[currentQuestion].question;
	choicesElement.innerHTML = '';

	questions[currentQuestion].choices.forEach((choice, index) => {
		const radio = document.createElement('input');
		radio.type = 'radio';
		radio.name = 'answer';
		radio.value = String.fromCharCode(index + 97);

		const label = document.createElement('label');
		label.textContent = choice;
		label.appendChild(radio);

		choicesElement.appendChild(label);
	});
}

function checkAnswer() {
	const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
	const correctAnswer = questions[currentQuestion].answer;

	if (selectedAnswer === correctAnswer) {
		resultsContainer.textContent = 'Correct!';
	} else {
		resultsContainer.textContent = 'Incorrect. The correct answer is ' + questions[currentQuestion].choices[correctAnswer.charCodeAt(0) - 97];
	}

	currentQuestion++;

	if (currentQuestion < questions.length) {
		showQuestion();
	} else {
		submitButton.style.display = 'none';
	}
}

submitButton.addEventListener('click', checkAnswer);

showQuestion();