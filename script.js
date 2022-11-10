
/**
 * Plus --- Minus knappar input
 * 
 *  OM du trycker på knapp(x)
 *      värdet blir en mindre
 * 
 *  OM annars du trycker på knapp(x)
 *      värder blir en mer
 */


//Minus knappar
const minusBtn1 = document.querySelector('#minusBtn1');
const minusBtn2 = document.querySelector('#minusBtn2');
const minusBtn3 = document.querySelector('#minusBtn3');
const minusBtn4 = document.querySelector('#minusBtn4');
const minusBtn5 = document.querySelector('#minusBtn5');
const minusBtn6 = document.querySelector('#minusBtn6');
const minusBtn7 = document.querySelector('#minusBtn7');
const minusBtn8 = document.querySelector('#minusBtn8');
const minusBtn9 = document.querySelector('#minusBtn9');
const minusBtn10 = document.querySelector('#minusBtn10');


//Plus knappar
const plusBtn1 = document.querySelector('#plusBtn1');
const plusBtn2 = document.querySelector('#plusBtn2');
const plusBtn3 = document.querySelector('#plusBtn3');
const plusBtn4 = document.querySelector('#plusBtn4');
const plusBtn5 = document.querySelector('#plusBtn5');
const plusBtn6 = document.querySelector('#plusBtn6');
const plusBtn7 = document.querySelector('#plusBtn7');
const plusBtn8 = document.querySelector('#plusBtn8');
const plusBtn9 = document.querySelector('#plusBtn9');
const plusBtn10 = document.querySelector('#plusBtn10');

// Value
const value1 = document.querySelector('#value1');
const value2 = document.querySelector('#value2');
const value3 = document.querySelector('#value3');
const value4 = document.querySelector('#value4');
const value5 = document.querySelector('#value5');
const value6 = document.querySelector('#value6');
const value7 = document.querySelector('#value7');
const value8 = document.querySelector('#value8');
const value9 = document.querySelector('#value9');
const value10 = document.querySelector('#value10');


// Event för minus
minusBtn1.addEventListener('click', function(){ subtract(minusBtn1); }, false);
minusBtn2.addEventListener('click', function(){ subtract(minusBtn2); }, false);
minusBtn3.addEventListener('click', function(){ subtract(minusBtn3); }, false);
minusBtn4.addEventListener('click', function(){ subtract(minusBtn4); }, false);
minusBtn5.addEventListener('click', function(){ subtract(minusBtn5); }, false);
minusBtn6.addEventListener('click', function(){ subtract(minusBtn6); }, false);
minusBtn7.addEventListener('click', function(){ subtract(minusBtn7); }, false);
minusBtn8.addEventListener('click', function(){ subtract(minusBtn8); }, false);
minusBtn9.addEventListener('click', function(){ subtract(minusBtn9); }, false);
minusBtn10.addEventListener('click', function(){ subtract(minusBtn10); }, false);

// Event för plus
plusBtn1.addEventListener('click', function(){ add(plusBtn1); }, false);
plusBtn2.addEventListener('click', function(){ add(plusBtn2); }, false);
plusBtn3.addEventListener('click', function(){ add(plusBtn3); }, false);
plusBtn4.addEventListener('click', function(){ add(plusBtn4); }, false);
plusBtn5.addEventListener('click', function(){ add(plusBtn5); }, false);
plusBtn6.addEventListener('click', function(){ add(plusBtn6); }, false);
plusBtn7.addEventListener('click', function(){ add(plusBtn7); }, false);
plusBtn8.addEventListener('click', function(){ add(plusBtn8); }, false);
plusBtn9.addEventListener('click', function(){ add(plusBtn9); }, false);
plusBtn10.addEventListener('click', function(){ add(plusBtn10); }, false);


//Funktion för minus
function subtract(x){

if ( x == minusBtn1){
    let = value1;
    value1.value -=1;
}else if ( x == minusBtn2){
    let = value2;
    value2.value -=1;
}else if ( x == minusBtn3){
    let = value3;
    value3.value -=1;
}else if ( x == minusBtn4){
    let = value4;
    value4.value -=1;
}else if ( x == minusBtn5){
    let = value5;
    value5.value -=1;
}else if ( x == minusBtn6){
    let = value6;
    value6.value -=1;
}else if ( x == minusBtn7){
    let = value7;
    value7.value -=1;
}else if ( x == minusBtn8){
    let = value8;
    value8.value -=1;
}else if ( x == minusBtn9){
    let = value9;
    value9.value -=1;
}else if ( x == minusBtn10){
    let = value10;
    value10.value -=1;
}

}

//Funktion för plus
function add(x){

    if ( x == plusBtn1){
        let = value1;
        value1.value = Number(value1.value) +1;
    }else if ( x == plusBtn2){
        let = value2;
        value2.value = Number(value2.value) +1;
    }else if ( x == plusBtn3){
        let = value3;
        value3.value = Number(value3.value) +1;
    }else if ( x == plusBtn4){
        let = value4;
        value4.value = Number(value4.value) +1;
    }else if ( x == plusBtn5){
        let = value5;
        value5.value = Number(value5.value) +1;
    }else if ( x == plusBtn6){
        let = value6;
        value6.value = Number(value6.value) +1;
    }else if ( x == plusBtn7){
        let = value7;
        value7.value = Number(value7.value) +1;
    }else if ( x == plusBtn8){
        let = value8;
        value8.value = Number(value8.value) +1;
    }else if ( x == plusBtn9){
        let = value9;
        value9.value = Number(value9.value) +1;
    }else if ( x == plusBtn10){
        let = value10;
        value10.value = Number(value10.value) +1;
    }
}









