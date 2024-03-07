// var form = document.getElementById('sheetdb-form');
// form.addEventListener("submit", e => {
//   e.preventDefault();
//   fetch(form.action, {
//     method: "POST",
//     body: new FormData(document.getElementById("sheetdb-form")),
//   }).then(
//     response => response.json()
//   ).then((html) => {
//     // you can put any JS code here
//     window.location.href = "index.html";
//   });
// });

var form = document.getElementById('sheetdb-form');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  }).then(
    response => response.json()
  ).then((html) => {
    // Toon de pop-up
    document.getElementById("customPopup").style.display = "block";
    document.querySelector(".formulier").style.opacity = "0.5";

    // Wacht 3 seconden voordat je naar de indexpagina gaat
    setTimeout(function() {
      window.location.href = "index.html";
    }, 3000);
  });
});

// Zorg ervoor dat de pop-up verdwijnt wanneer je van pagina wisselt
window.addEventListener("beforeunload", function() {
  document.getElementById("customPopup").style.display = "none";
  document.querySelector(".formulier").style.opacity = "1";

});