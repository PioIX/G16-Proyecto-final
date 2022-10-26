function IniciarPartida(){
    vaciarTablero()
    Turnos = 1
    jugadorActual = 1


    /*
      Jugadores:
      1 - Azul
      2 - Rojo
    */
}

var jugador = -1;
  
const tablero = {
  A: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  B: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  C: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  D: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};
  
function vaciarTablero() {
  tablero = {
    A: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    B: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    C: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    D: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
}












/*

 PPPPP    ii     JJJJ          AA
P    PP   ii       JJ         AAAA 
P   PP    ii       JJ        AA  AA
PPPPP     ii       JJ       AA    AA
PP        ii       JJ      AAAAAAAAAA
PP        ii      JJ      AA        AA
PP        ii    JJ       AA          AA
  
*/

function colocarFicha(cuadrante, casilla) {
    if((cuadrante >= "A" && cuadrante <= "D") && casilla <= 9 && casilla > 0 && jugador != -1) {
      tablero[cuadrante][casilla] = jugador;
    }


}
  
/*
function guardarValores(cuadrante) {
  for (let i = 1; i <= 9; i++){
    
}
*/