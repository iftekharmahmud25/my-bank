document.getElementById('btn-submit').addEventListener('click', function(){

    const emilField = document.getElementById('user-email');
    const email = emilField.value;
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
   
    if(email === 'iftekharmahmud98@gmail.com' && password === 'secret')
    {
        window.location = 'bank.html'
    }

    else{
        alert('Invalid User');
    }



})