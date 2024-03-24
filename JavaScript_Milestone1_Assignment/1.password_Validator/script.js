let enteredPassword = document.querySelector('#entered-password');
let confirmedPassword = document.querySelector('#confirmed-password');
let h2 = document.createElement('h2')
document.querySelector('.container').appendChild(h2);
const submit = document.querySelector('#submit');
submit.addEventListener('click',(e)=>{
    console.log(enteredPassword.value);
    console.log(confirmedPassword.value);
    if(enteredPassword.value === "" || confirmedPassword.value === ""){
        alert("Plese!Fill the both fields.");
    }
    else if(enteredPassword.value === confirmedPassword.value){
        h2.textContent = "Password Matched. Password validation Successful!"
        h2.style.color = "#008000";
    }
    else{
        h2.textContent = "Password didn't match. Password validation unsuccessful!"
        h2.style.color = "#ef2222";
    }
})
const reset = document.querySelector('#reset');
reset.addEventListener('click',(e)=>{
    enteredPassword.value = "";
    confirmedPassword.value = "";
    h2.textContent = "";
})





