const colorPicker = document.getElementById('colorPicker').value;
const modeBtn = document.querySelectorAll('.mode button');
const erase = document.querySelector('.erase')
const gridContainer = document.querySelector('.grid-container');
const sliderH1 = document.querySelector('.slider  h1');
const slider = document.querySelector('.slider');
const sliderValue = document.getElementById('slider').value;
const checkToggle = document.getElementById('check');
let mode = 'default';


console.log(sliderH1.textContent)
// create a function to update textContent of sliderH1
function updateH1(size) {
    sliderH1.textContent = `${size}x${size}`
}

// create divs inside container
function createDivs(value) {
    gridContainer.setAttribute('style', `display: grid; grid-template-columns: repeat(${value}, 1fr)`)
    for(let i = 1; i <= (value * value); i++) {
        const div = document.createElement('div');
        gridContainer.appendChild(div);
        updateH1(value);
    }

}

// listen to slider on click and dynamically change the vlaue of divs * sivs and textContent
function updateSlider() {
    slider.addEventListener('change', (e) => {
        gridContainer.innerHTML = '';
        createDivs(e.target.value);
        mode = 'default'
        changeColor('mouseenter', mode)
    })
}

updateSlider();

// when windows load, give default settings
function createTraitsOnLoad() {
    window.addEventListener('load', () => {
        mode = 'classic'
        createDivs(sliderValue)
        changeColor('mouseenter', mode);
        
    })
}

// select color



// selecting mode 
function getMode() {
    modeBtn.forEach(button => {
        button.addEventListener('click', () => {
            mode = button.textContent.toLowerCase();
            changeColor('mouseenter', mode);
        })
    })
}

// make a random color
function randomColor() {
    let maxValue = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxValue; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

function changeColor(type, modeColor) {
    const gridDiv = gridContainer.querySelectorAll('div');
    gridDiv.forEach(div => {
        div.addEventListener(type, e => {
            if(modeColor == 'default' || modeColor == 'classic') {
                e.target.style.backgroundColor = 'gray'
            }
            else if(modeColor == 'modern') {
                e.target.style.backgroundColor = 'black'
            }
            else {
                e.target.style.backgroundColor = randomColor();
            }
        })
    })
}

getMode()


function start() {
    createTraitsOnLoad();
}

start()




