let lastWithdraw = document.getElementById('lastWithdraw');
let lastDeposit = document.getElementById('lastDeposit');
let balance = document.getElementById('balance');
let withdraw = document.getElementById('withdraw');
let deposit = document.getElementById('deposit');

let withdrawBtn = document.getElementById('withdrawBtn');
let depositBtn = document.getElementById('depositBtn');


withdrawBtn.addEventListener('click', function(){

    if(withdraw.value < 0 || withdraw.value > balance.innerText){
        if(withdraw.value < 0){document.getElementById('invalid1').style.display = 'block';
        lastWithdraw.innerText = '00'; }
       else if(withdraw.value > balance.innerText)
             document.getElementById('insufficient1').style.display = 'block'; 
        //  balance.innerText = '00';
     }

if(withdraw.value > 0 && balance.innerText >= withdraw.value){
    lastWithdraw.innerText = withdraw.value;
    balance.innerText = balance.innerText - withdraw.value;
    document.getElementById('insufficient1').style.display = 'none'; 

    withdraw.value = '';
}

})



depositBtn.addEventListener('click', function(){

    if(deposit.value < 0){document.getElementById('invalid2').style.display = 'block';
   lastWithdraw.innerText = '00';}

    else if(deposit.value > 0){
    lastDeposit.innerText = deposit.value;
    balance.innerText = parseFloat(balance.innerText) + parseFloat(deposit.value);
    if(balance.innerText > withdraw.value){
        document.getElementById('insufficient1').style.display = 'none'; 
    }
    document.getElementById('invalid2').style.display = 'none';
    deposit.value ='';

}


})


