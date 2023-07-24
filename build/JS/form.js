const from=document.getElementById('form');
const email=document.getElementById('email');
const namefield=document.getElementById('name');
const warning=document.getElementById('email-warn');
function emailcheck(){
    if(!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        console.log('hai');
        warning.innerHTML="invalid email";
        email.style.border='1px solid red';
    }else{
        console.log(`hey`);
        warning.innerHTML="";
        email.style.border='1px solid green'
    }
    
}