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

/******************************************************************************
 ******************************** DONUTS **************************************
 ******************************************************************************
 */


 // List with objects of the donuts
const donuts = [
  {
    name: 'Pepparkaka',
    price: 24,
    rating: 3,
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
    rating: 2.5,
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
    rating: 1,
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
    rating: 4.5,
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
    rating: 3,
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
    rating: 2,
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
// Grabbing the container from HTML to write out the donuts in.
const donutContainer = document.querySelector('#donutContainer');

// Function that writes out the donuts in HTML
function writeOutDonuts() {
  donutContainer.innerHTML = '';

  for (let i = 0; i < donuts.length; i++) {
    donutContainer.innerHTML += `

    <article class="donut">
        <div class="slideshow" id="slideshow">
        <div class="images">
            <img id="img1" class="img-1 donutImg-1-${i}"  src="${donuts[i].src1}" alt="${donuts[i].alt1}" width="100" height="150" />
            <img id="img2" class="img-2 donutImg-2-${i}" src="${donuts[i].src2}" alt="${donuts[i].alt2}" width="100" height="150" />
        </div>
            <div class="controls">
        <button class="left" id="prevImage" data-id="${i}">
          <span  class="material-symbols-outlined">chevron_left</span>
        </button>

        <button class="right" id="nextImage" data-id="${i}">
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
    
        <div class="indicator" id="indicatorDots"></div>
        </div>
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
      nextBtn.addEventListener('click', nextImageBtn);
    });
    document.querySelectorAll('button.left').forEach(prevBtn => {
      prevBtn.addEventListener('click', prevImage);
    });
  });
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

  // Object that pushes in to shopcartlist with the donut values
  const addedItem = {
    anyPrice: donuts[addToCartBtn].price,
    anyImg: donuts[addToCartBtn].src1,
    anyAlt: donuts[addToCartBtn].alt1,
    anyName: donuts[addToCartBtn].name,
    anyAmount: donuts[addToCartBtn].amount,
    anySum: donuts[addToCartBtn].sum,
  };
  // IF - the amount is 0 - do nothing
  if (donuts[addToCartBtn].amount == 0) {
    return;
  } else {
      // IF- the donut already exist in the shopcartlist - add amount and sum
    if (index > -1) {
      addShopCartList[index].anyAmount += donuts[addToCartBtn].amount;
      addShopCartList[index].anySum += donuts[addToCartBtn].sum;
    } else { // ELSE - add the donut to the list
      addShopCartList.push(addedItem); 
    }
  }

  printOutShopCart(addShopCartList.findIndex(element => element.anyName === donuts[addToCartBtn].name));
  setTimeout(clearValues, 500); 
  activateCheckoutSection();

  //UPPDATERAR totalt antal adderade donuts i varukorgen
  const donutAmountAddedShopCart = addShopCartList.reduce((previousValue, addShopCartList) => {
    return addShopCartList.anyAmount + previousValue;
  }, 0);
  document.querySelector('#shoppingCartTotalItems').innerHTML = donutAmountAddedShopCart;
  document.querySelector('#amountChoosen').innerHTML = donutAmountAddedShopCart;

  //UPPDATERAR total summa kr adderade donuts i varukorgen
  const donutSumAddedShopCart = addShopCartList.reduce((previousValue, addShopCartList) => {
    return addShopCartList.anySum + previousValue;
  }, 0);
  document.querySelector('#shoppingCartTotalAmount').innerHTML = donutSumAddedShopCart;
}

// Function that clears the values for the donuts when clicking the buy-button
function clearValues() {
  for (i = 0; i < donuts.length; i++) {
    donuts[i].amount = 0;
    donuts[i].sum = 0;
  }
  writeOutDonuts();
} 


/******************************************************************************
 ******************************** SLIDESHOW **************************************
 ******************************************************************************
 */

// Function that collects the Next image buttons-index
function nextImageBtn(e) {
  const nxtBtn = e.currentTarget.dataset.id;
  nextImage(nxtBtn);
}

// Function that swaps images to the Next image
function nextImage(nxtBtn) {
  const donutImg1 = document.querySelectorAll(`.donutImg-1-${nxtBtn}`);
  const donutImg2 = document.querySelectorAll(`.donutImg-2-${nxtBtn}`);

  console.log(donutImg1);

  if (donutImg2.style.opacity === 0) {
  
  donutImg2.style.opacity = '1';
  
  } else {
  
  // växla till bild1
  
  }
  }
  
// Function that swaps images Previous image
function prevImage() {
  if (currentImageIndex - 1 < 0) {
    currentImageIndex = donuts.length - 1;
  } else {
    currentImageIndex -= 1;
  }

  console.log('prevImage', currentImageIndex);
}

writeOutDonuts(); // Calling the functions to write out the donuts



/******************************************************************************
 ***************************THEME-TOGGLE***************************************
 ******************************************************************************
 */

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



/******************************************************************************
 ******************************** SHOPPINGCART ********************************
 ******************************************************************************
 */


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

  //TA BORT MUNKAR
  const removeDonuts = Array.from(document.querySelectorAll('#shopCartContent button'));
  removeDonuts.forEach(item => {
    item.addEventListener('click', removeAddedDonut);
  });

  //FUNKTION TA BORT MUNKAR PAPPERSKORG PER ARTIKEL
  function removeAddedDonut(e) {
    const i2 = e.currentTarget.dataset.id;
    if (i > -1) {
      addShopCartList.splice(i2, 1);
    }
    printOutShopCart();
    emptyCart();
  }
}



/******************************************************************************
 ******************************INPUT-FORM**************************************
 ******************************************************************************
 */


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


/******************************************************************************
 ********************************SORT-BY***************************************
 ******************************************************************************
 */

 // Function that writes out the HTML

function writeOutSortProducts() {
  let sortContainer = document.querySelector('#sortProducts');

  sortContainer.innerHTML += `
  <h3 id="sortBy">Sortera efter</h3>
  <ul aria-labelledby="sortBy">
    <li>
      <button id="sortByName" class="allColorTheme" aria-label="Sortera efter namn">
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
  <div id="sortByHeading"></div>`;

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

let nameSort = true;
let gradeSort = true;
let priceSort = true;
let categorySort = true;

// Functions for Sort-by

function sortByNameBtn() {
  sortByHeading.innerHTML = `
  <p>Sorterar efter Namn</p>
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
  <p>Sorterar efter Betyg</p>
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
    <p>Sorterar efter Pris stigande</p>
    `;
    donuts.sort((a, b) => a.price - b.price);
    priceSort = false;
    writeOutDonuts();
  } else if (priceSort == false) {
    sortByHeading.innerHTML = `
      <p>Sorterar efter Pris fallande</p>
      `;
    donuts.sort((a, b) => b.price - a.price);
    priceSort = true;
    writeOutDonuts();
  }
}

function sortByCategoryBtn() {
  sortByHeading.innerHTML = `
  <p>Sorterar efter Kategori</p>
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
writeOutDonuts();
writeOutSortProducts();


