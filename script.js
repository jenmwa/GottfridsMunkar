
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
  
    let sum = donutSinglePrice * orderedAmount;
  
    donutElement.querySelector('.sum').innerHTML = sum;
    
   // addDonutsToShopCart(sum, orderedAmount, donutSinglePrice);

  }
  

  /**
   * [] När vi trycker på lägg till
   * [] ska, pris, antal och totalsumma gå till varukorgen
   */

//  LÄGG TILL - KNAPPAR

const addDonutsToCart = document.querySelectorAll('button[data-operator="addDonutsToCart"]');


for (let i = 0; i < addDonutsToCart.length; i++){
    addDonutsToCart[i].addEventListener('click', addDonutsToShopCart);
    
}

function addDonutsToShopCart(e){

        // Kommer åt pris, antal och summa när vi trycker på lägg till
const donoutSinglePrice = e.currentTarget.parentElement.querySelector('.price').innerHTML;
const totalAmount = e.currentTarget.parentElement.querySelector('.antal').innerHTML;
const totalSum = e.currentTarget.parentElement.querySelector('.sum').innerHTML;
    
        // Hämtar namnet på Donuten
const donutName = e.currentTarget.parentElement.parentElement.querySelector('.priceInfo');
        // Hämtar Img på donut i html
const donutImg = e.currentTarget.parentElement.parentElement.querySelector('.donutImg');
   
    console.log(donutImg, donutName);


}

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

// VALIDERING AV FORMULÄR

const fornamn = document.querySelector('#fornamn');
const efternamn = document.querySelector('#efternamn');
const adress = document.querySelector('#adress');
const postnummer = document.querySelector('#postnummer');
const postort = document.querySelector('#postort');
const telefon = document.querySelector('#telefon');
const epost = document.querySelector('#epost');
const debitKredit = document.querySelector('#debitKredit');
const faktura = document.querySelector('#faktura');
const gdpr = document.querySelector('#gdpr');

fornamn.addEventListener('change', checkInputNotEmpty);
efternamn.addEventListener('change', checkInputNotEmpty);
adress.addEventListener('change', checkInputNotEmpty);
postnummer.addEventListener('change', checkInputNotEmpty);
postort.addEventListener('change', checkInputNotEmpty);
telefon.addEventListener('change', checkInputNotEmpty);
epost.addEventListener('change', checkInputNotEmpty);
debitKredit.addEventListener('change', checkInputNotEmpty);
faktura.addEventListener('change', checkInputNotEmpty);
gdpr.addEventListener('change', checkInputNotEmpty);

function checkInputNotEmpty(e) {
    console.log(e.target.value);
    if(e.target.value !== '') {
        console.log(true);
    } else {
        console.log(false);
    }
}

/*
if (fornamn.value.length > 0 && efternamn.value.length > 0 && adress.value.length > 0 && postnummer.value > 0);
*/

