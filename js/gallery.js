let current = 0;

const img = document.getElementById("galleryImage");
const heading = document.getElementById("galleryHeading");
const caption = document.getElementById("galleryCaption");

function showPhoto(index){

    img.style.opacity = 0;

    setTimeout(() => {

        img.src = GALLERY[index].image;
        heading.textContent = GALLERY[index].title;
        caption.textContent = GALLERY[index].caption;

        img.style.opacity = 1;

    },250);

}

document.getElementById("nextBtn").onclick = () => {

    current++;

    if(current >= GALLERY.length){

        current = 0;

    }

    showPhoto(current);

}

document.getElementById("prevBtn").onclick = () => {

    current--;

    if(current < 0){

        current = GALLERY.length - 1;

    }

    showPhoto(current);

}

showPhoto(current);

setInterval(() => {

    current = (current + 1) % GALLERY.length;

    showPhoto(current);

},5000);