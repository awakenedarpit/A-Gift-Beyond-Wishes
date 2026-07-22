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

    beginBtn.innerHTML = "✨ Welcome Mahima ✨";

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