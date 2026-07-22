const candles=document.querySelectorAll(".candle");

let blown=0;

candles.forEach(candle=>{

candle.onclick=()=>{

candle.innerHTML="💨";

candle.style.pointerEvents="none";

blown++;

if(blown===candles.length){

celebrate();

}

}

});

function celebrate(){

confetti({

particleCount:200,

spread:120

});

document.getElementById("giftBtn")

.classList.remove("hidden");

}