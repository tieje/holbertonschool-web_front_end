const globalVariable = 'Welcome';
const outer = () => {
  window.alert(globalVariable);
  const course = 'Holberton';
  const inner = () => {
    window.alert(globalVariable.concat(' ', course));
    const exclamation = '!';
    const inception = () => {
      window.alert(globalVariable.concat(' ', course, exclamation));
    };
    inception();
  };
  inner();
};
outer();
