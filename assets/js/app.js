let drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
       handleInputEvent(this.textContent.toUpperCase())
    });
}

document.addEventListener('keydown', function (event) {
    handleInputEvent(event.key.toUpperCase());
});

function handleInputEvent(button) {
    if (button.includes("W")) {
        play("tom-1");
        return 0;
    }

    if (button.includes("A")) {
        play("tom-2");
        return 0;
    }

    if (button.includes("S")) {
        play("tom-3");
        return 0;
    }

    if (button.includes("D")) {
        play("tom-4");
        return 0;
    }

    if (button.includes("J")) {
        play("snare");
        return 0;
    }

    if (button.includes("K")) {
        play("crash");
        return 0;
    }

    if (button.includes("L")) {
        play("kick-bass");
        return 0;
    }

    console.log(button);
    return 1;
}

function play(fileName) {
    let audio = new Audio(`/assets/sounds/${fileName}.mp3`);
    audio.play();
}