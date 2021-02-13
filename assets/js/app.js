let drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
       handleButtonClick(this)
    });
}

function handleButtonClick(button) {
    if (button.textContent.includes("W")) {
        play("tom-1");
        return 0;
    }

    if (button.textContent.includes("A")) {
        play("tom-2");
        return 0;
    }

    if (button.textContent.includes("S")) {
        play("tom-3");
        return 0;
    }

    if (button.textContent.includes("D")) {
        play("tom-4");
        return 0;
    }

    if (button.textContent.includes("J")) {
        play("snare");
        return 0;
    }

    if (button.textContent.includes("K")) {
        play("crash");
    }

    if (button.textContent.includes("L")) {
        play("kick-bass");
    }
}

function play(fileName) {
    let audio = new Audio(`/assets/sounds/${fileName}.mp3`);
    audio.play();
}