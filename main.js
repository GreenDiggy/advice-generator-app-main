const AdviceId = document.getElementById("advice-id");
const AdviceString = document.getElementById("advice");
const btn = document.querySelector(".advice-button");

const generateNewQuote = async function() {
    const reqURL = 'https://api.adviceslip.com/advice';
    const req = new Request(reqURL);
    const res = await fetch(req);
    const Quote = await res.json();

    const QuoteID = Quote.slip.id;
    const QuoteContent = Quote.slip.advice;

    AdviceId.textContent = QuoteID;
    AdviceString.textContent = '"' + QuoteContent + '"';
}

btn.addEventListener("click", generateNewQuote);