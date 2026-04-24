document.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    var link = event.target.querySelector("a");
    if (link) {
      window.location.href = store.html(link.getAttribute("href"));