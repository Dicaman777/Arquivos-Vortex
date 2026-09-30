document.addEventListener('DOMContentLoaded', function() {
    initializeMusicPlayer();
});

let audioPlayer = null;
let isPlaying = false;

function initializeMusicPlayer() {
    audioPlayer = new Audio('./MRD.mp3');
    audioPlayer.loop = true;

    audioPlayer.addEventListener('loadedmetadata', function() {
        updateDurationDisplay();
    });

    audioPlayer.addEventListener('timeupdate', function() {
        updateProgressBar();
        updateCurrentTimeDisplay();
    });

    audioPlayer.addEventListener('play', function() {
        setPlayingState(true);
    });

    audioPlayer.addEventListener('pause', function() {
        setPlayingState(false);
    });

    document.getElementById('musicLauncher').addEventListener('click', togglePlayer);
    document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);
    document.getElementById('restartBtn').addEventListener('click', restartMusic);
    document.getElementById('closePlayerBtn').addEventListener('click', closePlayer);
    document.getElementById('progressBar').addEventListener('input', seekAudio);
}

function togglePlayer() {
    const player = document.getElementById('musicPlayer');
    const launcher = document.getElementById('musicLauncher');
    const widget = document.getElementById('musicWidget');
    const isOpening = player.hidden;

    if (!isOpening) {
        closePlayer();
        return;
    }

    player.hidden = !isOpening;
    launcher.setAttribute('aria-expanded', String(isOpening));
    widget.classList.toggle('is-open', isOpening);

    if (isOpening && audioPlayer.paused) {
        audioPlayer.play().catch(function() {
            setPlayingState(false);
        });
    }
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play().catch(function() {
            setPlayingState(false);
        });
    } else {
        audioPlayer.pause();
    }
}

function setPlayingState(playing) {
    isPlaying = playing;
    document.getElementById('musicWidget').classList.toggle('is-playing', playing);
    document.querySelector('.play-icon').hidden = playing;
    document.querySelector('.pause-icon').hidden = !playing;
    document.getElementById('playPauseBtn').setAttribute('aria-label', playing ? 'Pausar' : 'Reproduzir');
}

function restartMusic() {
    audioPlayer.currentTime = 0;
    updateCurrentTimeDisplay();
    updateProgressBar();
    if (audioPlayer.paused) {
        togglePlayPause();
    }
}

function closePlayer() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    updateCurrentTimeDisplay();
    updateProgressBar();
    document.getElementById('musicPlayer').hidden = true;
    document.getElementById('musicLauncher').setAttribute('aria-expanded', 'false');
    document.getElementById('musicWidget').classList.remove('is-open');
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    if (audioPlayer.duration) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;
    }
}

function updateCurrentTimeDisplay() {
    const currentTimeElement = document.getElementById('currentTime');
    currentTimeElement.textContent = formatTime(audioPlayer.currentTime);
}

function updateDurationDisplay() {
    const durationElement = document.getElementById('duration');
    if (audioPlayer.duration) {
        durationElement.textContent = formatTime(audioPlayer.duration);
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function seekAudio() {
    const progressBar = document.getElementById('progressBar');
    if (audioPlayer.duration) {
        const seekTime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = seekTime;
    }
}