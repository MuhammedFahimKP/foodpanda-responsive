const popup=document.getElementById('pop-up');
const collapse=document.getElementById('mobile-menu');
const mobileBtn=document.getElementById('mobile-btn');
function openPopup(){
    popup.style.visibility='visible';
    
}

function closePopup(){
    popup.style.visibility='hidden';
}

function mobileup(){
    if(mobileBtn.innerText=='☰'){
    collapse.style.visibility='visible';
    mobileBtn.innerHTML='❌';
    }else{
        collapse.style.visibility='hidden';
        mobileBtn.innerHTML='☰';
    }
}
console.log(mobileBtn.innerText=='☰')