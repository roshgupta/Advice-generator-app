const getAdviceButton = document.getElementById("fetch-advice-button");
const adviceId = document.getElementById("advice-id");
const adviceQuote = document.getElementById("advice-quote");
const URL = "https://api.adviceslip.com/advice";

const fetchAdviceFunction = async () => {
  const data = await fetch(URL).then(response => response.json()).catch(error => console.error(error));
  adviceId.innerText = data.slip.id;
  adviceQuote.innerText = data.slip.advice;
}

getAdviceButton.addEventListener("click", fetchAdviceFunction);
fetchAdviceFunction();