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
    
        // Ett objekt och anger key-values till objektet från munkarna
    const addedItem = {
        anyPrice: price,
        anyName: name,
        anyImg: img,
        anyAmount: amount,
        anySum: totalSum
    }

    if(amount == 0){  // Om antal är 0 - gör ingenting
        return;
    }else{ // om antal är annat än 0 = gör nedanstående

        // Jämför om namnet på munken redan finns i listan och hittar och skriver objektet till index-variabel
        const index = addShopCartList.find(element => element.anyName === name); 

        // Letar upp vilket index i listan som variablen index ligger på och lägger det i newIndex
        const newIndex = addShopCartList.indexOf(index);

                    // OM newIndex är större än -1  ( om objektet med samma namn redan finns)
             if (newIndex > -1){
                    //ta antal munkar i objektet i listan plussa på antal munkar i objektet med samma namn som läggs till i listan.
                let totalAmount = addShopCartList[newIndex].anyAmount = (Number(addShopCartList[newIndex].anyAmount) + Number(amount));

                    // om du har beställt mer än 10 munkar av samma sort får du 10% rabatt på totala summan
                if(totalAmount > 10){
                    
                    addShopCartList[newIndex].anySum = Math.round((Number(addShopCartList[newIndex].anySum) + Number(totalSum)) * 0.9); 

                }else{
                    //ta totala summan  i objektet i listan plussa på summan i objektet med samma namn som läggs till i listan.
                    addShopCartList[newIndex].anySum = (Number(addShopCartList[newIndex].anySum) + Number(totalSum));
                  
                }
                 

                            
                    
                

             }else{ // ANNARS - lägg till i varukorgen
                addShopCartList.push(addedItem);
                }


                
        
        clearValues(munk,amount,totalSum);
        console.log(addShopCartList);
    }
}   // Funktion som raderar valda antal och summa munkar när knappen trycks på 
    function clearValues(munk, amount, totalSum){
        munk.querySelector('.antal').innerText = 0;
        munk.querySelector('.sum').innerText = 0 ;

        
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

/*
// THEME TOGGLE
const themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', toggleTheme);
*/
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
    if (getId == 'debitKredit' && e.target.checked) {
        isDebitKredit = true;
    } else if (getId == 'debitKredit' && !e.target.checked) {
        isDebitKredit = false;
    }
    if (getId == 'invoice' && e.target.checked) {
        isInvoice = true;
    } else if (getId == 'invoice' && !e.target.checked) {
        isInvoice = false;
    }
    if (getId == 'gdpr' && e.target.checked) {
        isGdpr = true;
    } else if (getId == 'gdpr' && !e.target.checked) {
        isGdpr = false;
    }
    
    checkFormValid();
}

function checkFormValid() {
    const submitBtn = document.querySelector('#submit');

    if(isFirstname && isLastname && isAdress && isZipcode && isCity && isTelephone && isEmail && (isDebitKredit || isInvoice) && isGdpr) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}
