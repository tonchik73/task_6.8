const trafficLightl = document.querySelector('#trafficLight1');
const trafficLight2 = document.querySelector('#trafficLight2');
const trafficLight3 = document.querySelector('#trafficLight3');
const trafficLight = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLight1.style.background = ('green');
    trafficLight.removeEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeBlack1);
};

function makeYellow() {
    trafficLight2.style.background = ('yellow');
    trafficLight.removeEventListener('click', makeYellow);
    trafficLight.addEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeBlack2);
};

function makeRed() {
    trafficLight3.style.background = ('red');
    trafficLight.removeEventListener('click', makeRed);
    trafficLight.addEventListener('click', makeGreen);
    trafficLight.addEventListener('click', makeBlack3);
};

function makeBlack1() {
    trafficLightl.style.background = ('black');
};

function makeBlack2() {
    trafficLight2.style.background = ('black');
};

function makeBlack3() {
    trafficLight3.style.background = ('black');
};

trafficLight.addEventListener('click', makeGreen);