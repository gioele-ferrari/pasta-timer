var pasta_audio_dom = document.getElementById("pasta-audio");
var audio_mute_dom = document.getElementById("audio-mute");

document.getElementById("audio-mute").addEventListener("click", () => {
    
    pasta_audio_dom.muted = !pasta_audio_dom.muted;

    if(pasta_audio_dom.muted) {
        audio_mute_dom.textContent = "UNMUTE";
    }
    else {
        audio_mute_dom.textContent = "MUTE";
    }
})