
const sum = document.querySelector('#mortgageSum'),
      percent = document.querySelector('#mortgagePercent'),
      months = document.querySelector('#mortgageMonths'),
      button = document.querySelector('.calculator__button'),
      radioYear = document.querySelector('#yearsChoice'),
      radioMonth = document.querySelector('#monthsChoice'),
      results = document.querySelector('.results'),
      textFromLabel = document.querySelector('.calculator__label--month'),
      history = document.querySelector('.history');
      error = document.querySelector('.error');

let arrayOfResults = [];

radioYear.addEventListener('click', function() {
        textFromLabel.innerHTML = "Ilość lat hipoteki";
})
radioMonth.addEventListener('click', function() {
        textFromLabel.innerHTML = "Ilość miesięcy hipoteki";
})
button.addEventListener('click', validator);

function calculate() {
        
        const q = 1 + (percent.value / 100) / 12;
        let R = sum.value * Math.pow(q, months.value).toPrecision(6) * ((q-1) / (Math.pow(q, months.value)-1).toPrecision(6));

        if(radioYear.checked == true) {
                const ages = months.value * 12
                R = sum.value * Math.pow(q, ages).toPrecision(6) * ((q-1) / (Math.pow(q, ages)-1).toPrecision(6));
        }

        arrayOfResults.push(R);

        displayResult(R);
        historyFromResults();
}
function displayResult(result) {
        const text  = document.createElement('h3'),
              spanValue = document.createElement('span'),
              spanCurrency = document.createElement('span');

        results.firstChild.remove();
        
        text.classList.add('results__text');
        spanValue.classList.add('results__value');
        spanCurrency.classList.add('results__currency');
    

        text.innerHTML = 'Twoja rata wynosi: ';
        spanValue.innerHTML = result.toPrecision(6);
        spanCurrency.innerHTML = ' PLN';
    
        text.appendChild(spanValue);
        text.appendChild(spanCurrency);
        results.appendChild(text);
}
function historyFromResults() {
                const content = document.createElement('div'),
                      number = document.createElement('p');

                content.classList.add('history__content');
                number.classList.add('history__number');

                number.innerHTML = arrayOfResults[arrayOfResults.length - 1];

                content.appendChild(number);
                history.appendChild(content);
}
function validator() {
        if(sum.value && percent.value && months.value) {
                calculate()
        } else {
                displayError('Brak podanych wartości!');
        }
}

function displayError(name) {
//   error.firstChild.remove();
        
  const container = document.createElement('div'),
      paragraph = document.createElement('p');

  container.classList.add('error__container');
  paragraph.classList.add('error__paragraph');

  paragraph.innerHTML = name;

  container.appendChild(paragraph);
  error.appendChild(container); 

  setTimeout(() => {
        error.firstChild.remove();
  }, 1000);
}



    // PATTERN!
    // q == 1 + percent.value / 12
    // R = sum.value * Math.pow(q, ages.value) * (q-1) / (Math.pow(q, ages.value)-1)