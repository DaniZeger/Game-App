// Geting the HTML elements
let colorForm = document.getElementById("colorForm");
let { red, green, blue } = colorForm.elements;
let exmpleTxt = document.getElementById("txt")

let disDiv = document.getElementById("dis");
let bgValue = document.getElementById("bgtxt");
let txtValue = document.getElementById("innertxt")
let innerText = document.getElementById("txt-exmple")

let errDiv = document.getElementById("err");

let txtBtn = document.getElementById("comperBtn")
let clrBtn = document.getElementById("cleanBtn");

// Spaciel variables
let colorArr = [];

class userColor {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

let rgbColor = (r, g, b) => {
  return `rgb(${r}, ${g}, ${b}`;
};


let globFunc = (display = "", exmple = "", text1, text2) => {
  if(red.value === ""|| green.value === ""|| blue.value === ""){
    errDiv.innerHTML = "One or more of the values is missing";

  }else if (red.value > 255 || green.value > 255 || blue.value > 255) {
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
    let color = new userColor(red.value, green.value, blue.value);
    colorArr.push(color);

    red.classList.remove("err-border");
    green.classList.remove("err-border");
    blue.classList.remove("err-border");

    errDiv.innerHTML = "";

    display.style.backgroundColor = rgbColor(
      red.value,
      green.value,
      blue.value
    );
    exmple.style.color = rgbColor(
      red.value,
      green.value,
      blue.value
    );

    text1.innerHTML = `
    <ul>
    <li> <span class="bold"> R: </span> ${red.value} </li>
    <li> <span class="bold"> G: </span> ${green.value} </li>
    <li> <span class="bold"> B: </span> ${blue.value} </li>
    </ul>
    `;
    text2.innerHTML = `
    <ul>
    <li> <span class="bold"> R: </span> ${red.value} </li>
    <li> <span class="bold"> G: </span> ${green.value} </li>
    <li> <span class="bold"> B: </span> ${blue.value} </li>
    </ul>
    `;

    red.value = "";
    green.value = "";
    blue.value = "";
    
    clrBtn.classList.remove("hide");
    let exmpleTxtFunc = () => {
      let txt = exmpleTxt.value
      innerText.innerHTML = txt
    
      if(txt.length <= 20){
        innerText.style.fontSize = "40px"
      }else {
        innerText.style.fontSize = "20px"
      }
    }
  
    exmpleTxtFunc()
  }
  
};


colorForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  globFunc(disDiv, bgValue);
  exmpleTxtFunc()

});

txtBtn.addEventListener("click", (evt)=>{
  evt.preventDefault()
  globFunc()
})



