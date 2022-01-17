const welcomeMessage = (fullName) => {
  window.alert('Welcome '.concat(fullName));
};
const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');
guillaume();
alex();
fred();
