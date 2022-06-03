const input = require('sync-input');

const currencies = {
  USD: 1.0,
  JPY: 113.5,
  EUR: 0.89,
  RUB: 74.36,
  GBP: 0.75,
};

const currencyName = Object.keys(currencies);
const currencyValue = Object.values(currencies);

const printCurrencies = (name, value) => {
  console.log('Welcome to Currency Converter!');
  let currencies = [];
  for (let i = 0; i < 5; i++) {
    currencies.push(`${value[i]} ${name[i]}`);
  }
  currencies.forEach((currency) => {
    console.log(`1 USD equals  ${currency}`);
  });
};

printCurrencies(currencyName, currencyValue);

function makeChoice() {
  console.log('What do you want to do?');
  choice = input('1-Convert currencies 2-Exit program\n');
  switch (choice) {
    case '1':
      convertCurrency();
      break;
    case '2':
      console.log('Have a nice day!');
      break;
    default:
      console.log('Unknown input');
      makeChoice();
  }
}

function convertCurrency() {
  console.log('What do you want to convert?');

  const convertFrom = input(`From: `);
  const inputCurrency = convertFrom.toUpperCase();
  if (!currencies.hasOwnProperty(inputCurrency)) {
    console.log('Unknown currency');
    makeChoice();
  }

  const convertTo = input(`To: `);
  const targetCurrency = convertTo.toUpperCase();
  if (!currencies.hasOwnProperty(targetCurrency)) {
    console.log('Unknown currency');
    makeChoice();
  }

  const amount = input(`Amount: `);
  const userAmount = Number(amount);
  if (userAmount < 1) {
    console.log('The amount can not be less than 1.');
    makeChoice();
  }
  if (isNaN(userAmount)) {
    console.log('The amount has to be a number');
    makeChoice();
  }

  const result = (
    (userAmount / currencies[inputCurrency]) *
    currencies[targetCurrency]
  ).toFixed(4);

  console.log(
    `Result: ${userAmount} ${inputCurrency} equals ${result} ${targetCurrency}`
  );
  makeChoice();
}

makeChoice();
