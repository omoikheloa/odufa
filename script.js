document.addEventListener('DOMContentLoaded', function() {
    const imgs = document.getElementById('imgs');
    const img = document.querySelectorAll('#imgs img');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const backgroundMusic = document.getElementById('background-music');
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

    const albumArts = document.querySelectorAll('.album-art');
    const popup = document.getElementById('albumPopup');
    const close = document.querySelector('.popup-modal .close');

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

    backgroundMusic.play().catch(function(error) {
        console.log('Playback failed: ' + error);
    });

    playButton.addEventListener('click', function() {
        backgroundMusic.play().catch(function(error) {
            console.log('Playback failed: ' + error);
        });
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline';
    });

    pauseButton.addEventListener('click', function() {
        backgroundMusic.pause();
        playButton.style.display = 'inline';
        pauseButton.style.display = 'none';
    });
