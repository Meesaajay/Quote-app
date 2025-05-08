let allQuotes = [
    {
      msg: "Stay hungry, stay foolish.",
      who: "Steve Jobs"
    },
    {
      msg: "Believe in yourself and all that you are.",
      who: "Unknown"
    },
    {
      msg: "Push yourself, because no one else is going to do it for you.",
      who: "Unknown"
    },
    {
      msg: "Great things never come from comfort zones.",
      who: "Unknown"
    },
    {
      msg: "Dream it. Wish it. Do it.",
      who: "Unknown"
    }
  ];
  
  let quoteText = document.getElementById("quote-text");
  let quoteWriter = document.getElementById("quote-writer");
  let button = document.getElementById("btn");
  
  function getNewQuote() {
    let num = Math.floor(Math.random() * allQuotes.length);
    let quoteNow = allQuotes[num];
  
    quoteText.textContent = `"${quoteNow.msg}"`;
    quoteWriter.textContent = `– ${quoteNow.who}`;
  
    document.querySelector(".box").style.animation = "none";
    void document.querySelector(".box").offsetWidth; 
    document.querySelector(".box").style.animation = "fade 0.5s ease";
  }
  
  button.addEventListener("click", getNewQuote);
  
  getNewQuote(); 
  