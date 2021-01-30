var music = document.getElementById("music");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var playhead = document.getElementById("elapsed");
var timeline = document.getElementById("slider");
var timer = document.getElementById("timer");
var duration;
pauseButton.style.visibility = "hidden";

var next = document.getElementById("next")

var album = document.getElementById("album");
var autor = document.getElementById("autor");
var tema = document.getElementById("tema");

// Por ahora quedan estas llamadas a eventos para ver en profundidad
// la proxima clase.

// Cambio evento onclick por uno definido
playButton.onclick = function () {
	playButton.style.visibility = "hidden";
	pause.style.visibility = "visible";
}

// Cambio evento onclick por uno definido
pauseButton.onclick = function () {
	playButton.style.visibility = "visible";
	pause.style.visibility = "hidden";
}

next.onclick = function () {
	playListPosition += 1;

	if (playListPosition > (playList.length - 1)) {
		playListPosition = 0;
	}

	var playingMusic = playList[playListPosition];

	album.innerHTML = playingMusic.album;

	autor.innerHTML = playingMusic.autor;

	tema.innerHTML = playingMusic.tema;

}

var playList = [];
var playListPosition = 0; // Podria usar localstorage para mantener guardada la posicion

function Music(argAutor, argAlbum, argTema, argCover) {
	this.autor = argAutor;
	this.album = argAlbum;
	this.tema = argTema;
	this.cover = argCover;
}


for (let i = 0; i < 10; i++) {
	var newMusic = new Music("autor" + i, "album" + i, "tema" + i, "cover" + i);
	playList[i] = newMusic;
}


var playingMusic = playList[playListPosition];

album.innerHTML = playingMusic.album;

autor.innerHTML = playingMusic.autor;

tema.innerHTML = playingMusic.tema;
