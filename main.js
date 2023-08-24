let slider = document.getElementById('slider');
let currentGridDimension = slider.value;



function createGrid(){
    let gridContainer = document.querySelector('.grid');
    let gridCellLength = 600/currentGridDimension;
    
    for (let i = 1; i <=currentGridDimension; i++){
        let gridCell = document.createElement('div');
        gridCell.style.height = `${gridCellLength}`
    }
}




function sliderBackgroundColorChange(event){
    let slider = event.target;
    let sliderCurrentValue = slider.value;
    let sliderCurrentPercentage = (sliderCurrentValue - 16)/84 *100; //Basically (distance between starting of slider and current position /total slider length) * 100
    slider.style.background =  `linear-gradient(90deg, #fff ${sliderCurrentPercentage}%, #a5a5a7 ${sliderCurrentPercentage}%)`;
}

slider.addEventListener('mousemove', sliderBackgroundColorChange);