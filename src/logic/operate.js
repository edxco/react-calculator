import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const [one, two] = [Big(numberOne), Big(numberTwo)];
  let result;

  switch (operation) {
    case '+':
      result = one + two;
      break;
    case '-':
      result = one - two;
      break;
    case 'X':
      result = one * two;
      break;
    case '÷':
      result = one / two;
      break;
    case '%':
      result = (one.div(100)).times(two);
      break;
    default:
      result = null;
  }

  return result.toString();
};

export default Operate;
