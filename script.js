let addShopCartList = []; // Lista för munkar som ska till varukorgen


//  VARUKORG - öppnas/stängs

const shoppingCart = document.querySelector('#shoppingCart');
const sectionShoppingCart = document.querySelector('#sectionShoppingCart');
const shoppingClose = document.querySelector('.shoppingAction');

shoppingCart.addEventListener('click', toggleShoppingCartOpenState);
shoppingClose.addEventListener('click', toggleShoppingCartOpenState);

function toggleShoppingCartOpenState() {
  sectionShoppingCart.classList.toggle('open');
  emptyCart();
}

// DONUTS

const donuts = [
  {
    name: 'Pepparkaka',
    price: 24,
    rating: 4,
    amount: 0,
    category: 'Julglädje',
    sum: 0,
    totalAmount: 0,
    totalSum: 0,
    src1: 'img/donuts_img/brown.jpg',
    alt1: 'vaniljmunk med pepparkakafrosting',
    src2: 'img/smaker_img/pepparkaka.jpg',
    alt2: 'pepparkaka',
  },
  {
    name: 'Julglädje',
    price: 20,
    rating: 3,
    amount: 0,
    category: 'Julglädje',
    sum: 0,
    totalAmount: 0,
    totalSum: 0,
    src1: 'img/donuts_img/red.jpg',
    alt1: 'vaniljmunk med frosting med smak av nejlika',
    src2: 'img/smaker_img/nejlika.jpg',
    alt2: 'Kryddnejlikor',
  },
  {
    name: 'Ingefära',
    price: 20,
    rating: 4,
    amount: 0,
    category: 'Julglädje',
    sum: 0,
    totalAmount: 0,
    totalSum: 0,
    src1: 'img/donuts_img/yellow.jpg',
    alt1: 'vaniljmunk med ingefärsfrosting',
    src2: 'img/smaker_img/ingefara.jpg',
    alt2: 'ingefära',
  },
  {
    name: 'Vanilj',
    price: 13,
    rating: 5,
    amount: 0,
    category: 'Klassiker',
    sum: 0,
    totalAmount: 0,
    totalSum: 0,
    src1: 'img/donuts_img/white.jpg',
    alt: 'vaniljmunk med vaniljfrosting',
    src2: 'img/smaker_img/vanilj.jpg',
    alt2: 'vaniljstång',
  },
  {
    name: 'Choklad',
    price: 13,
    rating: 4,
    amount: 0,
    category: 'Klassiker',
    sum: 0,
    totalAmount: 0,
    totalSum: 0,
    src1: 'img/donuts_img/brown.jpg',
    alt1: 'vaniljmunk med chokladglaze',
    src2: 'img/smaker_img/choklad.jpg',
    alt2: 'choklad',
  },
  {
    name: 'Lakrits',
    price: 20,
    rating: 4,
    amount: 0,
    category: 'Klassiker',
    sum: 0,
    totalAmount: 0,
    totalSum: 0,
    src1: 'img/donuts_img/black.jpg',
    alt1: 'vaniljmunk med lakritsfrosting',
    src2: 'img/smaker_img/lakrits.jpg',
    alt2: 'sötlakrits',
  },
  {
    name: 'Apelsin',
    price: 20,
    rating: 3,
    amount: 0,
    category: 'Klassiker',
    sum: 0,
    totalAmount: 0,
    totalSum: 0,
    src1: 'img/donuts_img/orange.jpg',
    alt1: 'vaniljmunk med apelsinsmak',
    src2: 'img/smaker_img/apelsin.jpg',
    alt2: 'apelsiner',
  },
  {
    name: 'Hallon',
    price: 18,
    rating: 5,
    amount: 0,
    category: 'Klassiker',
    sum: 0,
    totalAmount: 0,
    totalSum: 0,
    src1: 'img/donuts_img/pink.jpg',
    alt1: 'vaniljmunk med hallonfrosting',
    src2: 'img/smaker_img/hallon.jpg',
    alt2: 'hallon i skål',
  },
  {
    name: 'Champagne',
    price: 25,
    rating: 5,
    amount: 0,
    category: 'Limited Edition',
    sum: 0,
    totalAmount: 0,
    totalSum: 0,
    src1: 'img/donuts_img/purple.jpg',
    alt1: 'vaniljmunk med champagnefrosting',
    src2: 'img/smaker_img/champagne.jpg',
    alt2: 'flaska med champagne',
  },
  {
    name: 'Fizzypop',
    price: 26,
    rating: 4,
    amount: 0,
    category: 'Limited Edition',
    sum: 0,
    totalAmount: 0,
    totalSum: 0,
    src1: 'img/donuts_img/blue.jpg',
    alt1: 'vaniljmunk med frosting med smak av godiset fizzypop',
    src2: 'img/smaker_img/fizzypop.jpg',
    alt2: 'godiset fizzypop',
  },
  {
    name: 'Päronsplitt',
    price: 29,
    rating: 5,
    amount: 0,
    totalAmount: 0,
    totalSum: 0,
    category: 'Limited Edition',
    sum: 0,
    src1: 'img/donuts_img/green2.jpg',
    alt1: 'vaniljmunk med päronsplitt-frosting',
    src2: 'img/smaker_img/paronsplitt.jpg',
    alt2: 'ekologisk päronsplitt',
  },
];
const donutContainer = document.querySelector('#donutContainer');

function writeOutDonuts() { // Funktion som skriver ut alla munkarna i HTML
  donutContainer.innerHTML = '';

  for (let i = 0; i < donuts.length; i++) {
    donutContainer.innerHTML += `

        <article class="donut">
        <div class="slideshow">
        <div class="images">
            <img id="img1" class="img-1" src="${donuts[i].src1}" alt="" width="150" height="200" />
            <img id="img2" class="img-2" src="${donuts[i].src2}" alt="" width="150" height="200" />
        </div>
        <div class="controls">
        <button class="left" id="prevImage">
          <span class="material-symbols-outlined">chevron_left</span>
        </button>

        <button class="right" id="nextImage">
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
        <div class="indicator" id="indicatorDots"></div>
        
        <div class="donutInfo">
            <h2>${donuts[i].name}</h2>
            <span class="price">${donuts[i].price} kr/st</span><br>
            <span>Antal:</span> <span class="amount">${donuts[i].amount} st</span><br>
            <span>Summa:</span> <span class="sum">${donuts[i].sum} kr</span><br>
            <button class="minus" data-id="${i}">-</button>
            <button class="plus" data-id="${i}">+</button>
            <button class="addToCart" data-id="${i}">Köp</button><br>
            
            </div>
        </article>    
        `;
  }
  // Minusknapp
  document.querySelectorAll('button.minus').forEach(btn => {
    btn.addEventListener('click', updateDonutAmountMinus);
  });
  // Plusknapp
  document.querySelectorAll('button.plus').forEach(btn => {
    btn.addEventListener('click', updateDonutAmountPlus);
  });
  // Köp-Knapp
  document.querySelectorAll('button.addToCart').forEach(btn => {
    btn.addEventListener('click', (sendToCart));
  });
}

function updateDonutAmountPlus(e) { // funktion som plussar på munkar varje gånr vi trycker +
  const btnPlus = e.currentTarget.dataset.id;
  donuts[btnPlus].amount += 1;

  donuts[btnPlus].sum = donuts[btnPlus].amount * donuts[btnPlus].price;

  writeOutDonuts();
}

function updateDonutAmountMinus(e) { // funktion som t på munkar varje gånr vi trycker +
  const btnMinus = e.currentTarget.dataset.id;

  if (donuts[btnMinus].amount > 0) {
    donuts[btnMinus].amount = donuts[btnMinus].amount - 1;
  }
  donuts[btnMinus].sum = donuts[btnMinus].amount * donuts[btnMinus].price;

  writeOutDonuts();
}


function sendToCart(e) { // funktion som när vi trcyker på köp så lägger vi till objekter från donut-listan till vår shoppingcart lista
  const addToCartBtn = e.currentTarget.dataset.id;
  const index = addShopCartList.findIndex(element => element.anyName === donuts[addToCartBtn].name);

  const addedItem = { // objektet som läggs till i vår shoppinglista med värdena från vår donutlista
    anyPrice: donuts[addToCartBtn].price,
    anyImg: donuts[addToCartBtn].src1,
    anyAlt: donuts[addToCartBtn].alt1,
    anyName: donuts[addToCartBtn].name,
    anyAmount: donuts[addToCartBtn].amount,
    anySum: donuts[addToCartBtn].sum,
  };
  if (donuts[addToCartBtn].amount == 0) { // kollar så vi inte kan lägga till munkar med antal 0
    return;
  } else {
    if (index > -1) { // om munken redan finns i shoppingkart så läggs värdet och summan på
      addShopCartList[index].anyAmount += donuts[addToCartBtn].amount;
      addShopCartList[index].anySum += donuts[addToCartBtn].sum;
      
    } else {
      addShopCartList.push(addedItem); // om inte munken redan finns så läggs den till på nytt
    }
  }
  /*printOutShopCartSymbol(addShopCartList.findIndex(element => element.anyName === donuts[addToCartBtn].name));*/
  printOutShopCart(addShopCartList.findIndex(element => element.anyName === donuts[addToCartBtn].name));
  setTimeout(clearValues, 500); // efter tryck på köp rensas värdena
  activateCheckoutSection();

  //UPPDATERAR totalt antal adderade donuts i varukorgen
  const donutAmountAddedShopCart = addShopCartList.reduce(
    (previousValue, addShopCartList) => {
      return addShopCartList.anyAmount + previousValue;
    },
    0
    );
    document.querySelector('#shoppingCartTotalItems').innerHTML = donutAmountAddedShopCart;
    document.querySelector('#amountChoosen').innerHTML = donutAmountAddedShopCart;


  //UPPDATERAR total summa kr adderade donuts i varukorgen
  const donutSumAddedShopCart = addShopCartList.reduce(
    (previousValue, addShopCartList) => {
      return addShopCartList.anySum + previousValue;
    },
    0
    );
    document.querySelector('#shoppingCartTotalAmount').innerHTML = donutSumAddedShopCart;
}

function clearValues() {
  for (i = 0; i < donuts.length; i++) {
    donuts[i].amount = 0;
    donuts[i].sum = 0;
  }
  writeOutDonuts();
}/*
 function printOutShopCartSymbol(index){
  let amountChoosen = document.querySelector('#amountChoosen').innerHTML;
  
  if (amountChoosen) {
  document.querySelector('#amountChoosen').innerHTML = `
  <span>${addShopCartList[index].anyAmount}</span>`;
  }
 }*/

  writeOutDonuts();

//VARUKORG

// FUNKTION när varukorg är tom
function emptyCart() {
  if (addShopCartList == 0) {
    document.querySelector('#shopCartContent').innerHTML = 'Varukorgen är tom.';
  } 
}

// FUNKTION aktivera checkoutsektion NÄR artiklar läggs till
function activateCheckoutSection() {
  const checkoutContainer = document.querySelector('#checkoutContainer');
  checkoutContainer.classList.add('open');
}

// ARTIKLAR I KUNDKORG VISAS
function printOutShopCart(index){
    document.querySelector('#shopCartContent').innerHTML = '';
    
  /*if (addShopCartList[index].anyAmount > 10) { // om du beställer mer än 10 munkar får du 10% rabatt
    addShopCartList[index].anySum = Math.round(addShopCartList[index].anySum * 0.9);
  }*/

    for(let i =0; i < addShopCartList.length; i++) {
        document.querySelector('#shopCartContent').innerHTML +=`
        <div id="shopCartAddedDiv"><img class="imgInCart" src="${addShopCartList[i].anyImg}" alt="${addShopCartList[i].anyAlt}"  width="55" height="55"></img>
        <span class="text"><h4>${addShopCartList[i].anyName}</h4><br>
        <p>${addShopCartList[i].anyAmount}st</p>
        <p>${addShopCartList[i].anyPrice}kr/st</p>
        <p>${addShopCartList[i].anySum}kr</p></span>
        <button class="material-symbols-outlined" data-id="${i}">
        delete_forever
        </div>`;
    }

    //TA BORT MUNKAR 
    const removeDonuts = Array.from(document.querySelectorAll('#shopCartContent button'));
    removeDonuts.forEach((item) => {
        item.addEventListener('click', removeAddedDonut);
    });
    
    //FUNKTION TA BORT MUNKAR PAPPERSKORG PER ARTIKEL 
    function removeAddedDonut(e) { 
        const i2 = e.currentTarget.dataset.id;
        if (i > -1) {
            addShopCartList.splice(i2, 1);
        }
        printOutShopCart();
        emptyCart()
    }
        
} 
    
writeOutDonuts();

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
