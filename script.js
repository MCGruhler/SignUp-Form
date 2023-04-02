
function checkPwds(){
    let pwd1 = document.getElementById('pwd1');
    let pwd2 = document.getElementById('pwd2');

    console.log(pwd1.value);
    console.log(pwd2.value);
        if (pwd1.value == pwd2.value){
            pwd2.setCustomValidity('');
        } else{
            pwd2.setCustomValidity('invalid');
        }
    }
