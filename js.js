var side = document.getElementById("side");

function closeSide() {
    side.style.right = "-300px";
}

function openSide() {
    side.style.right = "0px";
}
var audio1 = document.getElementById("audio1");
var audio2 = document.getElementById("audio2");
var audio3 = document.getElementById("audio3");


audio1.src = "ali.mp3";
audio2.src = "fa.mp3";
audio3.src = "has.mp3";

function openAudio1() {
    audio1.play();

}

function openAudio2() {
    audio2.play();
}

function openAudio3() {
    audio3.play();
}

function pauseAudio1() {
    audio1.pause();
}

function pauseAudio2() {
    audio2.pause();
}

function pauseAudio3() {
    audio3.pause();
}

function closeAudio1() {
    audio1.load();
}

function closeAudio2() {
    audio2.load();
}

function closeAudio3() {
    audio3.load();
}