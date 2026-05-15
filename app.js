const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

const quotes = [
  "Probably the best guitars a man could ever play - Jimi Hendrix",
  "If it doesn’t sing, it doesn’t deserve to be played - Jimmy Page",
  "Tone is just truth amplified - Eric Clapton",
  "You don’t control the guitar, you negotiate with it - Eddie Van Halen",
  "Every guitar has a story, you just have to listen - Stevie Ray Vaughan"
];

let index = 0;

const quoteText = document.getElementById("quoteText");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

if (quoteText && nextBtn && prevBtn) {
  function showQuote(newIndex) {
    quoteText.classList.add("fade");

    setTimeout(() => {
      index = newIndex;
      quoteText.textContent = quotes[index];
      quoteText.classList.remove("fade");
    }, 300);
  }

  nextBtn.addEventListener("click", () => {
    showQuote((index + 1) % quotes.length);
  });

  prevBtn.addEventListener("click", () => {
    showQuote((index - 1 + quotes.length) % quotes.length);
  });

  setInterval(() => {
    showQuote((index + 1) % quotes.length);
  }, 7000);

  quoteText.textContent = quotes[0];
}


function go(id, page) {
  const el = document.getElementById(id);
  if (!el) return;

  el.addEventListener("click", () => {
    window.location.href = page;
  });
}

go("homeBtn", "/index.html");
go("storeBtn", "/store.html");
go("aboutBtn", "/about.html");
go("contactBtn", "/contact.html");