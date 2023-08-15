document.getElementById('loginBtn').addEventListener('click', function(){
    let emailInfo = document.getElementById('email').value;
   let passInfo = document.getElementById('password').value;

   if(passInfo.length >= 8 && emailInfo.includes('@') && emailInfo.endsWith('.com')){
            location.href = 'user-account.html'
         
   }
   else{
    if( (emailInfo.includes('@') && emailInfo.endsWith('.com')) === false ){
        document.getElementById('error1').innerText = 'Please enter a valid email address';
    } else{document.getElementById('error1').style.display = 'none'}
    if(passInfo.length < 8 ){
        document.getElementById('error2').innerText = 'Please enter a valid password';
    } else{
        document.getElementById('error2').style.display = 'none'
    }
   }
})

document.getElementById('eye').addEventListener('click', function(){
    if(document.getElementById('password').type === 'password')
    {document.getElementById('password').type = 'text'}
    else{document.getElementById('password').type = 'password'}
}

)