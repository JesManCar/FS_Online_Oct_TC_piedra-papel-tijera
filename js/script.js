

const arrayBtns = document.querySelectorAll(".boton-jugada");
const contPlayerHTML = document.getElementById("contador-usuario");
const contIAHTML = document.getElementById("contador-ordenador");

let puntPlayer = 0;
let puntIA = 0;
let player;
let ia;

arrayBtns.forEach(element => {
    element.addEventListener('click', function () {
        player = element.getAttribute("data-jugada"); // PIEDRA - PAPEL - TIJERA
        // TIJERA - 0 // PIEDRA - 1 // PAPEL - 2
        // TIJERA(0) > PAPEL (2) - PAPEL (2) > PIEDRA (1) - PIEDRA (1) > TIJERA(0)
        player = player === "tijera" ? 0 : (player === "piedra" ? 1 : 2); // Conversion String -> 0-1-2
        console.log("Jugada player: " + player);
        ia = Math.floor(Math.random() * 3);
        console.log("Jugada aleatoria: "+ ia);

        if (player == ia); //TODO: Hacer algo con los empates
        else if((player===0 && ia===2) || (player===2 && ia===1) || (player===1 && ia===0)){
            console.log("Gana PLAYER");
            puntPlayer++;
            contPlayerHTML.textContent = `Tus puntos: ${puntPlayer}`;
        } else {
            console.log("GANA IA");
            puntIA++;
            contIAHTML.textContent = `Puntos de la máquina: ${puntIA}`;
        }
    });
});