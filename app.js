const sum = document.querySelector('#mortgageSum');
const percent = document.querySelector('#mortgagePercent');
const ages = document.querySelector('#mortgageAges');
const button = document.querySelector('.calculator__button');
const results = document.querySelector('.results');


button.addEventListener('click', displayResult);

function displayResult() {
        const   q = 1 + (percent.value / 100) / 12,
                R = sum.value * Math.pow(q, ages.value).toPrecision(6) * ((q-1) / (Math.pow(q, ages.value)-1).toPrecision(6));


        const text  = document.createElement('h3'),
              spanValue = document.createElement('span'),
              spanCurrency = document.createElement('span');

        results.firstChild.remove();


        console.log(results.firstChild);


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