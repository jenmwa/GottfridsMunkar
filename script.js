

/**
 * Plus --- Minus knappar input
 * 
 * när klickar på minus 
 * värdet blir en mindre
 * 
 * när klickar på plus 
 * värdet blir en mer 
 */

const minus = document.querySelector('#minusBtn');
const plus  = document.querySelector('#plusBtn');
const currentCount = document.querySelector('#value');



minus.addEventListener('click', subtract);
plus.addEventListener('click', add);

function subtract(){
    currentCount.value -= 1;
    value.style.backgroundColor ='lightgrey';
}

function add(){
    currentCount.value = Number(currentCount.value) + 1;
    value.style.backgroundColor ='lightgrey';
}
