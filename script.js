
//                 PLUSKNAPPAR - PRODUKTKORT

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
//              MINUSKNAPPAR - PRODUKTKORT
const minusBtn = document.querySelectorAll('button[data-operator="minus"]');

for (let i = 0; i < minusBtn.length; i++){
    minusBtn[i].addEventListener('click', decreaseCount);
}

function decreaseCount(e) {
    const amountEl = e.currentTarget.parentElement.querySelector('.antal');
    let amount = amountEl.innerText;

    if(amount -  1 < 0){
        return;
    }
    amountEl.innerHTML = amount -1;

    updateDonutSum(e.currentTarget.parentElement);
    
}

//  UPPDATERA SUMMAN PRODUKTKORT

function updateDonutSum(donutElement) {
    const donutSinglePrice = donutElement.querySelector('.price').innerHTML;
    const orderedAmount = donutElement.querySelector('.antal').innerHTML;
  
    let sum = donutSinglePrice * orderedAmount;
        // OM mer än 10 av varje st 10% rabatt
    if(orderedAmount > 10){
        sum = sum * 0.9;
    }
    donutElement.querySelector('.sum').innerHTML = Math.round(sum);
    
   addDonutsToShopCart(sum, orderedAmount, donutSinglePrice);

  }
  
//  LÄGG TILL - KNAPPAR

const addDonutsToCart = document.querySelectorAll('button[data-operator="addDonutsToCart"]');


for (let i = 0; i < addDonutsToCart.length; i++){
    addDonutsToCart[i].addEventListener('click', addDonutsToShopCart);
    
}

function addDonutsToShopCart(e){

        // Kommer åt pris, antal och summa när vi trycker på lägg till
const donutSinglePrice = e.currentTarget.parentElement.querySelector('.price').innerHTML;
const totalAmount = e.currentTarget.parentElement.querySelector('.antal').innerHTML;
const totalSum = e.currentTarget.parentElement.querySelector('.sum').innerHTML;
    
        // Hämtar namnet på Donuten
const donutName = e.currentTarget.parentElement.parentElement.querySelector('.priceInfo').innerText;
        // Hämtar Img på donut i html
const donutImg = e.currentTarget.parentElement.parentElement.querySelector('.singleDonutImg').innerHTML;
   
    console.log(donutImg, donutName, donutSinglePrice, totalAmount, totalSum);


}


// LÄGG TILL OBJEKTET I VARUKORGEN





// ÖPPNA STÄNGA BESTÄLLNINGSFORMULÄR

const formOpenBtn = document.querySelector('.checkoutButton');
const formOrder = document.querySelector('.formOrder')
const formCloseBtn = document.querySelector('.formCloseBtn');

formOpenBtn.addEventListener('click', formOrderOpen)
formCloseBtn.addEventListener('click', formOrderClose)

function formOrderOpen() {
    formOrder.classList.add("formOrderOpen");
    formCloseBtn.classList.add("formCloseBtnOpen");
}

function formOrderClose() {
    formOrder.classList.remove("formOrderOpen");
    formCloseBtn.classList.remove("formCloseBtnOpen");
}

// ÖPPNA STÄNGA KORT OCH FAKTURAALTERNATIV

const cardRadio = document.querySelector('#debitKredit');
const fakturaRadio = document.querySelector('#faktura');
const cardPayment = document.querySelector('.cardPayment');
const fakturaPayment = document.querySelector('.fakturaPayment');

cardRadio.addEventListener('change', cardPaymentOpen);
fakturaRadio.addEventListener('change', fakturaPaymentOpen);

function cardPaymentOpen(e) {
    if(cardRadio.checked) {
        cardPayment.classList.add("paymentOpen");
        fakturaPayment.classList.remove("paymentOpen");
    }
    
}
function fakturaPaymentOpen(e) {
    if(fakturaRadio.checked) {
        fakturaPayment.classList.add("paymentOpen");
        cardPayment.classList.remove("paymentOpen");
    }
}
