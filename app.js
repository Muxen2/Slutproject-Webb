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

/* NAV BUTTONS  */

const homeBtn = document.getElementById("homeBtn");
const storeBtn = document.getElementById("storeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const contactBtn = document.getElementById("contactBtn");

if (homeBtn) {
  homeBtn.addEventListener("click", function () {
    window.location.href = "index.html";
  });
}

if (storeBtn) {
  storeBtn.addEventListener("click", function () {
    window.location.href = "store.html";
  });
}

if (aboutBtn) {
  aboutBtn.addEventListener("click", function () {
    window.location.href = "about.html";
  });
}

if (contactBtn) {
  contactBtn.addEventListener("click", function () {
    window.location.href = "contact.html";
  });
}

/* CART SYSTEM */

const cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartPanel = document.getElementById("cartPanel");

const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");

const clearBtn = document.getElementById("clearBtn");
const checkoutBtn = document.getElementById("checkoutBtn");

if (cartBtn && cartPanel) {
  cartBtn.addEventListener("click", () => {
    cartPanel.classList.toggle("hidden");
  });
}

if (cartItemsEl && cartTotalEl) {
  document.querySelectorAll(".product-card").forEach((card) => {
    const btn = card.querySelector("button");

    btn.addEventListener("click", () => {
      const name = card.querySelector("h3").innerText;
      const priceText = card.querySelector("p").innerText;
      const price = parsePrice(priceText);

      const existing = cart.find(item => item.name === name);

      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ name, price, qty: 1 });
      }

      updateCart();
    });
  });
}

function parsePrice(text) {
  const match = text.match(/[\d.]+/);
  let value = match ? parseFloat(match[0]) : 0;

  if (text.toLowerCase().includes("million")) {
    value *= 1000000;
  }

  return value;
}

function updateCart() {
  if (!cartItemsEl || !cartTotalEl) return;

  cartItemsEl.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <span>${item.name}</span>

      <div class="qty-controls">
        <button onclick="decreaseQty(${index})">-</button>
        <span>${item.qty}</span>
        <button onclick="increaseQty(${index})">+</button>
      </div>

      <span>$${(item.price * item.qty).toLocaleString()}</span>
    `;

    cartItemsEl.appendChild(div);
  });

  cartTotalEl.innerText = total.toLocaleString();
}

function increaseQty(index) {
  cart[index].qty++;
  updateCart();
}

function decreaseQty(index) {
  cart[index].qty--;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  updateCart();
}

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    cart.length = 0;
    updateCart();
  });
}

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    alert("Checkout does not exist yet:)");
  });
}