const colorPicker = document.getElementById('colorPicker').value;
const modeBtn = document.querySelectorAll('.mode button');
const erase = document.querySelector('.erase')
const gridContainer = document.querySelector('.grid-container');
const sliderH1 = document.querySelector('.slider  h1');
const slider = document.getElementById('slider').value;
const checkToggle = document.getElementById('check');


console.log(sliderH1.textContent)
// create a function to update textContent of sliderH1
function updateH1(size) {
    sliderH1.textContent = `${size}x${size}`
}

// create divs inside container
function createDivs() {
    for(let i = 1; i <= (slider * slider); i++) {
        const div = document.createElement('div');
        gridContainer.appendChild(div);
    }
}

createDivs()

//write a function to create divs
function createDiv() {

}


