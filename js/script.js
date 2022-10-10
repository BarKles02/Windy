{
    const welcome = () => {
        console.log("Pozdrawiam Klubowiczów. Ten kod jest już w repozytorium .Git");
    }
    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const themeName = document.querySelector(".js-themeName")
        body.classList.toggle("body--darkMode");
        if (body.classList.contains("body--darkMode")) {
            themeName.innerText = "jasny";
        } else {
            themeName.innerText = "ciemny";
        }

    }
    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
}