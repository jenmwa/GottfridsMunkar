/** ****************************************************************************
 ******************************** VARIABLES **************************************
 ******************************************************************************
 */

/** ****************** DONUT VARIABLES ************************************** */

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

/** ****************** NAV VARIABLES ****************************** */
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const nav = document.querySelector('#nav');
/** ****************** SHOPPING CART VARIABLES ****************************** */

const shoppingCart = document.querySelector('#shoppingCart');
const sectionShoppingCart = document.querySelector('#sectionShoppingCart');
const shoppingClose = document.querySelector('.shoppingAction');

// Shopping cart array
const addShopCartList = [];

// Empty shopping cart button
const removeShoppingCart = document.querySelector('#shoppingRemove');

const total = {
  amount: 0,
  price: 0,
  freight: 0,
  delivery: 'Leveranstiden är 30 minuter',
  discountMessage: '',
};

// Checkout discount message container
const discountMessageContainer = document.querySelector('.checkoutContainer .discountMessage');

// Discount code Btn
const discountCodeBtn = document.querySelector('#discountCodeBtn');

/** ****************** SORTING VARIABLES ************************************** */

let nameSort = true;
let gradeSort = true;
let priceSort = true;
let categorySort = true;

/** ****************** THEME TOGGLE VARIABLES ************************************** */

const themeToggleCont = document.querySelector('#themeToggle');

/** ****************** FORM VARIABLES ************************************** */

// Form inputs
const formOrderInputs = Array.from(document.querySelector('.formOrder').querySelectorAll('input'));
const formOrderFirstName = document.querySelector('#firstname').value;
const formOrderAdress = document.querySelector('#adress').value;
const formOrderZipcode = document.querySelector('#zipcode').value;
const formOrderCity = document.querySelector('#city').value;

const form = document.querySelector('#countDownClear');

// Timer variables
const startingMinutes = 15;
totalSeconds = startingMinutes * 60;
let timerInterval;

// Form open buttons
const formOpenBtn = document.querySelector('.checkoutButton');
const formOrder = document.querySelector('.formOrder');
const formCloseBtn = document.querySelector('.formCloseBtnCnt');

// Card/invoice buttons
const cardRadio = document.querySelector('#debitKredit');
const invoiceRadio = document.querySelector('#invoice');

// Card/invoice inputs
const cardPayment = document.querySelector('.cardPayment');
const fakturaPayment = document.querySelector('.fakturaPayment');

// Declare boolean variables for every validated input
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

// Declare variable for form confirmation
const formConfirmation = document.querySelector('#orderConfirmation');
// Declare a variable for random ordernumber
const orderNumber = Math.round(Math.random() * 100000);

/** ****************************************************************************
 ******************************** FUNCTIONS **************************************
 ******************************************************************************
 */

/** ****************** NAV FUNCTIONS ************************************** */

// Function open Menu
function toggleMenu(e) {
  nav.classList.toggle('open'); // metod toggle adds/remove klass
}

/** ****************** DONUT FUNCTIONS ************************************** */

// Function that writes out the donuts in HTML
function writeOutDonuts() {
  donutContainer.innerHTML = '';

  for (let i = 0; i < donuts.length; i++) {
    donutContainer.innerHTML += `
      <article class="donut allColorTheme" >
        <div class="slideshow " id="slideshow-${i}">
          <div class="images">
            <img id="img1-${i}" class="img-1 donutImg-1-${i}"  src="${donuts[i].images[0]}" alt="${donuts[i].alt[0]}" width="100" height="150">
          </div>
          <div class="controls">
            <button class="left" id="prevImage-${i}" data-id="${i}"><span  class="material-symbols-outlined">chevron_left</span></button>
            <button class="right" id="nextImage-${i}" data-id="${i}"><span class="material-symbols-outlined">chevron_right</span></button>
          </div>
          <div class="indicator" id="indicatorDots-${i}"></div>
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
          </div>
      </article>    
        `;
  }

  // Adding Evenlisternes on BTN's
  addEventListeners();

  createDots();
  christmasSpecial();
}

// Add eventlisteners after writeOutDonuts
function addEventListeners() {
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
  });
  // Slideshow buttons
  document.querySelectorAll('button.right').forEach(nextBtn => {
    nextBtn.addEventListener('click', nextImage);
  });
  document.querySelectorAll('button.left').forEach(prevBtn => {
    prevBtn.addEventListener('click', prevImage);
  });
}

// Function for writing out star rating
function createDots() {
  // Collecting all html in one list
  const dotsContainer = document.querySelectorAll('.indicator');

  for (let i = 0; i < donuts.length; i++) {
    const ratingNumber = donuts[i].rating; // variable for donutrating
    const stars = '<span class="dot" ><i class="fa-solid fa-star"></i></span>'; // variable for stars

    dotsContainer[i].innerHTML += stars.repeat(ratingNumber); // repeating amount of stars in rating.
  }
}

// Function that uppdates increase amount
function updateDonutAmountPlus(e) {
  const btnPlus = e.currentTarget.dataset.id;
  donuts[btnPlus].amount += 1;

  donuts[btnPlus].sum = donuts[btnPlus].amount * donuts[btnPlus].price;

  const donutAmount = document.querySelectorAll('.amount');
  donutAmount[btnPlus].innerHTML = `${donuts[btnPlus].amount} st`;

  const donutSum = document.querySelectorAll('.sum');
  donutSum[btnPlus].innerHTML = `${donuts[btnPlus].sum} kr`;
}

// Function that uppdates decrease amount
function updateDonutAmountMinus(e) {
  const btnMinus = e.currentTarget.dataset.id;

  if (donuts[btnMinus].amount > 0) {
    donuts[btnMinus].amount -= 1;
  }
  donuts[btnMinus].sum = donuts[btnMinus].amount * donuts[btnMinus].price;

  const donutAmount = document.querySelectorAll('.amount');
  donutAmount[btnMinus].innerHTML = `${donuts[btnMinus].amount} st`;

  const donutSum = document.querySelectorAll('.sum');
  donutSum[btnMinus].innerHTML = `${donuts[btnMinus].sum} kr`;
}

// Function that pushes the donut-object to a Shopcartlist
function sendToCart(e) {
  const addToCartBtn = e.currentTarget.dataset.id;
  const index = addShopCartList.findIndex(element => element.anyName === donuts[addToCartBtn].name);

  // IF - the amount is 0 - do nothing
  if (donuts[addToCartBtn].amount === 0) {
    return;
  }
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
      discountMessage: '',
    });
  }

  luciaSpecial();
  manySingleDonutsDiscount();
  printOutShopCart();
  setTimeout(clearValues, 500, addToCartBtn);
  activateCheckoutSection();
  updateShopCartTotal();
  freightCost();
  printCartTotal();
}

// Function that clears the values for the donuts when clicking the buy-button
function clearValues(addToCartBtn) {
  const sum = document.querySelectorAll('.sum');
  const amount = document.querySelectorAll('.amount');

  for (let i = 0; i < donuts.length; i++) {
    donuts[addToCartBtn].sum = 0;
    donuts[addToCartBtn].amount = 0;
  }
  sum[addToCartBtn].innerHTML = `${donuts[addToCartBtn].sum} kr`;
  amount[addToCartBtn].innerHTML = `${donuts[addToCartBtn].amount} st`;
}

/** ****************** SLIDESHOW FUNCTIONS ************************************** */

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

/** ****************** SHOPPING CART FUNCTIONS ************************************** */

// Function open shoppingCart
function toggleShoppingCartOpenState() {
  sectionShoppingCart.classList.toggle('open');
  emptyCart();
}

// Function empty shoppingCart
function emptyCart() {
  if (addShopCartList == 0) {
    document.querySelector('#shopCartContent').innerHTML = 'Varukorgen är tom.';
    // rad 313-316 + 322-325 går att förenkla och kombinera?
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

// Updates total amount in shopCart & shopcartIcon
function updateShopCartTotal() {
  total.amount = addShopCartList.reduce(
    (previousValue, addShopCartList) => addShopCartList.anyAmount + previousValue,
    0
  );
  document.querySelector('#shoppingCartTotalItems').innerHTML = total.amount;
  document.querySelector('#amountChoosen').innerHTML = total.amount;
  if (total.amount === 0) {
    // Added - IF there is product background color changes.
    document.querySelector('#amountChoosen').classList.remove('colorsOn');
  } else {
    document.querySelector('#amountChoosen').classList.add('colorsOn');
  }

  // Updates total sum in shopCart
  total.price = addShopCartList.reduce((previousValue, addShopCartList) => addShopCartList.anySum + previousValue, 0);
  mondaySpecial();
  evenWeekTuesday();
  toHighforInvoice();
}

function printCartTotal() {
  document.querySelector('#shoppingCartTotalAmount').innerHTML = total.price;
}

// Function print items shoppingCart
function printOutShopCart() {
  document.querySelector('#shopCartContent').innerHTML = '';

  for (let i = 0; i < addShopCartList.length; i++) {
    document.querySelector('#shopCartContent').innerHTML += `
      <article class="shopNewItem">
        <div id="shopCartAddedDiv">
         <img class="imgInCart" src="${addShopCartList[i].anyImg}" alt="${addShopCartList[i].anyAlt}"  width="55" height="55"></img>
          <h4 class="text">${addShopCartList[i].anyName}</h4><br>
        </div>
        <div class="shopCartAddedDivTwo">
        <p>${addShopCartList[i].anyAmount}st</p>
        <p>${addShopCartList[i].anyPrice}kr/st</p>
        <p>${addShopCartList[i].anySum}kr</p><br>
        <p class="discountMessage">${addShopCartList[i].discountMessage}</p></span>
        <button class="material-symbols-outlined" data-id="${i}">
        delete_forever</button>
        </div>
      </article>
        
        `;
  }

  // Remove donuts per article ShopCart
  const removeDonuts = Array.from(document.querySelectorAll('#shopCartContent button'));
  removeDonuts.forEach(item => {
    item.addEventListener('click', removeAddedDonut);
  });

  // Function remove donuts per article shopCart
  function removeAddedDonut(e) {
    const j = e.currentTarget.dataset.id;
    if (j > -1) {
      addShopCartList.splice(j, 1);
      updateShopCartTotal();
    }

    printOutShopCart();
    emptyCart();
  }
}

function emptyShoppingCart() {
  addShopCartList.length = 0;
  updateShopCartTotal();
  emptyCart();
}

/** ****************** SPECIAL PRICE FUNCTIONS ************************************** */

// 100% when entering super secret code
function superDiscountCode() {
  const discountCodeInput = document.querySelector('#discountCodeInput');
  const discountCode = 'a_damn_fine-cup_of-coffee';
  const freightCostContainer = document.querySelector('.freightCost');

  if (discountCodeInput.value === discountCode) {
    total.price = 0;
    total.freight = 0;
    freightCostContainer.innerHTML = 'Gratis frakt';
    discountMessageContainer.innerHTML = 'WOW, FREE MUCH?!';
  } else {
    return;
  }
  printCartTotal();
}

// 10% off per donut when ordering 10x of same donut
function manySingleDonutsDiscount() {
  for (let i = 0; i < addShopCartList.length; i++) {
    const cartItem = addShopCartList[i];

    cartItem.anySum = cartItem.anyAmount * cartItem.anyPrice;

    if (cartItem.anyAmount >= 10) {
      cartItem.anySum = Math.round(cartItem.anySum * 0.9);
      cartItem.discountMessage = '10% rabatt';
    }
  }
}

// 10% off if monday before 10am
function mondaySpecial() {
  const date = new Date();
  discountMessageContainer.innerHTML = '';

  if (date.getDay() === 1 && date.getHours() < 10) {
    total.discountMessage = 'Måndagsrabatt: 10 % på hela beställningen';

    total.price = Math.round(total.price * 0.9);
    discountMessageContainer.innerHTML = total.discountMessage;
  }
}

// 25kr discount on even week tuesday
function evenWeekTuesday() {
  const date = new Date();
  const startDate = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil(days / 7);

  discountMessageContainer.innerHTML = '';

  if (weekNumber % 2 === 0 && date.getDay() === 2 && total.price > 25) {
    total.discountMessage = 'Jämn vecka tisdagsrabatt: 25kr rabatt';

    total.price = Math.round(total.price - 25);
    discountMessageContainer.innerHTML = total.discountMessage;
  }
}

// 15% added price between friday 15pm and monday 3am
function specialPriceWeekend() {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  if ((day === 5 && hour > 15) || day === 6 || day === 0 || (day === 1 && hour < 3)) {
    for (let i = 0; i < donuts.length; i++) {
      const donut = donuts[i];
      donut.price = Math.round(donut.price * 1.15);
    }
  }
}

// Free lucia donut on dec 13th
function luciaSpecial() {
  const date = new Date();
  const luciaIndex = addShopCartList.findIndex(element => element.anyName === 'Luciamunk');

  if (date.getDate() === 13 && date.getMonth() === 11) {
    if (addShopCartList.length > 0 && luciaIndex === -1) {
      addShopCartList.push({
        anyPrice: 0,
        anyImg: 'img/donuts_img/white.jpg',
        anyAlt: 'Luciamunk',
        anyName: 'Luciamunk',
        anyAmount: 1,
        anySum: 0,
        discountMessage: 'Glad lucia, vi skickar med en gratis Luciamunk.',
      });
      addShopCartList.push(addShopCartList.splice(luciaIndex, 1)[0]);
    } else if (luciaIndex > -1) {
      addShopCartList.push(addShopCartList.splice(luciaIndex, 1)[0]);
    }
  }
}

// Invoice disabled when total price over 800
function toHighforInvoice() {
  if (total.price > 800) {
    invoiceRadio.disabled = true;
    invoiceRadio.checked = false;
    invoiceRadio.parentElement.setAttribute('title', 'Fakturering möjligt endast vid beställningar under 800:-');
    cardRadio.checked = true;
  } else {
    invoiceRadio.disabled = false;
    invoiceRadio.parentElement.removeAttribute('title');
  }
}

// Calculating freight costs
function freightCost() {
  const freightCostContainer = document.querySelector('.freightCost');

  if (total.amount > 15) {
    total.freight = 0;
    freightCostContainer.innerHTML = 'Gratis frakt';
  } else {
    total.freight = Math.round(25 + total.price * 0.1);
    freightCostContainer.innerHTML = `+${total.freight} frakt`;
  }
}

// Change background and price color on dec 24th
function christmasSpecial() {
  const date = new Date();
  const priceContainers = document.querySelectorAll('.price');

  if (date.getDate() === 24 && date.getMonth() === 11) {
    document.querySelector('body').classList.add('christmasSpecial');
    document.querySelector('.sortProducts').classList.add('christmasSpecial');

    priceContainers.forEach(price => price.classList.add('christmasSpecial'));
  }
}

/** ****************** FORM FUNCTIONS ************************************** */

// Open form function
function formOrderOpen() {
  formOrder.classList.add('formOrderOpen');
  formCloseBtn.classList.add('formCloseBtnOpen');
  timerInterval = setInterval(coundownTimer, 1000);
}

function coundownTimer() {
  const countdownTimerEl = document.querySelector('#countdownTimer');
  const liveMinutes = Math.floor(totalSeconds / 60);
  let liveSeconds = totalSeconds % 60;

  if (liveSeconds < 10) {
    liveSeconds = `0${liveSeconds}`;
  } else {
    liveSeconds;
  }

  if (totalSeconds > 59) {
    countdownTimerEl.innerHTML = `${liveMinutes}:${liveSeconds} minuter`;
  } else {
    countdownTimerEl.innerHTML = `${liveMinutes}:${liveSeconds} sekunder`;
  }

  if (totalSeconds === 0) {
    clearInterval(timerInterval);
    clearForm();
    setTimeout(resetTimer, 5000);
  }
  totalSeconds--;
}

function resetTimer() {
  form.innerHTML = `Var vänlig och fyll i fomuläret inom <span id="countdownTimer">15:00 minuter</span>.`;
  totalSeconds = startingMinutes * 60;
  timerInterval = setInterval(coundownTimer, 1000);
}

// Function to start timer
function clearForm() {
  const fname = document.querySelector('#firstname');
  const lname = document.querySelector('#lastname');
  const adress = document.querySelector('#adress');
  const zipcode = document.querySelector('#zipcode');
  const city = document.querySelector('#city');
  const pcode = document.querySelector('#portkod');
  const telephone = document.querySelector('#telephone');
  const email = document.querySelector('#email');

  fname.value = '';
  lname.value = '';
  adress.value = '';
  zipcode.value = '';
  city.value = '';
  pcode.value = '';
  telephone.value = '';
  email.value = '';

  // Writing out message when form is cleared
  form.innerHTML = `Det tog för lång tid att fylla i dina uppgifter, du har 15 minuter på dig!`;
}

// Close form function
function formOrderClose() {
  window.location.href = window.location.href;
}

// Open card payment option
function cardPaymentOpen(e) {
  if (cardRadio.checked) {
    cardPayment.classList.add('paymentOpen');
    fakturaPayment.classList.remove('paymentOpen');
  }
}

// Open invoice payment option
function fakturaPaymentOpen(e) {
  if (invoiceRadio.checked) {
    fakturaPayment.classList.add('paymentOpen');
    cardPayment.classList.remove('paymentOpen');
  }
}

// Function to check if specifik input is valid
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

// Function to check if all inputs are valid, make submit button enabled
function checkFormValid() {
  const submitBtn = document.querySelector('#submit');
//  submitBtn.addEventListener('click', specialDelivery);
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

// Function to add error message to non-valid input
function addErrorMessage(e, string) {
  const getErrorMessage = e.target.parentElement.querySelector('.errorMessage');

  e.target.classList.add('error');

  const addParagraph = document.createElement('p');
  const addText = document.createTextNode(string);
  addParagraph.appendChild(addText);
  getErrorMessage.appendChild(addParagraph);
}

// Function to remove error message after input get valid
function removeError(e) {
  e.target.classList.remove('error');
  e.target.parentElement.querySelector('.errorMessage').innerHTML = '';
}
/** ******************WRITE OUT FORM CONFIRMATION FUNCTION ******************** */

function writeOutFormConfirmation() {
  const formOrderAdress = document.querySelector('#adress').value;
  const formOrderZipcode = document.querySelector('#zipcode').value;
  const formOrderCity = document.querySelector('#city').value;
  
  formConfirmation.innerHTML += `
    <div class="confirmContainer" id="confirmContainer">
    <h2>Orderbekräftelse</h2>
    <h4>Tack för din order ${formOrderFirstName}!</h4>
    <div>
        <p>Ordernummer: ${orderNumber}
        <p>Du har beställt:<span class="inhance"> ${total.amount} Stycken munkar</span><p>
        <p>Totalsumman för ordern är:<span class="inhance"> ${total.price} kr </span></p>
        <p>Fraktkostnaden landar på:<span class="inhance"> ${total.freight} kr </span></p>
        <p>Beställningen kommer levereras till:<span class="inhance"> ${formOrderAdress} ${formOrderZipcode} ${formOrderCity}</span></p>
        <p>${total.delivery}</p>
    </div>
      <button><a href=""index.html">Tillbaka till startsidan</a></button>
    </div>
  `;
}

/** ****************** SPECIAL DELIVERY FUNCTION ****************************** */
function specialDelivery() {
  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();

  if (day === 6 || day === 0) {
    total.delivery = 'Leveranstiden är 90 minuter.';
  }
  if (hour > 23 || hour < 2) {
    total.delivery = 'Leveranstiden är 45 minuter.';
  }
  if (day === 5 && hour > 11 && hour < 13) {
    total.delivery = 'Vi sitter i möte leveransen sker 15.00.';
  }
  writeOutFormConfirmation();
}

/******************************* RESET BTN ****************************************/

const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', function resetForm() {

  const formInputs = document.querySelectorAll(
    '#firstname, #lastname, #adress, #zipcode, #paymentOptions, #city, #portkod, #telephone, #email, #socialSecurity ');
  formInputs.forEach(input => {
    input.value = '';
  });
  document.getElementById("gdpr").disabled = true;

});

/** ****************** SORT-BY FUNCTIONS ************************************** */

// Function that writes out the HTML
function writeOutSortProducts() {
  const sortContainer = document.querySelector('#sortProducts');

  sortContainer.innerHTML += `
  <h2 id="sortBy">Sortera efter</h2>
    <ul aria-labelledby="sortBy">
      <li><button id="sortByName" aria-label="Sortera efter namn"><i class="fa-solid fa-arrow-down-a-z allColorTheme"></i></button></li>
      <li><button id="sortByGrade" aria-label="Sortera efter betyg"><i class="fa-solid fa-star allColorTheme"></i></button></li>
      <li><button id="sortByPrice" aria-label="Sortera efter pris fallande eller stigande"><i class="fa-solid fa-arrow-down-wide-short allColorTheme"></i></button></li>
      <li><button id="sortByCategory" aria-label="Sortera efter Kategori"><i class="fa-solid fa-up-down allColorTheme"></i></button></li>
    </ul>
  <div id="sortByHeading" class="sortByHeading"></div>`;

  // Declare variables for the HTML
  const sortByName = document.querySelector('#sortByName');
  const sortByGrade = document.querySelector('#sortByGrade');
  const sortByPrice = document.querySelector('#sortByPrice');
  const sortByCategory = document.querySelector('#sortByCategory');

  //  Adding eventlisteners to buttons
  sortByName.addEventListener('click', sortByNameBtn);
  sortByGrade.addEventListener('click', sortByGradeBtn);
  sortByPrice.addEventListener('click', sortByPriceBtn);
  sortByCategory.addEventListener('click', sortByCategoryBtn);
}

function sortByNameBtn() {
  const sortByHeading = document.querySelector('#sortByHeading');
  sortByHeading.innerHTML = `
  <p class="sortByText">Sorterar efter Namn</p>
  `;
  if (nameSort) {
    donuts.sort((a, b) => a.name.localeCompare(b.name));
    nameSort = false;
  } else if (nameSort === false) {
    donuts.sort((a, b) => b.name.localeCompare(a.name));
    nameSort = true;
  }
  writeOutDonuts();
}

function sortByGradeBtn() {
  const sortByHeading = document.querySelector('#sortByHeading');
  sortByHeading.innerHTML = `
  <p class="sortByText">Sorterar efter Betyg</p>
  `;
  if (gradeSort) {
    donuts.sort((a, b) => a.rating - b.rating);
    gradeSort = false;
  } else if (gradeSort === false) {
    donuts.sort((a, b) => b.rating - a.rating);
    gradeSort = true;
  }
  writeOutDonuts();
}

function sortByPriceBtn() {
  const sortByHeading = document.querySelector('#sortByHeading');
  if (priceSort) {
    sortByHeading.innerHTML = `
    <p class="sortByText">Sorterar efter Pris stigande</p>
    `;
    donuts.sort((a, b) => a.price - b.price);
    priceSort = false;
  } else if (priceSort === false) {
    sortByHeading.innerHTML = `
      <p class="sortByText">Sorterar efter Pris fallande</p>
      `;
    donuts.sort((a, b) => b.price - a.price);
    priceSort = true;
  }
  writeOutDonuts();
}

function sortByCategoryBtn() {
  const sortByHeading = document.querySelector('#sortByHeading');
  sortByHeading.innerHTML = `
  <p class="sortByText">Sorterar efter Kategori</p>
  `;

  if (categorySort) {
    donuts.sort((a, b) => a.category.localeCompare(b.category));
    categorySort = false;
  } else if (categorySort === false) {
    donuts.sort((a, b) => b.category.localeCompare(a.category));
    categorySort = true;
  }
  writeOutDonuts();
}

/** ****************** TOGGLE THEME FUNCTIONS ************************************** */

function writeOutToggleTheme() {
  themeToggleCont.innerHTML += `
  <div class="themeToggleContainer">
    <span><i class="fa-solid fa-lightbulb"></i></span>
     <button aria-label="Färgtema knapp" class="themeBtn" id="themeBtn"></button>
    <span><i class="fa-solid fa-lightbulb"></i></span>
  </div>
  `;
  const themeBtn = document.querySelector('#themeBtn');
  themeBtn.addEventListener('click', toggleTheme);
}

function toggleTheme() {
  themeBtn.classList.toggle('themeBtnMove');
  const colorTheme = document.querySelectorAll('.allColorTheme');

  document.body.classList.toggle('darkTheme');
  formOrder.classList.toggle('darkThemebg');
  colorTheme.forEach(theme => {
    theme.classList.toggle('darkTheme');
  });
}

/** ****************************************************************************
 ******************************** LOGIC **************************************
 ******************************************************************************
 */

// Nav menu open
hamburgerMenu.addEventListener('click', toggleMenu);

// ShoppingCart open/close eventlisteners
shoppingCart.addEventListener('click', toggleShoppingCartOpenState);
shoppingClose.addEventListener('click', toggleShoppingCartOpenState);

// Remove donut from shopping cart eventlistener
removeShoppingCart.addEventListener('click', emptyShoppingCart);

// Discount code eventlistener
discountCodeBtn.addEventListener('click', superDiscountCode);

// Form eventlisteners
formOpenBtn.addEventListener('click', formOrderOpen);
formCloseBtn.addEventListener('click', formOrderClose);
cardRadio.addEventListener('change', cardPaymentOpen);
invoiceRadio.addEventListener('change', fakturaPaymentOpen);

// Form inputs, add event listeners
for (let i = 0; i < formOrderInputs.length; i++) {
  formOrderInputs[i].addEventListener('change', checkInputNotEmpty);
}
// Function-call higher donut price on weekend
specialPriceWeekend();
// Function-call to write out donuts
writeOutDonuts();
// Function-call to write out sorting-iconsw
writeOutSortProducts();
// Function Call to wtie out theme-toggle
writeOutToggleTheme();

christmasSpecial();
