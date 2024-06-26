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

    // Floating Play Button Functionality
    const playButton = document.getElementById('floating-play-btn');
    const audio = document.getElementById('background-music');
    const icon = playButton.querySelector('i');

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
        } else {
            audio.pause();
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }
    });
});