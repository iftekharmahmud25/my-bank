document.getElementById('btn-deposit').addEventListener('click', function(){

const depositField = document.getElementById('deposit-field');
const depositAmount = depositField.value;

const depositTotalElement = document.getElementById('deposit-total');
const totalDeposit = depositTotalElement.innerText;


depositTotalElement.innerText   =  depositAmount;




})