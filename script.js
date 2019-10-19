console.log("connected");

let bio = document.getElementById("bio");
let projects = document.getElementById("projects");
let consulting = document.getElementById("consulting");
let contact = document.getElementById("contact");
let displayCont = document.getElementsByClassName("displayContent")[0];
let bioHtml = document.getElementsByClassName("bioHtml")[0];

let bars = document.getElementsByClassName("bar");
let barHtml = document.getElementsByClassName("barHtml");

console.log(bars, barHtml.length);

//switchcase for display
function switcher(name) {
  displayCont.innerHTML = name;

  switch (name) {
    case "bio":
      for (let i = 0; i < bars.length; i++) {
        bars[i].classList.remove("fullWidth");

        if (bars[i].id == name) {
          barHtml[i].classList.remove("hidden");
        } else {
          barHtml[i].classList.add("hidden");
        }
      }

      bio.classList.add("fullWidth");

      break;

    case "projects":
      for (let i = 0; i < bars.length; i++) {
        bars[i].classList.remove("fullWidth");
      }
      projects.classList.add("fullWidth");

      break;
    case "consulting":
      for (let i = 0; i < bars.length; i++) {
        bars[i].classList.remove("fullWidth");
      }
      consulting.classList.add("fullWidth");
      break;

    case "contact":
      for (let i = 0; i < bars.length; i++) {
        bars[i].classList.remove("fullWidth");
      }
      contact.classList.add("fullWidth");
      break;
  }
}

//add switcher to each one on click

for (let i = 0; i < bars.length; i++) {
  bars[i].addEventListener("click", e => {
    switcher(e.target.id);
  });
}
