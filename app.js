const sum = document.querySelector('#mortgageSum'),
      percent = document.querySelector('#mortgagePercent'),
      months = document.querySelector('#mortgageMonths'),
      button = document.querySelector('.calculator__button'),
      radioYear = document.querySelector('#yearsChoice'),
      radioMonth = document.querySelector('#monthsChoice'),
      results = document.querySelector('.results'),
      textFromLabel = document.querySelector('.calculator__label--month');

radioYear.addEventListener('click', function() {
        textFromLabel.innerHTML = "Ilość lat hipoteki";
})
radioMonth.addEventListener('click', function() {
        textFromLabel.innerHTML = "Ilość miesięcy hipoteki";
})

button.addEventListener('click', displayResult);

function displayResult() {
        
        const q = 1 + (percent.value / 100) / 12;
        let R = sum.value * Math.pow(q, months.value).toPrecision(6) * ((q-1) / (Math.pow(q, months.value)-1).toPrecision(6));


        const text  = document.createElement('h3'),
              spanValue = document.createElement('span'),
              spanCurrency = document.createElement('span');

        results.firstChild.remove();

        if(radioYear.checked == true) {
                radioYearEvent;
        }
        
        

        text.classList.add('results__text');
        spanValue.classList.add('results__value');
        spanCurrency.classList.add('results__currency');
    
        text.innerHTML = 'Twoja rata wynosi: ';
        spanValue.innerHTML = R.toPrecision(6);
        spanCurrency.innerHTML = ' PLN';
    
        text.appendChild(spanValue);
        text.appendChild(spanCurrency);
        results.appendChild(text);
}




    // PATTERN!
    // q == 1 + percent.value / 12
    // R = sum.value * Math.pow(q, ages.value) * (q-1) / (Math.pow(q, ages.value)-1)