
/**
 * Plus --- Minus knappar input
 * 
 *  OM du trycker på knapp(x)
 *      värdet blir en mindre
 * 
 *  OM annars du trycker på knapp(x)
 *      värder blir en mer
*/


//                    plusknappar

const plusBtn = document.querySelectorAll('button[data-operator="plus"]');

for (let i = 0; i < plusBtn.length; i++){
    plusBtn[i].addEventListener('click', addCount);
}

function addCount(e) {
    const amountEl = e.currentTarget.parentElement.querySelector('.antal');
    let amount = amountEl.innerText;

    amountEl.innerHTML = Number(amount) +1;

    updateDonutSum(e.currentTarget.parentElement);
}


//                Minusknappar
const minusBtn = document.querySelectorAll('button[data-operator="minus"]');

for (let i = 0; i < minusBtn.length; i++){
    minusBtn[i].addEventListener('click', decreaseCount);
}

function decreaseCount(e) {
    const amountEl = e.currentTarget.parentElement.querySelector('.antal');
    console.log(amountEl);
    let amount = amountEl.innerText;

    if(amount -  1 < 0){
        return;
    }
    amountEl.innerHTML = amount -1;

    updateDonutSum(e.currentTarget.parentElement);
}


// uppdatera summan

function updateDonutSum(donutElement) {
    const donutSinglePrice = donutElement.querySelector('.price').innerHTML;
    const orderedAmount = donutElement.querySelector('.antal').innerHTML;
  
    const sum = donutSinglePrice * orderedAmount;
  
    donutElement.querySelector('.sum').innerHTML = sum;
  }
  






