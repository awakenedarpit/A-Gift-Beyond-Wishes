// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";
        loader.style.transition = "1s";

        setTimeout(() => {

            loader.style.display = "none";
            document.body.style.overflow = "auto";

        }, 1000);

    }, 3000);

});


// ==========================
// MUSIC
// ==========================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.onclick = () => {

    if (!playing) {

        music.play();
        musicBtn.innerHTML = "🔊";
        playing = true;

    } else {

        music.pause();
        musicBtn.innerHTML = "🎵";
        playing = false;

    }

};


// ==========================
// BEGIN BUTTON
// ==========================

const beginBtn = document.getElementById("beginBtn");

beginBtn.addEventListener("click", () => {

    music.play();
    playing = true;
    musicBtn.innerHTML = "🔊";

   beginBtn.innerHTML="✨Welcome Mahima ✨";
});

});


// ==========================
// SHOOTING STARS
// ==========================

function createStar() {

    const star = document.createElement("div");

    star.classList.add("shooting-star");

    star.style.top = Math.random() * 40 + "%";
    star.style.left = "-100px";

    document.body.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 2500);

}

setInterval(createStar, 5000);


// ==========================
// FLOATING HEARTS
// ==========================

document.addEventListener("click", (e) => {

    const heart = document.createElement("span");

    heart.innerHTML = "💖";

    heart.className = "heart";

    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 2000);

});




// ==========================
// LETTER SCENE
// ==========================

const hero = document.getElementById("hero");
const letterSection = document.getElementById("letterSection");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const typingText = document.getElementById("typingText");

const message = `Happy Birthday, Mahima! 🎂💖

Today is all about celebrating an amazing friend who brings happiness wherever she goes.

Thank you for being such a wonderful person. I hope this new year of your life is filled with beautiful memories, success, laughter, and countless reasons to smile.

May all your dreams come true and may your heart always stay as kind as it is today.

Enjoy every moment of your special day.

Happy Birthday once again!

— Arpit Raj ❤️`;

beginBtn.addEventListener("click", () => {
hero.style.display="none";
letterSection.classList.remove("hidden");
    
});

envelope.addEventListener("click", () => {

    envelope.style.display = "none";
    letter.classList.remove("hidden");

    let i = 0;

    function type(){

        if(i < message.length){

            typingText.innerHTML += message.charAt(i);
            i++;

            setTimeout(type,35);

        }

    }

    type();

});



// ABOUT SECTION

const aboutSection = document.getElementById("aboutSection");

const galleryBtn = document.getElementById("galleryBtn");

function openAbout(){

    letterSection.style.display="none";

    aboutSection.classList.remove("hidden");

}

setTimeout(()=>{

    envelope.addEventListener("dblclick",()=>{

        openAbout();

    });

},100);


