const lidiv = document.querySelectorAll(".li");
const planetName = document.querySelectorAll(".planet-name");
const types = document.querySelectorAll(".types");


// fetch data 
const title = document.querySelector(".h3");

const url = "data.json";
async function getAdvice(number) {
  const res = await fetch(url);
  const data = await res.json();
  const name = data[number].name;
  title.innerHTML = name;
}
let hasRun = false;
// set defaults
function runCodeOnce() {
  if (!hasRun) {
    planetName[0].classList = "planet-name white";
    types[0].classList = "types bottom-border";
    hasRun = true;
    getAdvice(0)
  }
}

runCodeOnce();

// choose types
for (let i = 0; i < types.length; i++) {
  types[i].addEventListener("click", () => {
    if (types[i].classList.contains("bottom-border")) {
    } else {
      types[i].classList = "types bottom-border";
    }
    for (let k = 0; k < types.length; k++) {
      if (
        types[k].classList.contains("bottom-border") &&
        types[k] !== types[i]
      ) {
        types[k].classList = "types";
      }
    }
  });
}

// burger open and close
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
  toggleBurger();
});

// choose planets
for (let i = 0; i < lidiv.length; i++) {
  lidiv[i].addEventListener("click", () => {
    if (planetName[i].classList.contains("white")) {
    } else {
      planetName[i].classList = "planet-name white";
      getAdvice(i)
    }
    for (let k = 0; k < planetName.length; k++) {
      if (
        planetName[k].classList.contains("white") &&
        planetName[k] !== planetName[i]
      ) {
        planetName[k].classList = "planet-name";
      }
    }
  });
}
