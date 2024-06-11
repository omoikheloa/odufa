const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs img');

let idx = 0;
let interval = setInterval(run, 2000);

function run() {
    idx++;
    changeImage();
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 300}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, 9000);
}

document.addEventListener('DOMContentLoaded', function() {
    var albumArts = document.querySelectorAll('.album-art');
    var popup = document.getElementById('albumPopup');
    var close = document.querySelector('.popup-modal .close');

    albumArts.forEach(function(art) {
        art.addEventListener('click', function() {
            popup.style.display = 'block';
        });
    });

    close.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});
