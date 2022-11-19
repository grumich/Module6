const trafficLightEl = document.querySelector("#trafficLight");

function makeGreen() {
  trafficLightEl.style.background = "green";
  trafficLightEl.removeEventListener("click", makeGreen);
  trafficLightEl.addEventListener("click", makeYellow);
}
function makeYellow() {
  trafficLightEl.style.background = "yellow";
  trafficLightEl.removeEventListener("click", makeYellow);
  trafficLightEl.addEventListener("click", makeRed);
}
function makeRed() {
  trafficLightEl.style.background = "red";
  trafficLightEl.removeEventListener("click", makeRed);
  trafficLightEl.addEventListener("click", makeGreen);
}
trafficLightEl.addEventListener("click", makeGreen);



const trafficLightEl1 = document.querySelector("#trafficLight1");
const trafficLightEl2 = document.querySelector("#trafficLight2");
const trafficLightEl3 = document.querySelector("#trafficLight3");

function makeGreen1() {
  trafficLightEl1.style.background = "green";
  trafficLightEl2.style.background = "black";
  trafficLightEl3.style.background = "black";
}
function makeYellow1() {
  trafficLightEl2.style.background = "yellow";
  trafficLightEl1.style.background = "black";
  trafficLightEl3.style.background = "black";
}
function makeRed1() {
  trafficLightEl3.style.background = "red";
  trafficLightEl1.style.background = "black";
  trafficLightEl2.style.background = "black";
}
trafficLightEl1.addEventListener("click", makeGreen1);
trafficLightEl2.addEventListener("click", makeYellow1);
trafficLightEl3.addEventListener("click", makeRed1);