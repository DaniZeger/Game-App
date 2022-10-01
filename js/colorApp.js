// Geting the HTML elements
let colorForm = document.getElementById("colorForm");
let { red, green, blue } = colorForm.elements;
let disDivOne = document.getElementById("dis1");
let disDivTwo = document.getElementById("dis2");
let errDiv = document.getElementById("err");
let textDivOne = document.getElementById("dis1txt");
let textDivTwo = document.getElementById("dis2txt");

let cmprBtn = document.getElementById("comperBtn");
let clrBtn = document.getElementById("cleanBtn");

let rgbColor = (r, g, b) => {
  return `rgb(${r}, ${g}, ${b}`;
};

let globFunc = (display, text) => {
  if (red.value > 255 || green.value > 255 || blue.value > 255) {
    errDiv.innerHTML = "One or more of the values is too high";

    let r =
      red.value > 255
        ? red.classList.add("err-border")
        : red.classList.remove("err-border");
    let g =
      green.value > 255
        ? green.classList.add("err-border")
        : green.classList.remove("err-border");
    let b =
      blue.value > 255
        ? blue.classList.add("err-border")
        : blue.classList.remove("err-border");
  } else {
    red.classList.remove("err-border");
    green.classList.remove("err-border");
    blue.classList.remove("err-border");

    errDiv.innerHTML = "";

    display.style.backgroundColor = rgbColor(
      red.value,
      green.value,
      blue.value
    );

    text.innerHTML = `
    <li> <span class="bold"> R: </span> ${red.value} </li>
    <li> <span class="bold"> G: </span> ${green.value} </li>
    <li> <span class="bold"> B: </span> ${blue.value} </li>
    `;

    red.value = "";
    green.value = "";
    blue.value = "";

    cmprBtn.classList.remove("hide");
    clrBtn.classList.remove("hide");
  }
};

colorForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  globFunc(disDivOne, textDivOne);
});

cmprBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  globFunc(disDivTwo, textDivTwo);
});

clrBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  disDivOne.style.backgroundColor = "inherit";
  disDivTwo.style.backgroundColor = "inherit";
  textDivOne.innerHTML = "";
  textDivTwo.innerHTML = "";
});
