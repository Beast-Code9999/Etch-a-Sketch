const colorPicker = document.getElementById('colorPicker').value;
const modeBtn = document.querySelectorAll('.mode button');
const erase = document.querySelector('.erase')
const gridContainer = document.querySelector('.grid-container');
const sliderH1 = document.querySelector('.slider  h1');
const slider = document.querySelector('slider');
const sliderValue = document.getElementById('slider').value;
const checkToggle = document.getElementById('check');
let mode = 'default';


console.log(sliderH1.textContent)
// create a function to update textContent of sliderH1
function updateH1(size) {
    sliderH1.textContent = `${size}x${size}`
}

// create divs inside container
function createDivs() {
    gridContainer.setAttribute('style', `display: grid; grid-template-columns: repeat(${sliderValue}, 1fr)`)
    for(let i = 1; i <= (sliderValue * sliderValue); i++) {
        const div = document.createElement('div');
        gridContainer.appendChild(div);
        updateH1(sliderValue);
    }

}
createDivs()

// listen to slider on click and dynamically change the vlaue of divs * sivs and textContent


// when windows load, give default settings
function createTraitsOnLoad() {
    window.addEventListener('load', () => {
        mode = 'default'
        changeColor('mouseenter');
    })
}

createTraitsOnLoad();

// selecting mode 
function getMode() {
    modeBtn.forEach(button => {
        button.addEventListener('click', () => {
            mode = button.textContent.toLowerCase();
            console.log(mode)
            changeColor('mouseenter');
        })
    })
}

//change color of divs inside container on hover
// function changeColor(){
//     const gridDivs = gridContainer.querySelectorAll('div');
//     gridDivs.forEach(div => {
//         div.addEventListener('mouseenter', function(event) {
//             event.target.style.backgroundColor = 'rgba(173, 173, 173, 0.5)';
//             console.log(event)
//             console.log(div)
//         })
//     })
// }
// changeColor()

function changeColor(type) {
    const gridDiv = gridContainer.querySelectorAll('div');
    gridDiv.forEach(div => {
        div.addEventListener(type, e => {
            if(mode == 'default' || mode == 'classic') {
                e.target.style.backgroundColor = 'gray'
            }
            else if(mode == 'modern') {
                e.target.style.backgroundColor = 'black'
            }
        })
    })
}

getMode()





