const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let intervalId;
let timeLeft = 60 * 60 * 24; // 24 hours in seconds

function updateTimer() {
	const days = Math.floor(timeLeft / 60 / 60 / 24);
	const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
	const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
	const seconds = Math.floor(timeLeft % 60);

	timer.innerHTML = `
		<div>${days}<span>days</span></div>
		<div>${hours}<span>hours</span></div>
		<div>${minutes}<span>minutes</span></div>
		<div>${seconds}<span>seconds</span></div>
	`;
}

function startTimer() {
	intervalId = setInterval(() => {
		timeLeft--;
		if (timeLeft < 0) {
			clearInterval(intervalId);
			return;
		}
		updateTimer();
	}, 1000);
}

function stopTimer() {
	clearInterval(intervalId);
}

function resetTimer() {
	timeLeft = 60 * 60 * 24;
	updateTimer();
}

start.addEventListener('click', startTimer);
Stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);

updateTimer();