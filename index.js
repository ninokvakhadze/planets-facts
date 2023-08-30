const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

function toggleBurger() {
  if (nav.classList.contains("open")) {
    nav.className = "nav";
  } else {
    nav.className = "nav open";
  }
}
burger.addEventListener("click", () => {
  toggleBurger()
});
