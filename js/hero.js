document.addEventListener("DOMContentLoaded", () => {

const name=document.getElementById("recipientName");

name.innerText=CONFIG.recipient.name;

const btn=document.getElementById("startJourney");

btn.addEventListener("click",()=>{

document.getElementById("letter")
.scrollIntoView({

behavior:"smooth"

});

});

});