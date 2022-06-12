const API_URL = "https://api.adviceslip.com/advice";

function get(url) {
  return fetch(url).then((resp) => resp.json());
}

const API = { get };


function getQuotes() {
  API.get(API_URL).then((data) => addQuote(data));
}

function addQuote(data) {
    let adviceId = data["slip"]["id"];
    let advice = data["slip"]["advice"];
    adviceNumber.innerHTML = adviceId;
    adviceSection.innerHTML = `"${advice}"`
}

let adviceNumber = document.querySelector('#advice-number');
let adviceSection = document.querySelector('#advice-text');

let generatorButton = document.querySelector("#generator-button");
generatorButton.addEventListener("click", getQuotes);

getQuotes();
