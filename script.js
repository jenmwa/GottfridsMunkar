/******************************************************************************
 ******************************** VARIABLES **************************************
 ******************************************************************************
*/

/******************** DONUT VARIABLES ***************************************/

// Grabbing the container from HTML to write out the donuts in.
const donutContainer = document.querySelector('#donutContainer');

// List with objects of the donuts
const donuts = [
  {
    name: 'Pepparkaka',
    price: 24,
    rating: 3,
    amount: 0,
    category: 'Julglädje',
    sum: 0,
    images: ['img/donuts_img/brown.jpg', 'img/smaker_img/pepparkaka.jpg'],
    alt: ['vaniljmunk med pepparkakafrosting', 'pepparkaka'],
  },
  {
    name: 'Julglädje',
    price: 20,
    rating: 2,
    amount: 0,
    category: 'Julglädje',
    sum: 0,
    images: ['img/donuts_img/red.jpg', 'img/smaker_img/nejlika.jpg'],
    alt: ['vaniljmunk med frosting med smak av nejlika', 'Kryddnejlikor'],
  },
  {
    name: 'Ingefära',
    price: 20,
    rating: 1,
    amount: 0,
    category: 'Julglädje',
    sum: 0,
    images: ['img/donuts_img/yellow.jpg', 'img/smaker_img/ingefara.jpg'],
    alt: ['vaniljmunk med ingefärsfrosting', 'ingefära'],
  },
  {
    name: 'Vanilj',
    price: 13,
    rating: 5,
    amount: 0,
    category: 'Klassiker',
    sum: 0,
    images: ['img/donuts_img/white.jpg', 'img/smaker_img/vanilj.jpg'],
    alt: ['vaniljmunk med vaniljfrosting', 'vaniljstång'],
  },
  {
    name: 'Choklad',
    price: 13,
    rating: 4.5,
    amount: 0,
    category: 'Klassiker',
    sum: 0,
    images: ['img/donuts_img/brown.jpg', 'img/smaker_img/choklad.jpg'],
    alt: ['sötlakrits', 'choklad'],
  },
  {
    name: 'Lakrits',
    price: 20,
    rating: 3,
    amount: 0,
    category: 'Klassiker',
    sum: 0,
    images: ['img/donuts_img/black.jpg', 'img/smaker_img/lakrits.jpg'],
    alt: ['vaniljmunk med lakritsfrosting', 'sötlakrits'],
  },
  {
    name: 'Apelsin',
    price: 20,
    rating: 3,
    amount: 0,
    category: 'Klassiker',
    sum: 0,
    images: ['img/donuts_img/orange.jpg', 'img/smaker_img/apelsin.jpg'],
    alt: ['vaniljmunk med apelsinsmak', 'apelsiner'],
  },
  {
    name: 'Hallon',
    price: 18,
    rating: 5,
    amount: 0,
    category: 'Klassiker',
    sum: 0,
    images: ['img/donuts_img/pink.jpg', 'img/smaker_img/hallon.jpg'],
    alt: ['vaniljmunk med hallonfrosting', 'hallon i skål'],
  },
  {
    name: 'Champagne',
    price: 25,
    rating: 5,
    amount: 0,
    category: 'Limited Edition',
    sum: 0,
    images: ['img/donuts_img/purple.jpg', 'img/smaker_img/champagne.jpg'],
    alt: ['vaniljmunk med champagnefrosting', 'flaska med champagne'],
  },
  {
    name: 'Fizzypop',
    price: 26,
    rating: 2,
    amount: 0,
    category: 'Limited Edition',
    sum: 0,
    images: ['img/donuts_img/blue.jpg', 'img/smaker_img/fizzypop.jpg'],
    alt: ['vaniljmunk med frosting med smak av godiset fizzypop', 'godiset fizzypop'],
  },
  {
    name: 'Päronsplitt',
    price: 29,
    rating: 5,
    amount: 0,
    category: 'Limited Edition',
    sum: 0,
    images: ['img/donuts_img/green2.jpg', 'img/smaker_img/paronsplitt.jpg'],
    alt: ['vaniljmunk med päronsplitt-frosting', 'ekologisk päronsplitt'],
  },
];

/******************** SHOPPING CART VARIABLES *******************************/

// Shopping cart array
let addShopCartList = [];

/******************** SORTING VARIABLES ***************************************/

let nameSort = true;
let gradeSort = true;
let priceSort = true;
let categorySort = true;

/******************** FORM VARIABLES ***************************************/

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

/******************************************************************************
******************************** FUNCTIONS **************************************
******************************************************************************
*/

/******************** DONUT FUNCTIONS ***************************************/


// Function that writes out the donuts in HTML
function writeOutDonuts() {
  donutContainer.innerHTML = '';

  for (let i = 0; i < donuts.length; i++) {
    donutContainer.innerHTML += `

    <article class="donut">
        <div class="slideshow" id="slideshow">
        <div class="images">
            <img id="img1" class="img-1 donutImg-1-${i}"  src="${donuts[i].images[0]}" alt="${donuts[i].alt[0]}" width="100" height="150" />
            
        </div>
            <div class="controls">
        <button class="left" id="prevImage" data-id="${i}">
          <span  class="material-symbols-outlined">chevron_left</span>
        </button>

        <button class="right" id="nextImage" data-id="${i}">
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
        </div>
        <div class="indicator" id="indicatorDots"></div>
        <div class="donutInfo">
            
            <h2>${donuts[i].name}</h2>
            <span class="price">${donuts[i].price} kr/st</span><br>
            <span>Antal:</span> <span class="amount">${donuts[i].amount} st</span><br>
            <span>Summa:</span> <span class="sum">${donuts[i].sum} kr</span><br>
            <button class="minus" data-id="${i}">-</button>
            <button class="plus" data-id="${i}">+</button>
            <button class="addToCart" data-id="${i}">Köp</button><br>
            <span class="category" >Kategori: <span class="category">${donuts[i].category}</span></span>
            
        </div>
        </article>    
        `;
  }

  // Adding Evenlisternes on BTN's
  addEvenlisternes();
  createDots();
}

// Add eventlisteners after writeOutDonuts
function addEvenlisternes() {
  // Decrese button
  document.querySelectorAll('button.minus').forEach(btn => {
    btn.addEventListener('click', updateDonutAmountMinus);
  });
  // Increase button
  document.querySelectorAll('button.plus').forEach(btn => {
    btn.addEventListener('click', updateDonutAmountPlus);
  });
  // Buy Button
  document.querySelectorAll('button.addToCart').forEach(btn => {
    btn.addEventListener('click', sendToCart);

    // Slideshow buttons
    document.querySelectorAll('button.right').forEach(nextBtn => {
      nextBtn.addEventListener('click', nextImage);
    });
    document.querySelectorAll('button.left').forEach(prevBtn => {
      prevBtn.addEventListener('click', prevImage);
    });
  });
}

// Function for writing out star rating
function createDots() {
  // Collecting all html in one list
  const dotsContainer = document.querySelectorAll('.indicator');
  
  for (let i = 0; i < donuts.length; i++) {
    const ratingNumber = donuts[i].rating;  // variable for donutrating
    const stars = '<span class="dot" ><i class="fa-solid fa-star"></i></span>'; // variable for stars

    dotsContainer[i].innerHTML += stars.repeat(ratingNumber); // repeating amount of stars in rating.
  }
}

// Function that uppdates increase amount
function updateDonutAmountPlus(e) {
  const btnPlus = e.currentTarget.dataset.id;
  donuts[btnPlus].amount += 1;

  donuts[btnPlus].sum = donuts[btnPlus].amount * donuts[btnPlus].price;

  writeOutDonuts();
}

// Function that uppdates decrease amount
function updateDonutAmountMinus(e) {
  const btnMinus = e.currentTarget.dataset.id;

  if (donuts[btnMinus].amount > 0) {
    donuts[btnMinus].amount = donuts[btnMinus].amount - 1;
  }
  donuts[btnMinus].sum = donuts[btnMinus].amount * donuts[btnMinus].price;

  writeOutDonuts();
}

// Function that pushes the donut-object to a Shopcartlist
function sendToCart(e) {
  const addToCartBtn = e.currentTarget.dataset.id;
  const index = addShopCartList.findIndex(element => element.anyName === donuts[addToCartBtn].name);

  // IF - the amount is 0 - do nothing
  if (donuts[addToCartBtn].amount == 0) {
    return;
  } else {
    // IF- the donut already exist in the shopcartlist - add amount and sum
    if (index > -1) {
      addShopCartList[index].anyAmount += donuts[addToCartBtn].amount;
      addShopCartList[index].anySum += donuts[addToCartBtn].sum;
    } else {
      // ELSE - add the donut to the list
      addShopCartList.push({
        anyPrice: donuts[addToCartBtn].price,
        anyImg: donuts[addToCartBtn].images[0],
        anyAlt: donuts[addToCartBtn].alt1,
        anyName: donuts[addToCartBtn].name,
        anyAmount: donuts[addToCartBtn].amount,
        anySum: donuts[addToCartBtn].sum,
      });
    }
  }

  printOutShopCart(addShopCartList.findIndex(element => element.anyName === donuts[addToCartBtn].name));
  setTimeout(clearValues, 500);
  activateCheckoutSection();
  updateShopCartTotal();
}

// Function that clears the values for the donuts when clicking the buy-button
function clearValues() {
  for (i = 0; i < donuts.length; i++) {
    donuts[i].amount = 0;
    donuts[i].sum = 0;
  }
  writeOutDonuts();
}

/******************** SLIDESHOW FUNCTIONS ***************************************/


// Function that swaps images to the Next image
function nextImage(e) {
  const index = e.currentTarget.dataset.id;

  const picContainer = document.querySelector(`.donutImg-1-${index}`);

  const donutImgs = donuts[index].images;
  const altImg = donuts[index].alt;

  if (picContainer.getAttribute('src') === donutImgs[0]) {
    picContainer.setAttribute('src', donutImgs[1]);
    picContainer.setAttribute('alt', altImg[1]);
  } else {
    picContainer.setAttribute('src', donutImgs[0]);
    picContainer.setAttribute('alt', altImg[0]);
  }
}

// Function that swaps images to the Next image
function prevImage(e) {
  const index = e.currentTarget.dataset.id;

  const picContainer = document.querySelector(`.donutImg-1-${index}`);

  const donutImgs = donuts[index].images;
  const altImg = donuts[index].alt;

  if (picContainer.getAttribute('src') === donutImgs[1]) {
    picContainer.setAttribute('src', donutImgs[0]);
    picContainer.setAttribute('alt', altImg[0]);
  } else {
    picContainer.setAttribute('src', donutImgs[1]);
    picContainer.setAttribute('alt', altImg[1]);
  }
}

/******************** TOGGLE THEME FUNCTIONS ***************************************/

const themeBtn = document.querySelector('#themeBtn');
themeBtn.addEventListener('click', toggleTheme);

function toggleTheme() {
  themeBtn.classList.toggle('themeBtnMove');

  if (themeBtn == document.querySelector('.themeBtnMove')) {
    // DARK MODE - Till mörkt tema
    document.body.style.backgroundColor = '#302f2a'; // bakgrund
    document.body.style.color = '#f7f6f2'; // textfärg
    document.querySelector('#shopCartColorTheme').style.color = 'white'; // shoppingcart

    document.querySelectorAll('.menuBtnColorTheme').forEach(menu => {
      // hamburgarmeny
      menu.style.backgroundColor = 'white';
    });
    document.querySelectorAll('.headerColorTheme').forEach(header => {
      // header och footer
      header.style.backgroundColor = '#572525';
    });
    document.querySelectorAll('.allColorTheme').forEach(link => {
      // All textinnehåll med denna class
      link.style.color = 'white';
    });
    document.querySelectorAll('.productCard').forEach(card => {
      // Alla kategorier med denna class
      card.style.backgroundColor = '#4b5947';
    });
    document.querySelectorAll('.donut').forEach(donut => {
      // Alla produktkort med denna class
      donut.style.backgroundColor = '#839183';
    });
  } else if (themeBtn != document.querySelector('.themeBtnMove')) {
    // LIGHT MODE - tillbaka till original
    document.body.style.backgroundColor = '#FBF2CF'; // bakgrundsfärg
    document.body.style.color = 'black'; // Textfärg
    document.querySelector('#shopCartColorTheme').style.color = 'black'; // shoppingcart

    document.querySelectorAll('.menuBtnColorTheme').forEach(menu => {
      // HamnurgarMenyn
      menu.style.backgroundColor = 'black';
    });
    document.querySelectorAll('.allColorTheme').forEach(link => {
      // Ändrar färg till svart på allt med classen
      link.style.color = 'black';
    });
    document.querySelectorAll('.headerColorTheme').forEach(header => {
      // Header och footer
      header.style.backgroundColor = '#FA7070';
    });
    document.querySelectorAll('.productCard').forEach(card => {
      // Alla produktkort med denna class
      card.style.backgroundColor = '#A1C298';
    });
    munk = document.querySelectorAll('.donut').forEach(donut => {
      // Alla produktkort med denna class
      donut.style.backgroundColor = '#C6EBC5';
    });
  }
}

/******************** SHOPPING CART FUNCTIONS ***************************************/


// shoppingCart open-close
const shoppingCart = document.querySelector('#shoppingCart');
const sectionShoppingCart = document.querySelector('#sectionShoppingCart');
const shoppingClose = document.querySelector('.shoppingAction');

shoppingCart.addEventListener('click', toggleShoppingCartOpenState);
shoppingClose.addEventListener('click', toggleShoppingCartOpenState);

// Function open shoppingCart
function toggleShoppingCartOpenState() {
  sectionShoppingCart.classList.toggle('open');
  emptyCart();
}

// Function empty shoppingCart
function emptyCart() {
  if (addShopCartList == 0) {
    document.querySelector('#shopCartContent').innerHTML = 'Varukorgen är tom.';
    //rad 313-316 + 322-325 går att förenkla och kombinera?
    const checkoutContainer = document.querySelector('#checkoutContainer');
    checkoutContainer.classList.remove('open');
    const removeAllBtn = document.querySelector('#shoppingRemove');
    removeAllBtn.classList.remove('open');
  }
}

// Function activate checkout section
function activateCheckoutSection() {
  const checkoutContainer = document.querySelector('#checkoutContainer');
  checkoutContainer.classList.add('open');
  const removeAllBtn = document.querySelector('#shoppingRemove');
  removeAllBtn.classList.add('open');
}

//Updates total amount in shopCart & shopcartIcon
function updateShopCartTotal() {
  const donutAmountAddedShopCart = addShopCartList.reduce((previousValue, addShopCartList) => {
    return addShopCartList.anyAmount + previousValue;
  }, 0);
  document.querySelector('#shoppingCartTotalItems').innerHTML = donutAmountAddedShopCart;
  document.querySelector('#amountChoosen').innerHTML = donutAmountAddedShopCart;
  if (donutAmountAddedShopCart == 0) {
    // Added - IF there is product background color changes.
    document.querySelector('#amountChoosen').classList.remove('colorsOn');
  } else {
    document.querySelector('#amountChoosen').classList.add('colorsOn');
  }

  //Updates total sum in shopCart
  const donutSumAddedShopCart = addShopCartList.reduce((previousValue, addShopCartList) => {
    return addShopCartList.anySum + previousValue;
  }, 0);
  document.querySelector('#shoppingCartTotalAmount').innerHTML = donutSumAddedShopCart;
}

// Function print items shoppingCart
function printOutShopCart(index) {
  document.querySelector('#shopCartContent').innerHTML = '';

  /*if (addShopCartList[index].anyAmount > 10) { // om du beställer mer än 10 munkar får du 10% rabatt
    addShopCartList[index].anySum = Math.round(addShopCartList[index].anySum * 0.9);
  }*/

  for (let i = 0; i < addShopCartList.length; i++) {
    document.querySelector('#shopCartContent').innerHTML += `
        <div id="shopCartAddedDiv"><img class="imgInCart" src="${addShopCartList[i].anyImg}" alt="${addShopCartList[i].anyAlt}"  width="55" height="55"></img>
        <span class="text"><h4>${addShopCartList[i].anyName}</h4><br>
        <p>${addShopCartList[i].anyAmount}st</p>
        <p>${addShopCartList[i].anyPrice}kr/st</p>
        <p>${addShopCartList[i].anySum}kr</p></span>
        <button class="material-symbols-outlined" data-id="${i}">
        delete_forever
        </div>`;
  }

  //Remove donuts per article ShopCart
  const removeDonuts = Array.from(document.querySelectorAll('#shopCartContent button'));
  removeDonuts.forEach(item => {
    item.addEventListener('click', removeAddedDonut);
  });

  // Function remove donuts per article shopCart
  function removeAddedDonut(e) {
    const j = e.currentTarget.dataset.id;
    if (i > -1) {
      addShopCartList.splice(j, 1);
      updateShopCartTotal();
    }
    printOutShopCart();
    emptyCart();
  }
}

// Remove everything in ShoppingCart
const removeShoppingCart = document.querySelector('#shoppingRemove');
removeShoppingCart.addEventListener('click', emptyShoppingCart);

function emptyShoppingCart() {
  addShopCartList.length = 0;
  updateShopCartTotal();
  emptyCart();
}

/******************** FORM FUNCTIONS ***************************************/

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

//get form inputs with queryselector
const formOrderInputs = Array.from(document.querySelector('.formOrder').querySelectorAll('input'));

// loop form inputs, add event listeners
for (let i = 0; i < formOrderInputs.length; i++) {
  formOrderInputs[i].addEventListener('change', checkInputNotEmpty);
}



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


// Function that writes out the HTML

function writeOutSortProducts() {
  let sortContainer = document.querySelector('#sortProducts');

  sortContainer.innerHTML += `
  <h3 id="sortBy">Sortera efter</h3>
  <ul aria-labelledby="sortBy">
    <li><button id="sortByName" class="allColorTheme" aria-label="Sortera efter namn">
          <i class="fa-solid fa-arrow-down-a-z"></i>
      </button>
    </li>
    <li>
      <button id="sortByGrade" class="allColorTheme" aria-label="Sortera efter betyg"><i class="fa-solid fa-star"></i></button>
    </li>
    <li>
      <button id="sortByPrice"class="allColorTheme" aria-label="Sortera efter pris fallande eller stigande">
        <i class="fa-solid fa-arrow-down-wide-short"></i>
      </button>
    </li>
    <li>
      <button id="sortByCategory" class="allColorTheme" aria-label="Sortera efter Kategori"><i class="fa-solid fa-up-down"></i></button>
    </li>
  </ul>
  <div id="sortByHeading" class="sortByHeading"></div>`;

  // Declare variables for the HTML
  const sortByName = document.querySelector('#sortByName');
  const sortByGrade = document.querySelector('#sortByGrade');
  const sortByPrice = document.querySelector('#sortByPrice');
  const sortByCategory = document.querySelector('#sortByCategory');

  let sortByHeading = document.querySelector('#sortByheading');

  //  Adding eventlisteners to buttons
  sortByName.addEventListener('click', sortByNameBtn);
  sortByGrade.addEventListener('click', sortByGradeBtn);
  sortByPrice.addEventListener('click', sortByPriceBtn);
  sortByCategory.addEventListener('click', sortByCategoryBtn);
}



// Functions for Sort-by

function sortByNameBtn() {
  sortByHeading.innerHTML = `
  <p class="sortByText">Sorterar efter Namn</p>
  `;
  if (nameSort) {
    donuts.sort((a, b) => a.name < b.name);
    nameSort = false;

    writeOutDonuts();
  } else if (nameSort == false) {
    donuts.sort((a, b) => a.name > b.name);
    nameSort = true;
    writeOutDonuts();
  }
}

function sortByGradeBtn() {
  sortByHeading.innerHTML = `
  <p class="sortByText" >Sorterar efter Betyg</p>
  `;
  if (gradeSort) {
    donuts.sort((a, b) => a.rating - b.rating);
    gradeSort = false;
    writeOutDonuts();
  } else if (gradeSort == false) {
    donuts.sort((a, b) => b.rating - a.rating);
    gradeSort = true;
    writeOutDonuts();
  }
}

function sortByPriceBtn() {
  if (priceSort) {
    sortByHeading.innerHTML = `
    <p class="sortByText">Sorterar efter Pris stigande</p>
    `;
    donuts.sort((a, b) => a.price - b.price);
    priceSort = false;
    writeOutDonuts();
  } else if (priceSort == false) {
    sortByHeading.innerHTML = `
      <p class="sortByText">Sorterar efter Pris fallande</p>
      `;
    donuts.sort((a, b) => b.price - a.price);
    priceSort = true;
    writeOutDonuts();
  }
}

function sortByCategoryBtn() {
  sortByHeading.innerHTML = `
  <p class="sortByText">Sorterar efter Kategori</p>
  `;

  if (categorySort) {
    donuts.sort((a, b) => a.category < b.category);
    categorySort = false;
    writeOutDonuts();
  } else if (categorySort == false) {
    donuts.reverse();
    writeOutDonuts();
  }
}

/******************************************************************************
 ******************************** LOGIC **************************************
 ******************************************************************************
*/

// Function-call to write out donuts
writeOutDonuts(); 

// Function-call to write out sorting-iconsw
writeOutSortProducts();
