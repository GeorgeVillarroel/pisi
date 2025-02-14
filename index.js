function abrirCartita() {
    const card = document.querySelector('.love-card');
    const cardCaratula = document.querySelector('.love-card-caratula');
    const textito = document.querySelector('.textito');
    
    card.classList.add('abierta');
    cardCaratula.classList.add('abierta-caratula');
    textito.innerHTML = "";
}