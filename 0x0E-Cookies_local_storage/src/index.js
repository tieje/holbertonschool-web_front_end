import Cookies from 'js-cookie';
const $ = require('jquery');
Cookies.remove('firstname');
Cookies.remove('email');
window.setCookies = () => {
  Cookies.set('firstname', $('#firstname').val(), { expires: 10 });
  Cookies.set('email', $('#email').val(), { expires: 10 });
};

// task 0 and 1

window.showCookies = () => {
  const allCookies = Cookies.get();
  Object.keys(allCookies).forEach((key) => {
    $('body').append(`
        <p id="cookies-container">
        ${key}: ${allCookies[key]}
        </p>`);
  });
};

// task 2

window.showCookies2 = () => {
  const email = window.getCookie('email');
  const firstname = window.getCookie('firstname');
  if ($('#cookies-container').length === 0 &&
    email && firstname) {
    $('body').append(`
      <p id="cookies-container">
      Email: ${email} - Firstname: ${firstname}
      </p>`);
  }
};
window.getCookie = (name) => {
  const value = Cookies.get(name);
  if (value) {
    return (value);
  } else {
    return ('');
  }
};

// Task 3

window.showForm = () => {
  const form = `
  <div id="login-form">
  <h2>Login to the website</h2>
  <input id="firstname" placeholder="Firstname" />
  <input id="email" placeholder="Email" />
  <button onclick="showWelcomeMessageOrForm()">Log me in</button>
  </div>
  `;
  $('body').html(form);
};
window.hideForm = () => {
  $('#login-form').remove();
};
window.deleteCookiesAndShowForm = () => {
  const cookieDelete = ['firstname', 'email'];
  cookieDelete.forEach((cook) => {
    Cookies.remove(cook);
  });
  window.showForm();
};
window.showWelcomeMessageOrForm = () => {
  window.setCookies();
  const firstName = Cookies.get('firstname');
  const email = Cookies.get('email');
  if (firstName === undefined || email === undefined) {
    window.showForm();
  } else {
    $('body').html(
      `<h1 id="welcome">Welcome ${firstName} <a href="#"
      onClick="javascript:deleteCookiesAndShowForm()"
      style="font-weight:normal;font-style:italic;margin-left:10px;text-decoration:none;color: inherit;"
      >(logout)</a></h1>`
    );
  }
};

// task 4

window.setCookiesAndshowWelcomeMessageOrForm = () => {
  window.setCookies();
  window.showWelcomeMessageOrForm();
};
// task 5

const availableItems = ['Shampoo', 'Soap', 'Sponge', 'Water'];

function lsTest () {
  const test = 'test';
  try {
    window.localStorage.setItem(test, test);
    window.localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}
window.buildLocalStore = () => {
  if (lsTest()) {
    createStore();
    displayCart();
  } else {
    $('body').remove();
    window.alert('Sorry, your browser does not support Web storage. Try again with a better one');
  }
};
window.addItemToCart = (item) => {
  console.log(item + ' added to cart');
  window.localStorage.setItem(item, true);
};
function createStore () {
  $('body').append('<ul>');
  availableItems.forEach((item) => {
    $('ul').append(`<li>
    <a style="color:inherit;text-decoration:none;"
    href="#"
    onclick="addItemToCart('${item}')">${item}</a>
    </li>`);
  });
}
function displayCart () {
  console.log(window.localStorage);
  let itemsAmt = 0;
  availableItems.forEach((item) => {
    if (window.localStorage.getItem(item)) {
      itemsAmt++;
    }
  });
  if (itemsAmt > 0) {
    $('body').append(`<p>You previously had ${itemsAmt} items in your cart`);
  }
}
// Task 6

function sTest () {
  const test = 'test';
  try {
    window.sessionStorage.setItem(test, test);
    window.sessionStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

window.buildSessionStore = () => {
  if (sTest()) {
    createSessionStore();
    displaySessionCart();
  } else {
    $('body').remove();
    window.alert('Sorry, your browser does not support Web storage. Try again with a better one');
  }
};
window.addItemToSessionCart = (item) => {
  console.log(item + ' added to cart');
  console.log(window.sessionStorage);
  window.sessionStorage.setItem(item, true);
};
function createSessionStore () {
  $('body').append('<ul>');
  availableItems.forEach((item) => {
    $('ul').append(`<li>
    <a style="color:inherit;text-decoration:none;"
    href="#"
    onclick="addItemToSessionCart('${item}')">${item}</a>
    </li>`);
  });
}
function displaySessionCart () {
  console.log(window.sessionStorage);
  let itemsAmt = 0;
  availableItems.forEach((item) => {
    if (window.sessionStorage.getItem(item)) {
      itemsAmt++;
    }
  });
  if (itemsAmt > 0) {
    $('body').append(`<p>You previously had ${itemsAmt} items in your cart`);
  }
}

// Task 7

window.buildSessionStoreTwo = () => {
  if (sTest()) {
    createSessionStore();
    displaySessionCart();
  } else {
    $('body').remove();
    window.alert('Sorry, your browser does not support Web storage. Try again with a better one');
  }
};

function getCartFromStorage () {
  const SStore = window.sessionStorage;
  return SStore.length > 0 ? SStore : {};
}

window.addItemToCartTwo = (item) => {
  const SStore = window.sessionStorage;
  if (SStore[item]) {
    SStore[item]++;
  } else {
    SStore[item] = 1;
  }
  displayCartTwo();
};

window.removeItemFromCart = (item) => {
  const SStore = window.sessionStorage;
  SStore.removeItem(item);
  displayCartTwo();
};

window.clearCart = () => {
  console.log('Clearing session storage');
  const SStore = window.sessionStorage;
  SStore.clear();
  updateCart();
};

window.createStoreTwo = () => {
  $('body').append('<h2>Available products:</h2><ul></ul>');
  availableItems.forEach((item) => {
    $('ul').append(`<li id="${item}">
    <a style="color:inherit;text-decoration:none;"
    href="#"
    onclick="addItemToCartTwo('${item}')">${item}</a>
    </li>`);
  });
};

function displayCartTwo () {
  if ($('body div').length === 0) {
    $('body').append('<div><h2>Your cart:</h2></div>');
  }
  updateCart();
}

function updateCart () {
  const cart = getCartFromStorage();
  console.log(cart);
  console.log(Object.keys(cart).length === 0);
  console.log(Object.keys(cart).length);
  if (Object.keys(cart).length === 0) {
    $('div ul').remove();
    $('div').append('<ul>');
    $('div ul').html('<li id="cart-empty">Your cart is empty</li>');
  } else {
    $('div ul').remove();
    $('body div').append('<ul id="cart-items"></ul>');
    console.log('prior to appending');
    Object.keys(cart).forEach((key) => {
      console.log('appending item');
      $('div ul').append(`<li>
      ${key} x ${cart[key]} <a
      href="#" style="color:inherit;text-decoration:none"
      onclick="removeItemFromCart('${key}')">remove</a>
      </li>`);
    });
    $('#cart-items').prepend(`<li><a
    href="#" style="color:inherit;text-decoration:none"
    onclick="clearCart()">Clear my cart</a>
    </li>`);
  }
}
