const welcome = (firstName, lastName) => {
  const fullName = firstName.concat(' ', lastName);
  const displayFullName = (fname) => {
    window.alert('Welcome '.concat(fname));
  };
  displayFullName(fullName);
};
welcome('thomas', 'francis');
