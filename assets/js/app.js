let drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        handle(drums[i].innerHTML);
    });
}

function handle(button) {
    alert(`${button}: clicked`);
}