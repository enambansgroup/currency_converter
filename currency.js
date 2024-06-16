let api = 'https://v6.exchangerate-api.com/v6/003dea6536dfde122de563a1/latest/USD';
const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");


currencies.forEach ((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});


currencies.forEach ((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});
