const mathLibrary = require("./mathLibrary");
const quotesLibrary = require("./quotes");

const app = {};

app.config = {
  timeBetweenQuotes: 1000,
};

app.printQuote = function printQuote() {
  const allQuotes = quotesLibrary.allQuotes();

  const numOfQuotes = allQuotes.length;

  const randomNumber = mathLibrary.getRandomNumbers(1, numOfQuotes);

  const selectedQuotes = allQuotes[randomNumber - 1];

  console.log(selectedQuotes);
};

app.indefiniteLoop = function indefiniteLoop() {
  setInterval(app.printQuote, app.config.timeBetweenQuotes);
};

app.indefiniteLoop();
