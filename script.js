//KUNDKORG öppna - stäng
/*När klicka på kundkorg
    kundkorg öppnas
klick utanför
    kundkorg stängs */

    const shoppingCart =document.querySelector('#shoppingCart');
    const sectionShoppingCart = document.querySelector('#sectionShoppingCart');
    
    shoppingCart.addEventListener('click', toggleMenuOpenState);
    sectionShoppingCart.addEventListener('click', toggleMenuOpenState);
    
    function toggleMenuOpenState() {
    sectionShoppingCart.classList.toggle('open');
    }


let addShopCartList = [ ]; // Lista för munkar som ska till varukorgen

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
const donutInfo = e.currentTarget.parentElement.parentElement.querySelector('.donutInfo');

if(addShopCartList.indexOf(donutInfo) == -1){
    addShopCartList.push(donutInfo);
}
console.log(addShopCartList);
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
const invoiceRadio = document.querySelector('#invoice');
const cardPayment = document.querySelector('.cardPayment');
const fakturaPayment = document.querySelector('.fakturaPayment');

cardRadio.addEventListener('change', cardPaymentOpen);
invoiceRadio.addEventListener('change', fakturaPaymentOpen);

function cardPaymentOpen(e) {
    if(cardRadio.checked) {
        cardPayment.classList.add("paymentOpen");
        fakturaPayment.classList.remove("paymentOpen");
    }
    
}
function fakturaPaymentOpen(e) {
    if(invoiceRadio.checked) {
        fakturaPayment.classList.add("paymentOpen");
        cardPayment.classList.remove("paymentOpen");
    }
}


// THEME TOGGLE
const themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', toggleTheme);

function toggleTheme(){
    themeBtn.classList.toggle('themeBtnMove')
    
    if(themeBtn == document.querySelector('.themeBtnMove')){ // DARK MODE - Till mörkt tema
        document.body.style.backgroundColor = '#302f2a'; // bakgrund
        document.body.style.color = '#f7f6f2'; // textfärg
        document.querySelector('#shopCartColorTheme').style.color = 'white'; // shoppingcart

        let header = document.querySelectorAll('.headerColorTheme'); // Header och footer
        header.forEach(header => {
            header.style.backgroundColor = '#572525';
            });

        let links = document.querySelectorAll('.allColorTheme'); // All textinnehåll med denna class
            links.forEach(link => {
            link.style.color = 'white';
            });

        let productCard = document.querySelectorAll('.productCard'); // Alla kategorier med denna class
            productCard.forEach(card => {
            card.style.backgroundColor = '#4b5947';
            });

        let munk = document.querySelectorAll('.munk'); // Alla produktkort med denna class
            munk.forEach(donut => {
            donut.style.backgroundColor = '#839183';
            });
    }
    else if(themeBtn != document.querySelector('.themeBtnMove')){ // LIGHT MODE - tillbaka till original
        document.body.style.backgroundColor = '#FBF2CF'; // bakgrundsfärg 
        document.body.style.color = 'black'; // Textfärg
        document.querySelector('#shopCartColorTheme').style.color = 'black'; // shoppingcart

        links = document.querySelectorAll('.allColorTheme'); // Ändrar färg till svart på allt med classen
            links.forEach(link => {
            link.style.color = 'black';
            });
            
        header = document.querySelectorAll('.headerColorTheme'); // Header och footer
            header.forEach(header => {
            header.style.backgroundColor = '#FA7070';
            });
            
        productCard = document.querySelectorAll('.productCard'); // Alla produktkort med denna class
            productCard.forEach(card => {
            card.style.backgroundColor = '#A1C298';
            });

        munk = document.querySelectorAll('.munk'); // Alla produktkort med denna class
            munk.forEach(donut => {
            donut.style.backgroundColor = '#C6EBC5';
            });
}

}

// VALIDERING AV FORMULÄR

const formOrderInputs = Array.from(document.querySelector('.formOrder').querySelectorAll('input'));

for (let i = 0; i < formOrderInputs.length; i++) {
    formOrderInputs[i].addEventListener('change', checkInputNotEmpty);
}

let isFirstname = false;
let isLastname = false;
let isAdress = false;
let isZipcode = false;
let isCity = false;
let isTelephone = false;
let isEmail = false;
let isDebitKredit = false;
let isInvoice = false;
let isGdpr = false;

function checkInputNotEmpty(e) {
    
    const getId = e.target.id;
    const getValue = e.target.value;
    
    if (getId == 'firstname' && getValue !== '') {
        isFirstname = true;
    } else if (getId == 'firstname' && getValue == '') {
        isFirstname = false;
    }
    if (getId == 'lastname' && getValue !== '') {
        isLastname = true;
    } else if (getId == 'lastname' && getValue == '') {
        isLastname = false;
    }
    if (getId == 'adress' && getValue !== '') {
        isAdress = true;
    } else if (getId == 'adress' && getValue == '') {
        isAdress = false;
    }
    if (getId == 'zipcode' && getValue !== '') {
        isZipcode = true;
    } else if (getId == 'zipcode' && getValue == '') {
        isZipcode = false;
    }
    if (getId == 'city' && getValue !== '') {
        isCity = true;
    } else if (getId == 'city' && getValue == '') {
        isCity = false;
    }
    if (getId == 'telephone' && getValue !== '') {
        isTelephone = true;
    } else if (getId == 'telephone' && getValue == '') {
        isTelephone = false;
    }
    if (getId == 'email' && getValue !== '') {
        isEmail = true;
    } else if (getId == 'email' && getValue == '') {
        isEmail = false;
    }
    if (getId == 'debitKredit' && getValue !== '') {
        isDebitKredit = true;
    } else if (getId == 'debitKredit' && getValue == '') {
        isDebitKredit = false;
    }
    if (getId == 'invoice' && getValue !== '') {
        isInvoice = true;
    } else if (getId == 'invoice' && getValue == '') {
        isInvoice = false;
    }
    if (getId == 'gdpr' && getValue !== '') {
        isGdpr = true;
    } else if (getId == 'gdpr' && getValue == '') {
        isGdpr = false;
    }
    
    checkFormValid();
    console.log(isEmail);
}

function checkFormValid() {
    const submitBtn = document.querySelector('#submit');

    if(isFirstname && isLastname && isAdress && isZipcode && isCity && isTelephone && isEmail && (isDebitKredit || isInvoice) && isGdpr) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}
