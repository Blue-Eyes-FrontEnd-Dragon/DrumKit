let drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
       handleInputEvent(this.textContent.toLowerCase());
       animateButton(this.textContent.toLowerCase());
    });
}

document.addEventListener('keydown', function (event) {
    handleInputEvent(event.key.toLowerCase());
    animateButton(event.key.toLowerCase());
});

function handleInputEvent(button) {
    if (button.includes("w")) {
        play("tom-1");
        return 0;
    }

    if (button.includes("a")) {
        play("tom-2");
        return 0;
    }

    if (button.includes("s")) {
        play("tom-3");
        return 0;
    }

    if (button.includes("d")) {
        play("tom-4");
        return 0;
    }

    if (button.includes("j")) {
        play("snare");
        return 0;
    }

    if (button.includes("k")) {
        play("crash");
        return 0;
    }

    if (button.includes("l")) {
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

function animateButton(button) {
    let activeButton = document.querySelector(`.${button}`);
    activeButton.classList.add('pressed');

    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100);
}