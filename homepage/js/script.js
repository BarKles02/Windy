console.log("Smacznej kawusi wiadomo co, wiadomo kogo");

let cialo = document.querySelector(".cialo");
let przycisk = document.querySelector(".przycisk");

przycisk.addEventListener("click", () => {
    cialo.classList.toggle("ciemnyMotyw");

})