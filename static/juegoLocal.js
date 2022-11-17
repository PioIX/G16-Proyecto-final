function IniciarPartida(){
    vaciarTablero()
    Turnos = 1
    jugadorActual = "jugador1"
    fichaColocada = false
    /*
      Jugadores:
      1 - Azul
      2 - Rojo
    */
  }

var jugadorActual = "jugador1"
var fichaColocada = false
    
const tablero = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
  ];

const cuadranteCopia = tablero
  
//tablero[filas][columnas]
//A1
//tablero[1][1]
//B7
//tablero[3][4]
//
// la columna y la fila 0 no se usan
//
// A = (1-1 , 1-2 , 1-3     B = (1-4 , 1-5 , 1-6
//      2-1 , 2-2 , 2-3          2-4 , 2-5 , 2-6
//      3-1 , 3-2 , 3-3)         3-4 , 3-5 , 3-6)
//
// C = (4-1 , 4-2 , 4-3     D = (4-4 , 4-5 , 4-6
//      5-1 , 5-2 , 5-3          5-4 , 5-5 , 5-6
//      6-1 , 6-2 , 6-3)         6-4 , 6-5 , 6-6)
//
  
// document.getElementById("turnoActual").textContent = jugadorActual
  
  
function vaciarTablero() {
var  tablero = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
                        ];
  }



function colocarFicha(fila, columna) {
      if (jugadorActual == "jugador1" && fichaColocada != true ){
        tablero[fila][columna] = 1
        fichaColocada = true
        repintar(fila,columna)
      }
      else if (jugadorActual == "jugador2" && fichaColocada != true ) {
        tablero[fila][columna] = 2
        fichaColocada = true
        repintar(fila,columna)
      }
      
  }

function repintar (fila, columna) {  
    if (tablero[fila][columna] == 0){
        if(document.getElementById(String(fila)+"-"+String(columna)).classList.contains("naranja") ){
        document.getElementById(String(fila)+"-"+String(columna)).classList.remove("naranja")
        document.getElementById(String(fila)+"-"+String(columna)).classList.add("blanco")
        }
        else if(document.getElementById(String(fila)+"-"+String(columna)).classList.contains("verde") ){
        document.getElementById(String(fila)+"-"+String(columna)).classList.remove("verde")
        document.getElementById(String(fila)+"-"+String(columna)).classList.add("blanco")
        }
        }// se vuelve blanco

    else if (tablero[fila][columna] == 1){
        if(document.getElementById(String(fila)+"-"+String(columna)).classList.contains("blanco") ){
        document.getElementById(String(fila)+"-"+String(columna)).classList.remove("blanco")
        document.getElementById(String(fila)+"-"+String(columna)).classList.add("naranja")
        }
        else if(document.getElementById(String(fila)+"-"+String(columna)).classList.contains("verde") ){
        document.getElementById(String(fila)+"-"+String(columna)).classList.remove("verde")
        document.getElementById(String(fila)+"-"+String(columna)).classList.add("naranja")
        }
        }// se vuelve naranja

    else if (tablero[fila][columna] == 2){
        if(document.getElementById(String(fila)+"-"+String(columna)).classList.contains("blanco") ){
        document.getElementById(String(fila)+"-"+String(columna)).classList.remove("blanco")
        document.getElementById(String(fila)+"-"+String(columna)).classList.add("verde")
        }
        else if(document.getElementById(String(fila)+"-"+String(columna)).classList.contains("naranja") ){
        document.getElementById(String(fila)+"-"+String(columna)).classList.remove("naranja")
        document.getElementById(String(fila)+"-"+String(columna)).classList.add("verde")
        }
        }// se vuelve verde
  }
     
function guardarValores(cuadrante) {
    return {...cuadrante};  
  }
  
function girarIzquierda(cuadrante){
    if (fichaColocada == true){
        fichaColocada = false
        if (jugadorActual == "jugador1"){
          jugadorActual = "jugador2"
        }
        else {
          jugadorActual = "jugador1" 
        }
      
    
    switch(cuadrante){
      case string(cuadrante) = "A":
        tablero[1][1] = cuadranteCopia[1][3]
        tablero[3][1] = cuadranteCopia[1][1]
        tablero[3][3] = cuadranteCopia[3][1]
        tablero[1][3] = cuadranteCopia[3][3]

        tablero[1][2] = cuadranteCopia[2][3]
        tablero[2][3] = cuadranteCopia[3][2]
        tablero[3][2] = cuadranteCopia[2][1]
        tablero[2][1] = cuadranteCopia[1][2]

        break;
        
      case string(cuadrante) = "B":
        tablero[1][4] = cuadranteCopia[1][6]
        tablero[1][6] = cuadranteCopia[3][6]
        tablero[3][6] = cuadranteCopia[3][4]
        tablero[3][4] = cuadranteCopia[1][4]

        tablero[1][5] = cuadranteCopia[2][6]
        tablero[2][6] = cuadranteCopia[3][5]
        tablero[3][5] = cuadranteCopia[2][4]
        tablero[2][4] = cuadranteCopia[1][5]
        
        break;

      case string(cuadrante) = "C":
        tablero[4][1] = cuadranteCopia[4][3]
        tablero[4][3] = cuadranteCopia[6][3]
        tablero[6][3] = cuadranteCopia[6][1]
        tablero[6][1] = cuadranteCopia[6][1]

        tablero[4][2] = cuadranteCopia[5][3]
        tablero[5][3] = cuadranteCopia[6][2]
        tablero[6][2] = cuadranteCopia[5][1]
        tablero[5][1] = cuadranteCopia[4][2]
        
        break;

      case string(cuadrante) = "D":
        tablero[4][4] = cuadranteCopia[4][6]
        tablero[4][6] = cuadranteCopia[6][6]
        tablero[6][6] = cuadranteCopia[6][4]
        tablero[6][4] = cuadranteCopia[4][4]

        tablero[4][5] = cuadranteCopia[5][6]
        tablero[5][6] = cuadranteCopia[6][5]
        tablero[6][5] = cuadranteCopia[5][4]
        tablero[5][4] = cuadranteCopia[4][5]

        break;        
      }
      victoria()
    }
  }

function girarDerecha(cuadrante){
    if (fichaColocada == true){
        fichaColocada = false
        if (jugadorActual == "jugador1"){
          jugadorActual = "jugador2"
        }
        else {
          jugadorActual = "jugador1" 
        }
      switch(cuadrante){
        case "A":
          tablero[1][3] = cuadranteCopia[1][1]
          tablero[1][1] = cuadranteCopia[3][1]
          tablero[3][1] = cuadranteCopia[3][3]
          tablero[3][3] = cuadranteCopia[1][3]

          tablero[2][3] = cuadranteCopia[1][2]
          tablero[3][2] = cuadranteCopia[2][3]
          tablero[2][1] = cuadranteCopia[3][2]
          tablero[1][2] = cuadranteCopia[2][1]
  
        break;
        
        case "B":
          tablero[1][6] = cuadranteCopia[1][4]
          tablero[3][6] = cuadranteCopia[1][6]
          tablero[3][4] = cuadranteCopia[3][6]
          tablero[1][4] = cuadranteCopia[3][4]

          tablero[2][6] = cuadranteCopia[1][5]
          tablero[3][5] = cuadranteCopia[2][6]
          tablero[2][4] = cuadranteCopia[3][5]
          tablero[1][5] = cuadranteCopia[2][4]
        
        break;

        case "C":
          tablero[4][1] = cuadranteCopia[4][3]
          tablero[4][3] = cuadranteCopia[6][3]
          tablero[6][3] = cuadranteCopia[6][1]
          tablero[6][1] = cuadranteCopia[6][1]

          tablero[4][2] = cuadranteCopia[5][3]
          tablero[5][3] = cuadranteCopia[6][2]
          tablero[6][2] = cuadranteCopia[5][1]
          tablero[5][1] = cuadranteCopia[4][2]
        
        break;

        case "D":
          tablero[4][6] = cuadranteCopia[4][4]
          tablero[6][6] = cuadranteCopia[4][6]
          tablero[6][4] = cuadranteCopia[6][6]
          tablero[4][4] = cuadranteCopia[6][4]

          tablero[5][6] = cuadranteCopia[4][5]
          tablero[6][5] = cuadranteCopia[5][6]
          tablero[5][4] = cuadranteCopia[6][5]
          tablero[4][5] = cuadranteCopia[5][4]

        break;        
      }
    victoria()
    } 
  }

function victoria() {
  
  for(fila = 1; fila <= 6; fila++) {
    if (tablero[fila][1] == 0)
      offset = 1;
    else 
      offset = 0
    
    suma = tablero[fila][1 + offset];
    for(columna = 2 + offset; columna <= 6; columna++) {
      if (tablero[fila][columna] == tablero[fila][columna - 1])
        suma += tablero[fila][columna];
      else {
        suma = 0;
        break;
      }
    }
    
    if (suma == 5) {
      ganador = 1
    }
    else if (suma == 10) {
      ganador = 2
    } else {
    ganador = 0
    }
  }


  for(columna = 1; columna <= 6; columna++) {
    if (tablero[1][columna] == 0)
      offset = 1;
    else 
      offset = 0
    
    suma = tablero[fila][offset + 1];
    for(columna = 2 + offset; columna <= 6; columna++) {
      if (tablero[fila][columna] == tablero[fila][columna - 1])
        suma += tablero[fila][columna];
      else {
        suma = 0;
        break;
      }
    }
    
    if (suma == 5) 
      ganador = 1
    else if (suma == 10) {
      ganador = 2
    } else {
      ganador = 0
    }

  // diagonales derecha abajo
    if(tablero[1][1]!=0 && tablero[1][1] == tablero[2][2] && tablero[1][1] == tablero[3][3] && tablero[1][1] == tablero[4][4] && tablero[1][1] == tablero[5][5]){
        if (tablero[1][1] == 1) {
          "jugador1".gana = true
        }
        else if (tablero[1][1] == 2)
          "jugador2".gana = true
    }

    if(tablero[2][2]!=0 && tablero[2][2] == tablero[3][3] && tablero[2][2] == tablero[4][4] && tablero[2][2] == tablero[5][5] && tablero[2][2] == tablero[6][6]){
        if (tablero[2][2] == 1) {
          "jugador1".gana = true
        }
        else if (tablero[2][2] == 2)
          "jugador2".gana = true
    }

    if(tablero[1][2]!=0 && tablero[1][2] == tablero[2][3] && tablero[1][2] == tablero[3][4] && tablero[1][2] == tablero[4][5] && tablero[1][2] == tablero[5][6]){
        if (tablero[1][2] == 1) {
          "jugador1".gana = true
        }
        else if (tablero[1][2] == 2)
          "jugador2".gana = true
    }

    if(tablero[2][1]!=0 && tablero[2][1] == tablero[3][2] && tablero[2][1] == tablero[4][3] && tablero[2][1] == tablero[5][4] && tablero[2][1] == tablero[6][5]){
        if (tablero[2][1] == 1) {
          "jugador1".gana = true
        }
        else if (tablero[2][1] == 2)
          "jugador2".gana = true
    }

// diagonales izquierda abajo

    if(tablero[1][6]!=0 && tablero[2][5] == tablero[1][6] && tablero[3][4] == tablero[1][6] && tablero[4][3] == tablero[1][6] && tablero[5][2] == tablero[1][6] ){
        this.jugador.gana = true
    }

    if(tablero[2][5]!=0 && tablero[3][4] == tablero[2][5] && tablero[4][3] == tablero[2][5] && tablero[5][2] == tablero[2][5] && tablero[6][1] == tablero[2][5] ){
        this.jugador.gana = true
    }

    if(tablero[1][5]!=0 && tablero[2][4] == tablero[1][5] && tablero[3][3] == tablero[1][5] && tablero[4][2] == tablero[1][5] && tablero[5][1] == tablero[1][5] ){
        if (tablero[1][5] == 1) {
          "jugador1".gana = true
        }
        else if (tablero[1][5] == 2)
          "jugador2".gana = true
    }

    if(tablero[2][6]!=0 && tablero[3][5] == tablero[2][6] && tablero[4][4] == tablero[2][6] && tablero[5][3] == tablero[2][6] && tablero[6][2] == tablero[2][6] ){
        if (tablero[2][6] == 1) {
          "jugador1".gana = true
        }
        else if (tablero[2][6] == 2)
          "jugador2".gana = true
    } 

  
  }
    if ("jugador1".gana == true && "jugador2".gana == true){
      // empate   (\0 o 0/)
      //          ( \   / )
    }
    else if ("jugador1".gana == true){
      // felicidades ganaste \(pup)/
    }
    else if("jugador2".gana == true){
      // felicidades ganaste \(pup)/ 
    }
}

  window.onload = function() {
   IniciarPartida();
  }
