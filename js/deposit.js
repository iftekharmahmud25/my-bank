document.getElementById('btn-deposit').addEventListener('click', function(){

const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);

const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalStaring = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalStaring);

const currentDepositTotal = newDepositAmount + previousDepositTotal;

 depositTotalElement.innerText   =  currentDepositTotal;


const balanceTotalElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal  = parseFloat(previousBalanceTotalString);
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;  
balanceTotalElement.innerText = currentBalanceTotal;


 depositField.value = '';
})