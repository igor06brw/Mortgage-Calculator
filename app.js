const sum = document.querySelector('#mortgageSum');
const percent = document.querySelector('#mortgagePercent');
const ages = document.querySelector('#mortgageAges');
const button = document.querySelector('.calculator__button');


button.addEventListener('click', displayResult);

function displayResult() {
    if(sum.value == "" || percent.value == "" || ages.value == "") {
        
    }
    

    // q == 1 + percent.value / 12
    // R = sum.value * Math.pow(q, ages.value) * (q-1) / (Math.pow(q, ages.value)-1)

    const   q = 1 + (percent.value / 100) / 12,
            R = sum.value * Math.pow(q, ages.value).toPrecision(6) * ((q-1) / (Math.pow(q, ages.value)-1).toPrecision(6));

    console.log(q, R.toPrecision(6));
    console.log(Math.pow(q, ages.value));
}