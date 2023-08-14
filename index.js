const audioElement = document.getElementById('audio-player')
const togglePlayer = document.querySelector('[data-toggle-player]')
const backwordPlay = document.querySelector('[data-backword]')
const forwordPlay = document.querySelector('[data-forword]')
const audioTrack = document.getElementById('audio-track')

// Toggle play/pause on click
togglePlayer.addEventListener('click', () => {

    const icon = togglePlayer.firstElementChild

    const isPlayingAfterToggle = toggleMediaPlayer(audioElement, audioElement.paused)

    icon.classList.toggle("fa-play", !isPlayingAfterToggle)
    icon.classList.toggle("fa-pause", isPlayingAfterToggle)

})

// Update progress bar as audio plays
audioElement.addEventListener('timeupdate', ({ target:player }) => {
    const audioTime = player.currentTime / player.duration * 100
    audioTrack.style.setProperty('--audio-played', `${audioTime}%`)
})

// Update buffer progress as audio loads
audioElement.addEventListener('progress', ({ target:player }) => {
    const loadedTrack = claculatBufferEnd( player )
    audioTrack.style.setProperty('--audio-playable', `${loadedTrack}%`)
})

// Calculate buffered progress percentage
function claculatBufferEnd( player ) {
    const buffered = player.buffered
    const bufferedLength = buffered.length
    if (bufferedLength <= 0) return

    const lastEndTime = buffered.end(bufferedLength - 1)
    const loadedTrack = lastEndTime / player.duration * 100

    return loadedTrack
}

// Toggle play/pause of the media player
function toggleMediaPlayer(playerElement, paused = true) {
    if (paused) {
        playerElement.play()
        return true
    }

    playerElement.pause()
    return false
}

// Skip forward by 10 seconds
forwordPlay.addEventListener('click', ()=> {
    audioElement.currentTime += 10
})

// Skip backward by 10 seconds
backwordPlay.addEventListener('click', ()=> {
    audioElement.currentTime -= 10
})