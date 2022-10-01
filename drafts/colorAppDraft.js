let click = 0;

//Buttons Elements
let colorForm = document.getElementById("colorForm");
let randColor = document.getElementById("random");
let compareBtn = document.getElementById("compare");
let clearBtnA = document.getElementById("clearBtnA");

//Color div Elements
let resA = document.getElementById("resolt-a");
let valA = document.getElementById("color-a-value");
let resB = document.getElementById("resolt-b");
let valB = document.getElementById("color-b-value");
let fav = document.querySelector("#fav-list");

//Saved colors Elements
let colorNameFormA = document.getElementById("save-colorA");
let userColorNameA = document.getElementById("myColorA");

let colorArr = [];

// Create a color by inputs
colorForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let { red, green, blue } = colorForm.elements;

  resA.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  valA.innerHTML = `
  <ul>
  <li><span class="bold">R:</span> ${red.value}</li>
  <li><span class="bold">G:</span> ${green.value}</li>
  <li><span class="bold">B:</span> ${blue.value}</li>
  </ul>
  `;

  colorNameFormA.classList.remove("hide");
  compareBtn.classList.remove("hide");
});

// Create a random color
randColor.addEventListener("click", (evt) => {
  click++;
  evt.preventDefault();

  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  resB.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  valB.innerHTML = `
    <ul>
    <li><span class="bold">R:</span> ${r}</li>
    <li><span class="bold">G:</span> ${g}</li>
    <li><span class="bold">B:</span> ${b}</li>
    </ul>
    `;
  colorNameFormA.classList.remove("hide");

  red.value = r;
  green.value = g;
  blue.value = b;
});

// Comper between two colors
compareBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  let { red, green, blue } = colorForm.elements;

  resB.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  valB.innerHTML = `
  <ul>
  <li><span class="bold">R:</span> ${red.value}</li>
  <li><span class="bold">G:</span> ${green.value}</li>
  <li><span class="bold">B:</span> ${blue.value}</li>
  </ul>
  `;
});

// Save color
class colorObj {
  constructor(name, r, g, b) {
    this.name = name;
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

colorNameFormA.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let colorNameA = new colorObj(
    userColorNameA.value,
    red.value,
    green.value,
    blue.value
  );

  colorArr.push(colorNameA);

  // Add seved color to a list

  fav.innerHTML += `
    <ul class="fav-color" onclick="display()">
    <li style="background-color: rgb(${colorNameA.r}, ${colorNameA.g}, ${colorNameA.b});"></li>
    <li><span class="bold">R:</span> ${colorNameA.r}</li>
    <li><span class="bold">G:</span> ${colorNameA.g}</li>
    <li><span class="bold">B:</span> ${colorNameA.b}</li>
    <li><span class="bold">Name:</span> ${colorNameA.name}</li>
    </ul>
    `;

  userColorNameA.value = "";
});

// Clear colors
clearBtnA.addEventListener("click", () => {
  resA.style.backgroundColor = `inherit`;
  resB.style.backgroundColor = `inherit`;
  valA.innerHTML = `
  <ul>
  <li><span class="bold">R:</span></li>
  <li><span class="bold">G:</span></li>
  <li><span class="bold">B:</span></li>
  </ul>
  `;

  red.value = "";
  green.value = "";
  blue.value = "";
});
