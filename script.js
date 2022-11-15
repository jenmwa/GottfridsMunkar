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
    
  }
  

//  LÄGG TILL - KNAPPAR

const addDonutsToCart = document.querySelectorAll('button[data-operator="addDonutsToCart"]');
let addShopCartList = [ ]; // Lista för munkar som ska till varukorgen

for (let i = 0; i < addDonutsToCart.length; i++){
    addDonutsToCart[i].addEventListener('click', findElement);
}


function findElement(e){ // hittar elementen i html och lägger i variabel
let munk = e.currentTarget.parentElement.parentElement.querySelector('.donutInfo');

addDonutsToShopCart(munk);
}


function addDonutsToShopCart(munk){

    let price = munk.querySelector('.price').innerText;
    let img = munk.parentElement.querySelector('.singleDonutImg');
    let name = munk.parentElement.querySelector('.nameInfo').innerText;
    let amount = munk.querySelector('.antal').innerText;
    let totalSum = munk.querySelector('.sum').innerText;
    

const addedItem = {
    _price: price,
    anyName: name,
    _img: img,
    anyAmount: amount,
    _totalSum: totalSum
}

const index = addShopCartList.find(element => element.anyName === name);
//console.log(index);
const newIndex = addShopCartList.indexOf(index);
//console.log(newIndex);

//console.log(index);

    if (newIndex > -1) {

    addShopCartList[newIndex].anyAmount = (Number(addShopCartList[newIndex].anyAmount) + Number(amount));
    
    
    } else {

        addShopCartList.push(addedItem);
        console.log(addShopCartList);
    
    }


/*
if (index > 0) {
    addShopCartList[index].anyAmount + amount;
}else {
    addShopCartList.push(addedItem);
    console.log(addShopCartList);
}*/

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


// THEME TOGGLE
const themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', toggleTheme);

function toggleTheme(){
    themeBtn.classList.toggle('themeBtnMove')
    
    if(themeBtn == document.querySelector('.themeBtnMove')){ // DARK MODE - Till mörkt tema
        document.body.style.backgroundColor = '#302f2a'; // bakgrund
        document.body.style.color = '#f7f6f2'; // textfärg
        document.querySelector('#shopCartColorTheme').style.color = 'white'; // shoppingcart

        let menu = document.querySelectorAll('.menuBtnColorTheme'); // Hamburgarmenyn
        menu.forEach(menu => {
            menu.style.backgroundColor = 'white';
            });
            
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

        let menu = document.querySelectorAll('.menuBtnColorTheme'); // HamnurgarMenyn
        menu.forEach(menu => {
            menu.style.backgroundColor = 'black';
            });
            

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

