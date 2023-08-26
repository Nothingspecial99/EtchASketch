let slider = document.getElementById('slider');
let createGridButton = document.querySelector("#create-grid")
let strokeColor = 'rgb(255, 255, 255)';



function createGrid(){
    let gridContainer = document.querySelector('.grid');
    let currentGridDimension = +slider.value;
    let gridContainerLength = 600;
    let gridCellLength = Math.floor(gridContainerLength/currentGridDimension * 100 -1) / 100;
    let requiredGridCells = currentGridDimension**2;

    let previousGridCells = document.querySelectorAll('.grid-cell');
    previousGridCells.forEach((gridCell) => gridContainer.removeChild(gridCell));




    for (let i = 1; i <=requiredGridCells; i++){
        let gridCell = document.createElement('div');
        gridCell.style.height = `${gridCellLength}px`;
        gridCell.style.width = `${gridCellLength}px`    
        gridCell.style.backgroundColor = "#121212";
        gridCell.classList = 'grid-cell'
        gridContainer.appendChild(gridCell);
    }

}
createGridButton.addEventListener('click', createGrid);


function changeStrokeColor(event){
    colorElement = event.target;
    strokeColor = window.getComputedStyle(colorElement).backgroundColor;

    colorElements = document.querySelectorAll('.color');
    colorElements.forEach((colorElement) => colorElement.classList.remove('selected-color'));

    colorElement.classList.add('selected-color');

}   

let colors = document.querySelectorAll('.color');
colors.forEach((color) => color.addEventListener('click', changeStrokeColor))




//Grid dimension display
function changeGridDimension(){
    let currentDimensionValue = slider.value;
    let gridDimensionDisplay = document.querySelector('#grid-dimension-display');
    gridDimensionDisplay.textContent = `${currentDimensionValue}x${currentDimensionValue}`
}

slider.addEventListener('input', changeGridDimension);



function sliderBackgroundColorChange(event){
    let slider = event.target;
    let sliderCurrentValue = slider.value;
    let sliderCurrentPercentage = (sliderCurrentValue - 16)/84 *100; //Basically (distance between starting of slider and current position /total slider length) * 100
    slider.style.background =  `linear-gradient(90deg, #fff ${sliderCurrentPercentage}%, #a5a5a7 ${sliderCurrentPercentage}%)`;
}

slider.addEventListener('input', sliderBackgroundColorChange);
