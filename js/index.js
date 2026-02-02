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
    
    const imgEGAC2 = document.getElementById("imgEGAC2");
    const carrosselEGAC2 = document.getElementById("carrosselEGAC2");
    const imagensEGAC2 = [
        "img/egac/home.png",
        "img/egac/egac1.png",
        "img/egac/egac2.png",
        "img/egac/egac3.png",
        "img/egac/egac4.png",
        "img/egac/egac5.png",
    ];
    let indiceAtual2 = 0;
    document.getElementById("carrosselEGAC2").children[0].addEventListener("click", function() {
        indiceAtual = (indiceAtual - 1 + imagensEGAC2.length) % imagensEGAC2.length;
        imgEGAC2.src = imagensEGAC2[indiceAtual];
    });
    document.getElementById("carrosselEGAC2").children[1].addEventListener("click", function() {
        indiceAtual = (indiceAtual + 1) % imagensEGAC2.length;
        imgEGAC2.src = imagensEGAC2[indiceAtual];
    });

    document.getElementById('imgEGAC').addEventListener('click', function(){
        let modal = document.getElementById('modal');
        modal.classList.remove('opacity-0');
        modal.classList.remove('hidden');
        setTimeout(()=>{
            modal.classList.add('opacity-100');
        },200)
    })
    document.getElementById('fecharModal').addEventListener('click', function(){
        let modal = document.getElementById('modal')
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0');
        setTimeout(()=>{
            modal.classList.add('hidden')
        },200);
    })
});