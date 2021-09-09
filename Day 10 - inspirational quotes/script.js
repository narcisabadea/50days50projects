const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");

const getQuotes = async () => {
  const res = await fetch("https://type.fit/api/quotes");
  const data = await res.json();
  getRandomQuote = Math.floor(Math.random() * data.length) + 1;
  quote.innerHTML = data[getRandomQuote].text;
  author.innerHTML = `- ${data[getRandomQuote].author}`;
};

getQuotes();

btn.addEventListener("click", getQuotes);
