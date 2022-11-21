let addShopCartList = []; // Lista för munkar som ska till varukorgen
//console.log([addShopCartList])

//  VARUKORG - öppnas/stängs

const shoppingCart = document.querySelector('#shoppingCart');
const sectionShoppingCart = document.querySelector('#sectionShoppingCart');
const shoppingClose = document.querySelector('.shoppingAction');

shoppingCart.addEventListener('click', toggleShoppingCartOpenState);
shoppingClose.addEventListener('click', toggleShoppingCartOpenState);

function toggleShoppingCartOpenState() {
  sectionShoppingCart.classList.toggle('open');
}

//                 PLUSKNAPPAR - PRODUKTKORT

const plusBtn = document.querySelectorAll('button[data-operator="plus"]');

for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener('click', addCount);
}

function addCount(e) {
  const amountEl = e.currentTarget.parentElement.querySelector('.antal');
  let amount = amountEl.innerText;

  amountEl.innerHTML = Number(amount) + 1;

  updateDonutSum(e.currentTarget.parentElement);
}

//              MINUSKNAPPAR - PRODUKTKORT
const minusBtn = document.querySelectorAll('button[data-operator="minus"]');

for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener('click', decreaseCount);
}

function decreaseCount(e) {
  const amountEl = e.currentTarget.parentElement.querySelector('.antal');
  let amount = amountEl.innerText;

  if (amount - 1 < 0) {
    return;
  }
  amountEl.innerHTML = amount - 1;

  updateDonutSum(e.currentTarget.parentElement);
}

//  UPPDATERA SUMMAN PRODUKTKORT
function updateDonutSum(donutElement) {
  const donutSinglePrice = donutElement.querySelector('.price').innerHTML;
  const orderedAmount = donutElement.querySelector('.antal').innerHTML;

  let sum = donutSinglePrice * orderedAmount;

  if (orderedAmount > 10) {
    // OM mer än 10 av varje st 10% rabatt
    sum = sum * 0.9;
  }
  donutElement.querySelector('.sum').innerHTML = Math.round(sum);
}

//  LÄGG TILL - KNAPPAR
const addDonutsToCart = document.querySelectorAll('button[data-operator="addDonutsToCart"]');

for (let i = 0; i < addDonutsToCart.length; i++) {
  addDonutsToCart[i].addEventListener('click', findElement);
}

function findElement(e) {
  // hittar elementen i html och lägger i variabel
  let munk = e.currentTarget.parentElement.parentElement.querySelector('.donutInfo');

  addDonutsToShopCart(munk);
}

function addDonutsToShopCart(munk) {
  let price = munk.querySelector('.price').innerText;
  let img = munk.parentElement.querySelector('.singleDonutImg');
  let name = munk.parentElement.querySelector('.nameInfo').innerText;
  let amount = munk.querySelector('.antal').innerText;
  let totalSum = munk.querySelector('.sum').innerText;
  let amountChoosen = document.querySelector('#amountChoosen');
  let sumAmount = amountChoosen.innerText;
  let shoppingCartTotalItems = document.querySelector('#shoppingCartTotalItems');
  let shoppingCartItemSum = shoppingCartTotalItems.innerText;
  let shoppingCartTotalAmount = document.querySelector('#shoppingCartTotalAmount');
  let shoppingCartAmountSum = shoppingCartTotalAmount.innerText;

  const addedItem = {
    // Ett objekt och anger key-values till objektet från munkarna
    anyPrice: price,
    anyName: name,
    anyImg: img,
    anyAmount: amount,
    anySum: totalSum,
        
  };

  if (amount == 0) {
    // Om antal är 0 - gör ingenting
    return;
  } else {
    // om antal är annat än 0 = gör nedanstående
    const index = addShopCartList.findIndex(element => element.anyName === name); // Letar upp vilket index i listan som variablen index ligger på och lägger det i newIndex

    if (index > -1) {
      // OM index är större än -1  ( om objektet med samma namn redan finns)
      let totalAmount = (addShopCartList[index].anyAmount = Number(addShopCartList[index].anyAmount) + Number(amount)); //ta antal munkar i objektet i listan plussa på antal munkar i objektet med samma namn som läggs till i listan.

      if (totalAmount > 10) {
        // om du har beställt mer än 10 munkar av samma sort får du 10% rabatt på totala summan
        addShopCartList[index].anySum = Math.round((Number(addShopCartList[index].anySum) + Number(totalSum)) * 0.9);
      } else {
        addShopCartList[index].anySum = Number(addShopCartList[index].anySum) + Number(totalSum); //ta totala summan  i objektet i listan plussa på summan i objektet med samma namn som läggs till i listan.
      }
    } else {
      // ANNARS - lägg till i varukorgen
      addShopCartList.push(addedItem);
    }

    if (amountChoosen.innerText == 0) {
      shoppingCartTotalAmount.innerText = Number(totalSum);
      shoppingCartTotalItems.innerText = Number(amount);
      amountChoosen.innerText = Number(amount);
      amountChoosen.style.backgroundColor = '#A1C298';
      amountChoosen.style.fontWeight = '900';
    } else if (amountChoosen.innerText > 1) {
      amountChoosen.innerText = Number(sumAmount) + Number(amount);
      shoppingCartTotalItems.innerText = Number(shoppingCartItemSum) + Number(amount);
      shoppingCartTotalAmount.innerText = Number(shoppingCartAmountSum) + Number(totalSum);
    }

    setTimeout(clearValues, 500, munk);
        printAddedDonutShoppingCart(munk);
  }

}

// ARTIKLAR I KUNDKORG VISAS

function printAddedDonutShoppingCart(){
    document.querySelector('#shoppingCartContent').innerHTML = '';
    
    for(let i =0; i < addShopCartList.length; i++) {
        document.querySelector('#shoppingCartContent').innerHTML +=`<div><h4>${addShopCartList[i].anyName}</h4><p>${addShopCartList[i].anyAmount}st</p><p>${addShopCartList[i].anyPrice}kr/st</p><p>${addShopCartList[i].anySum}kr</p><button class="material-symbols-outlined">
        delete_forever
        </button></div>`;
    }
    const munkar = Array.from(document.querySelectorAll('#shoppingCartContent div'));
    munkar.forEach((item) => {
        item.addEventListener('click', removeAddedDonut);
    });
}
    function removeAddedDonut(e) { //working on it TBC
        console.log(e.target.innerHTML);
        const i2 = addShopCartList.indexOf(e.target.innerHTML);
        if (i2 > -1) {
            addShopCartList.splice(i2, 1);
            printAddedDonutShoppingCart();
        }
    }

function clearValues(munk) {
  // Funktion som raderar valda antal och summa munkar när knappen trycks på
  munk.querySelector('.antal').innerText = 0;
  munk.querySelector('.sum').innerText = 0;
}

// ÖPPNA STÄNGA BESTÄLLNINGSFORMULÄR

const formOpenBtn = document.querySelector('.checkoutButton');
const formOrder = document.querySelector('.formOrder');
const formCloseBtn = document.querySelector('.formCloseBtn');

formOpenBtn.addEventListener('click', formOrderOpen);
formCloseBtn.addEventListener('click', formOrderClose);

function formOrderOpen() {
  formOrder.classList.add('formOrderOpen');
  formCloseBtn.classList.add('formCloseBtnOpen');
}

function formOrderClose() {
  formOrder.classList.remove('formOrderOpen');
  formCloseBtn.classList.remove('formCloseBtnOpen');
}

// ÖPPNA STÄNGA KORT OCH FAKTURAALTERNATIV

const cardRadio = document.querySelector('#debitKredit');
const invoiceRadio = document.querySelector('#invoice');
const cardPayment = document.querySelector('.cardPayment');
const fakturaPayment = document.querySelector('.fakturaPayment');

cardRadio.addEventListener('change', cardPaymentOpen);
invoiceRadio.addEventListener('change', fakturaPaymentOpen);

function cardPaymentOpen(e) {
  if (cardRadio.checked) {
    cardPayment.classList.add('paymentOpen');
    fakturaPayment.classList.remove('paymentOpen');
  }
}
function fakturaPaymentOpen(e) {
  if (invoiceRadio.checked) {
    fakturaPayment.classList.add('paymentOpen');
    cardPayment.classList.remove('paymentOpen');
  }
}

// THEME TOGGLE
const themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', toggleTheme);

function toggleTheme() {
  themeBtn.classList.toggle('themeBtnMove');

  if (themeBtn == document.querySelector('.themeBtnMove')) {
    // DARK MODE - Till mörkt tema
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
  } else if (themeBtn != document.querySelector('.themeBtnMove')) {
    // LIGHT MODE - tillbaka till original
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

//get form inputs with queryselector
const formOrderInputs = Array.from(document.querySelector('.formOrder').querySelectorAll('input'));

// loop form inputs, add event listeners
for (let i = 0; i < formOrderInputs.length; i++) {
  formOrderInputs[i].addEventListener('change', checkInputNotEmpty);
}

//declare boolean variables for every validated input
let isFirstname = false;
let isLastname = false;
let isAdress = false;
let isZipcode = false;
let isCity = false;
let isTelephone = false;
let isEmail = false;
let isDebitKredit = false;
let isInvoice = false;
let isSocialSecurity = false;
let isGdpr = false;

// function to check if specifik input is valid
function checkInputNotEmpty(e) {
  const getId = e.target.id;
  const getValue = e.target.value;

  if (getId == 'firstname' && getValue !== '') {
    isFirstname = true;
    removeError(e);
  } else if (getId == 'firstname' && getValue == '') {
    isFirstname = false;
    addErrorMessage(e, 'Förnamn måste vara ifyllt.');
  }
  if (getId == 'lastname' && getValue !== '') {
    isLastname = true;
    removeError(e);
  } else if (getId == 'lastname' && getValue == '') {
    isLastname = false;
    addErrorMessage(e, 'Efternamn måste vara ifyllt.');
  }
  if (getId == 'adress' && getValue !== '') {
    isAdress = true;
    removeError(e);
  } else if (getId == 'adress' && getValue == '') {
    isAdress = false;
    addErrorMessage(e, 'Adress måste vara ifyllt.');
  }
  if (getId == 'zipcode' && getValue !== '') {
    isZipcode = true;
    removeError(e);
  } else if (getId == 'zipcode' && getValue == '') {
    isZipcode = false;
    addErrorMessage(e, 'Postnummer måste vara ifyllt.');
  }
  if (getId == 'city' && getValue !== '') {
    isCity = true;
    removeError(e);
  } else if (getId == 'city' && getValue == '') {
    isCity = false;
    addErrorMessage(e, 'Postort måste vara ifyllt.');
  }
  if (getId == 'telephone' && getValue !== '') {
    isTelephone = true;
    removeError(e);
  } else if (getId == 'telephone' && getValue == '') {
    isTelephone = false;
    addErrorMessage(e, 'Telefon måste vara ifyllt.');
  }
  if (getId == 'email' && getValue !== '') {
    isEmail = true;
    removeError(e);
  } else if (getId == 'email' && getValue == '') {
    isEmail = false;
    addErrorMessage(e, 'E-post måste vara ifyllt.');
  }
  if (getId == 'debitKredit' && e.target.checked) {
    isDebitKredit = true;
    isInvoice = false;
    document.querySelector('#socialSecurity').required = false;
  }
  if (getId == 'invoice' && e.target.checked) {
    isInvoice = true;
    isDebitKredit = false;
    document.querySelector('#socialSecurity').required = true;
  }
  if (getId == 'socialSecurity' && !getValue == '') {
    isSocialSecurity = true;
    removeError(e);
  } else if (getId == 'socialSecurity' && getValue == '') {
    isSocialSecurity = false;
    addErrorMessage(e, 'Personnummer måste vara ifyllt.');
  }
  if (getId == 'gdpr' && e.target.checked) {
    isGdpr = true;
  } else if (getId == 'gdpr' && !e.target.checked) {
    isGdpr = false;
  }

  checkFormValid();
}

// function to check if all inputs are valid, make submit button enabled
function checkFormValid() {
  const submitBtn = document.querySelector('#submit');

  if (
    isFirstname &&
    isLastname &&
    isAdress &&
    isZipcode &&
    isCity &&
    isTelephone &&
    isEmail &&
    (isDebitKredit || (isInvoice && isSocialSecurity)) &&
    isGdpr
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

// function to add error message to non-valid input
function addErrorMessage(e, string) {
  const getErrorMessage = e.target.parentElement.querySelector('.errorMessage');

  e.target.classList.add('error');

  const addParagraph = document.createElement('p');
  const addText = document.createTextNode(string);
  addParagraph.appendChild(addText);
  getErrorMessage.appendChild(addParagraph);
}

// function to remove error message after input get valid
function removeError(e) {
  e.target.classList.remove('error');
  e.target.parentElement.querySelector('.errorMessage').innerHTML = '';
}
