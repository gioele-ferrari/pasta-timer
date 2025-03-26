let reset_timer = false;
var pasta_option_dom = document.getElementById("pasta-list");
var pasta_timer_dom = document.getElementById("pasta-timer");
var pasta_audio_dom = document.getElementById("pasta-audio");

pasta_audio_dom.loop = true;

document.getElementById("start-timer").addEventListener("click", () => {
    let minutes = pasta_option_dom.options[pasta_option_dom.selectedIndex].value;
    let totalDuration = minutes * 60 * 1000; // durata in ms
    let distance = totalDuration;

    const timerBar = document.getElementById("timer-bar");
    const timerText = document.getElementById("timer-text");

    pasta_option_dom.classList.add("hidden");
    pasta_timer_dom.classList.remove("hidden");

    pasta_audio_dom.currentTime = 0;
    pasta_audio_dom.play();

    const timer = setInterval(() => {
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        timerText.textContent = `${minutes}m ${seconds.toString().padStart(2, '0')}s`;

        // aggiorna la barra
        const percent = (distance / totalDuration) * 100;
        timerBar.style.width = `${percent}%`;

        if (distance <= 0) {
            clearInterval(timer);
            reset_timer = false;
            timerText.textContent = "Terminata la cottura!";
            timerBar.style.width = "0%";

            pasta_audio_dom.pause();
            pasta_audio_dom.currentTime = 0;
        }

        if (reset_timer) {
            clearInterval(timer);
            reset_timer = false;
            timerText.textContent = "Inizio timer...";
            timerBar.style.width = "100%";

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

    pasta_audio_dom.pause();
    pasta_audio_dom.currentTime = 0;
});
