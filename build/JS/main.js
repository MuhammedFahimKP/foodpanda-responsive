let SliderCntr=document.getElementById('slider-cntr');
let slider=document.getElementById('slider');
let card=document.getElementsByTagName('aside');
let elementsToShow=4;
if(document.body.clientWidth>=768 && document.body.clientWidth<1000){
   elementsToShow=2;
}else if(document.body.clientWidth<768){
   elementsToShow=1;
}
let SliderCntrWidth=SliderCntr.clientWidth;
let cardWidth=SliderCntrWidth/elementsToShow;

slider.style.width = card.length*cardWidth+'px';

for(let index=0;index<card.length;index++){
   const element = card[index];
   element.style.width=cardWidth+'px';
}


function next(){
   if((+slider.style.marginLeft.slice(0,-2))!=-cardWidth*(card.length-elementsToShow)){
   slider.style.marginLeft= ((+slider.style.marginLeft.slice(0,-2))-cardWidth)+'px';
   }
   
}

function prev(){
   if((+slider.style.marginLeft.slice(0,-2))!=0)
   slider.style.marginLeft= ((+slider.style.marginLeft.slice(0,-2))+cardWidth)+'px';
}