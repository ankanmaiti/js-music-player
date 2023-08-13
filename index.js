const audioPlayer = document.getElementById('audio-player')
const playStatus = document.querySelector('[data-play]')
const backwordPlay = document.querySelector('[data-backword]')
const forwordPlay = document.querySelector('[data-forword]')
const audioTrack = document.getElementById('audio-track')


playStatus.addEventListener('click', event => {

    const icon = playStatus.firstElementChild

    if (playStatus.dataset.play == "false") {
        playStatus.dataset.play = "true"
        audioPlayer.play()

        icon.classList.replace("fa-play", "fa-pause")
    } else {
        audioPlayer.pause()
        playStatus.dataset.play = "false"

        icon.classList.replace("fa-pause", "fa-play")
    }
})


audioPlayer.addEventListener('timeupdate', event => {
    const audioTime = audioPlayer.currentTime / audioPlayer.duration * 100
    audioTrack.style.setProperty('--handle-position', `${audioTime}%`)
})