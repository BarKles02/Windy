console.log("Pozdrawiam Klubowiczów. Ten kod jest już w repozytorium .Git");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName")

button.addEventListener("click", () => {
    body.classList.toggle("body--darkMode");
    if (body.classList.contains("body--darkMode")) {
        themeName.innerText = "jasny";
    } else {
        themeName.innerText = "ciemny";
    }

});

