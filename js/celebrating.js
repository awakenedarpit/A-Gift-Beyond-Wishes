const qualities = [

{
icon:"😊",
title:"Your Smile",
text:"May your smile always brighten every room you walk into."
},

{
icon:"🌸",
title:"Your Kindness",
text:"Kindness is one of the most beautiful qualities a person can have."
},

{
icon:"✨",
title:"Your Dreams",
text:"Keep believing in yourself. Your best days are still ahead."
},

{
icon:"🌈",
title:"Your Positivity",
text:"May you always find hope, even on difficult days."
},

{
icon:"🎂",
title:"Today Is Yours",
text:"Enjoy every moment of this special day—you deserve it."
}

];

const cardContainer = document.getElementById("cardContainer");

qualities.forEach((item,index)=>{

const card=document.createElement("div");

card.className="celebrate-card";

card.innerHTML=`

<div class="icon">${item.icon}</div>

<h3>${item.title}</h3>

<p>${item.text}</p>

`;

cardContainer.appendChild(card);

setTimeout(()=>{

card.classList.add("show");

},index*250);

});