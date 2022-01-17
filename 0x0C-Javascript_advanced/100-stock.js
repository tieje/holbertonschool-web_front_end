const stock = {
  macbook: 2,
  iphone: 4
};
function processPayment (itemName) {
  stock[itemName]--;
  console.log('Payment is being processed for item '.concat(itemName));
}
function processError (itemName) {
  console.log('No more '.concat(itemName, ' in stock'));
  console.log('Payment is not being processed');
}
function processOrder (itemName, callbackPayment, callbackError) {
  console.log('Verifying the stock '.concat(itemName));
  if (stock[itemName] > 0) {
    callbackPayment(itemName);
  } else {
    callbackError(itemName);
  }
}
const quest = window.prompt('Please enter the item you would like to purchase (Macbook, iPhone)');
processOrder(quest.toLowerCase(), processPayment, processError);
