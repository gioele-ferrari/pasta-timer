let reset_timer = false;
var pasta_option_dom = document.getElementById("pasta-list");
var pasta_timer_dom = document.getElementById("pasta-timer");
var pasta_description_dom = document.getElementById("pasta-description");
var pasta_audio_dom = document.getElementById("pasta-audio");

pasta_audio_dom.loop = true;

document.getElementById("start-timer").addEventListener("click", () => {
    let distance = (pasta_option_dom.options[pasta_option_dom.selectedIndex].value) * 60 * 1000;

    pasta_option_dom.classList.add("hidden");
    pasta_timer_dom.classList.remove("hidden");
    pasta_description_dom.classList.remove("hidden");

    // Avvia il suono in loop
    pasta_audio_dom.currentTime = 0;
    pasta_audio_dom.play();

    const timer = setInterval(() => {
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        pasta_timer_dom.textContent = minutes + "m " + seconds + "s ";
  
        if (distance <= 0) {
            clearInterval(timer);
            reset_timer = false;
            pasta_timer_dom.textContent = "Terminata la cottura!";

            pasta_audio_dom.pause();
            pasta_audio_dom.currentTime = 0;
        }

        if (reset_timer) {
            clearInterval(timer);
            reset_timer = false;
            pasta_timer_dom.textContent = "Inizio timer...";

            pasta_audio_dom.pause();
            pasta_audio_dom.currentTime = 0;
        }

        distance -= 1000;
    }, 1000);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    reset_timer = true;

    pasta_option_dom.classList.remove("hidden");
    pasta_timer_dom.classList.add("hidden");
    pasta_description_dom.classList.add("hidden");


    pasta_audio_dom.pause();
    pasta_audio_dom.currentTime = 0;
});
