const title = document.querySelector(".quote-id");
const quote = document.querySelector(".quote");
const button = document.querySelector(".icon");

async function getAdvice() {
	const baseURL = "https://api.adviceslip.com/advice/";
	let rand = Math.floor(Math.random() * 225);

	try {
		const response = await fetch(baseURL + rand);
		const data = await response.json();
		return [data.slip.id, data.slip.advice];
	} catch (e) {
		console.log("Error: " + e);
		return ["-1", "Could not find advice...try again"];
	}
}

function showAdvice() {
	// show users that their input has been registered
	title.innerHTML = "Loading";
	quote.innerHTML = "...";

	getAdvice().then(([id, advice]) => {
		title.innerHTML = "Advice #" + id;
		quote.innerHTML = advice;
	});
}

document.addEventListener("DOMContentLoaded", showAdvice);
button.addEventListener("click", showAdvice);
