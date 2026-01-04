document.addEventListener("DOMContentLoaded", function() {
    const imgEGAC = document.getElementById("imgEGAC");
    const carrosselEGAC = document.getElementById("carrosselEGAC");
    const imagensEGAC = [
        "img/egac/home.png",
        "img/egac/egac1.png",
        "img/egac/egac2.png",
        "img/egac/egac3.png",
        "img/egac/egac4.png",
        "img/egac/egac5.png",
    ];
    let indiceAtual = 0;
    document.getElementById("carrosselEGAC").children[0].addEventListener("click", function() {
        indiceAtual = (indiceAtual - 1 + imagensEGAC.length) % imagensEGAC.length;
        imgEGAC.src = imagensEGAC[indiceAtual];
    });
    document.getElementById("carrosselEGAC").children[1].addEventListener("click", function() {
        indiceAtual = (indiceAtual + 1) % imagensEGAC.length;
        imgEGAC.src = imagensEGAC[indiceAtual];
    });
});