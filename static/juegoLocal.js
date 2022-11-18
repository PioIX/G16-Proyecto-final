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
        if(document.getElementById(String(fila)+"-"+String(columna)).classList.contains('naranja') ){
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
    return JSON.parse(JSON.stringify(cuadrante));  
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
      
    let cuadranteCopia = guardarValores(tablero);
      
    switch(String(cuadrante)){
      case "A":
        tablero[1][1] = cuadranteCopia[1][3] 
        tablero[3][1] = cuadranteCopia[1][1] 
        tablero[3][3] = cuadranteCopia[3][1] 
        tablero[1][3] = cuadranteCopia[3][3] 

        tablero[1][2] = cuadranteCopia[2][3] 
        tablero[2][3] = cuadranteCopia[3][2] 
        tablero[3][2] = cuadranteCopia[2][1] 
        tablero[2][1] = cuadranteCopia[1][2] 

        repintar(1,2)
        repintar(2,3)
        repintar(3,2)
        repintar(2,1)
        repintar(1,1)
        repintar(3,1)
        repintar(3,3)
        repintar(1,3)

        break;
        
      case "B":
        tablero[1][4] = cuadranteCopia[1][6] 
        tablero[1][6] = cuadranteCopia[3][6] 
        tablero[3][6] = cuadranteCopia[3][4] 
        tablero[3][4] = cuadranteCopia[1][4] 

        tablero[1][5] = cuadranteCopia[2][6] 
        tablero[2][6] = cuadranteCopia[3][5] 
        tablero[3][5] = cuadranteCopia[2][4] 
        tablero[2][4] = cuadranteCopia[1][5] 
        
        repintar(1,5)
        repintar(2,6)
        repintar(3,5)
        repintar(2,4)
        repintar(1,4)
        repintar(1,6)
        repintar(3,6)
        repintar(3,4)

        break;

      case "C":
        tablero[4][1] = cuadranteCopia[4][3] 
        tablero[4][3] = cuadranteCopia[6][3] 
        tablero[6][3] = cuadranteCopia[6][1] 
        tablero[6][1] = cuadranteCopia[4][1] 

        tablero[4][2] = cuadranteCopia[5][3] 
        tablero[5][3] = cuadranteCopia[6][2] 
        tablero[6][2] = cuadranteCopia[5][1] 
        tablero[5][1] = cuadranteCopia[4][2] 

        repintar(4,1)
        repintar(4,3)
        repintar(6,3)
        repintar(6,1)
        repintar(4,2)
        repintar(5,3)
        repintar(6,2)
        repintar(5,1)
        
        break;

      case "D":
        tablero[4][4] = cuadranteCopia[4][6] 
        tablero[4][6] = cuadranteCopia[6][6] 
        tablero[6][6] = cuadranteCopia[6][4] 
        tablero[6][4] = cuadranteCopia[4][4] 

        tablero[4][5] = cuadranteCopia[5][6] 
        tablero[5][6] = cuadranteCopia[6][5] 
        tablero[6][5] = cuadranteCopia[5][4] 
        tablero[5][4] = cuadranteCopia[4][5] 

        repintar(4,5)
        repintar(5,6)
        repintar(6,5)
        repintar(5,4)
        repintar(4,4)
        repintar(4,6)
        repintar(6,6)
        repintar(6,4)

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
      
     cuadranteCopia = guardarValores(tablero);

  
      
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

          repintar(2,3)
          repintar(3,2)
          repintar(2,1)
          repintar(1,2)
          repintar(1,3)
          repintar(1,1)          
          repintar(3,1)
          repintar(3,3)
         
        break;
        
        case "B":
          tablero[1][6] = cuadranteCopia[1][4]
          tablero[1][4] = cuadranteCopia[3][4]
          tablero[3][4] = cuadranteCopia[3][6]
          tablero[3][6] = cuadranteCopia[1][6]

          tablero[1][5] = cuadranteCopia[2][4]
          tablero[2][4] = cuadranteCopia[3][5]
          tablero[3][5] = cuadranteCopia[2][6]
          tablero[2][6] = cuadranteCopia[1][5]
        
          repintar(2,6)
          repintar(3,5)
          repintar(2,4)
          repintar(1,5)
          repintar(1,6)
          repintar(3,6)          
          repintar(3,4)
          repintar(1,4)

        break;

        case "C":
          tablero[4][1] = cuadranteCopia[6][1]
          tablero[6][1] = cuadranteCopia[6][3]
          tablero[6][3] = cuadranteCopia[4][3]
          tablero[4][3] = cuadranteCopia[4][1]

          tablero[4][2] = cuadranteCopia[5][1]
          tablero[5][1] = cuadranteCopia[6][2]
          tablero[6][2] = cuadranteCopia[5][3]
          tablero[5][3] = cuadranteCopia[4][2]

          repintar(4,2)
          repintar(5,3)
          repintar(6,2)
          repintar(5,1)
          repintar(4,1)
          repintar(4,3)
          repintar(6,3)
          repintar(6,1)

        break;

        case "D":
          tablero[4][4] = cuadranteCopia[6][4]
          tablero[6][4] = cuadranteCopia[6][6]
          tablero[6][6] = cuadranteCopia[4][6]
          tablero[4][6] = cuadranteCopia[4][4]

          tablero[5][6] = cuadranteCopia[4][5]
          tablero[6][5] = cuadranteCopia[5][6]
          tablero[5][4] = cuadranteCopia[6][5]
          tablero[4][5] = cuadranteCopia[5][4]

          repintar(5,6)
          repintar(6,5)
          repintar(5,4)
          repintar(4,5)
          repintar(4,6)
          repintar(6,6)
          repintar(6,4)
          repintar(4,4)

        break;        
      }
    victoria()
    } 
  }

function victoria (){
    // horizontales
    if( tablero[1][1] =! 0 && tablero[1][1] == tablero[1][2] && tablero[1][1] == tablero[1][3] && tablero[1][1] == tablero[1][4] && tablero[1][1] == tablero[1][5]){
        if (tablero[1][1] == 1){
            jugador1.gano = true
        }
        else if (tablero[1][1]==2){
            jugador2.gano = true
        }
    }
    if( tablero[1][6] =! 0 && tablero[1][6] == tablero[1][2] && tablero[1][6] == tablero[1][3] && tablero[1][6] == tablero[1][4] && tablero[1][6] == tablero[1][5]){
        if (tablero[1][6] == 1){
            jugador1.gano = true
        }
        else if (tablero[1][6]==2){
            jugador2.gano = true
        }
    }
    if( tablero[2][1] =! 0 && tablero[2][1] == tablero[2][2] && tablero[2][1] == tablero[2][3] && tablero[2][1] == tablero[2][4] && tablero[2][1] == tablero[2][5]){
        if (tablero[2][1] == 1){
            jugador1.gano = true
        }
        else if (tablero[2][1]==2){
            jugador2.gano = true
        }
    }
    if( tablero[2][6] =! 0 && tablero[2][6] == tablero[2][2] && tablero[2][6] == tablero[2][3] && tablero[2][6] == tablero[2][4] && tablero[2][6] == tablero[2][5]){
        if (tablero[2][6] == 1){
            jugador1.gano = true
        }
        else if (tablero[2][6]==2){
            jugador2.gano = true
        }
    }
    if( tablero[3][1] =! 0 && tablero[3][1] == tablero[3][2] && tablero[3][1] == tablero[3][3] && tablero[3][1] == tablero[3][4] && tablero[3][1] == tablero[3][5]){
        if (tablero[3][1] == 1){
            jugador1.gano = true
        }
        else if (tablero[3][1]==2){
            jugador2.gano = true
        }
    }
    if( tablero[3][6] =! 0 && tablero[3][6] == tablero[3][2] && tablero[3][6] == tablero[3][3] && tablero[3][6] == tablero[3][4] && tablero[3][6] == tablero[3][5]){
        if (tablero[3][6] == 1){
            jugador1.gano = true
        }
        else if (tablero[3][6]==2){
            jugador2.gano = true
        }
    }
    if( tablero[4][1] =! 0 && tablero[4][1] == tablero[4][2] && tablero[4][1] == tablero[4][3] && tablero[4][1] == tablero[4][4] && tablero[4][1] == tablero[4][5]){
        if (tablero[4][1] == 1){
            jugador1.gano = true
        }
        else if (tablero[4][1]==2){
            jugador2.gano = true
        }
    }
    if( tablero[4][6] =! 0 && tablero[4][6] == tablero[4][2] && tablero[4][6] == tablero[4][3] && tablero[4][6] == tablero[4][4] && tablero[4][6] == tablero[4][5]){
        if (tablero[4][6] == 1){
            jugador1.gano = true
        }
        else if (tablero[4][6]==2){
            jugador2.gano = true
        }
    }
    if( tablero[5][1] =! 0 && tablero[5][1] == tablero[5][2] && tablero[5][1] == tablero[5][3] && tablero[5][1] == tablero[5][4] && tablero[5][1] == tablero[5][5]){
        if (tablero[5][1] == 1){
            jugador1.gano = true
        }
        else if (tablero[5][1]==2){
            jugador2.gano = true
        }
    }
    if( tablero[5][6] =! 0 && tablero[5][6] == tablero[5][2] && tablero[5][6] == tablero[5][3] && tablero[5][6] == tablero[5][4] && tablero[5][6] == tablero[5][5]){
        if (tablero[5][6] == 1){
            jugador1.gano = true
        }
        else if (tablero[5][6]==2){
            jugador2.gano = true
        }
    }
    if( tablero[6][1] =! 0 && tablero[6][1] == tablero[6][2] && tablero[6][1] == tablero[6][3] && tablero[6][1] == tablero[6][4] && tablero[6][1] == tablero[6][5]){
        if (tablero[6][1] == 1){
            jugador1.gano = true
        }
        else if (tablero[6][1]==2){
            jugador2.gano = true
        }
    }
    if( tablero[6][6] =! 0 && tablero[6][6] == tablero[6][2] && tablero[6][6] == tablero[6][3] && tablero[6][6] == tablero[6][4] && tablero[6][6] == tablero[6][5]){
        if (tablero[5][6] == 1){
            jugador1.gano = true
        }
        else if (tablero[5][6]==2){
            jugador2.gano = true
        }
    }
      // verticales
    if( tablero[1][1] =! 0 && tablero[1][1] == tablero[2][1] && tablero[1][1] == tablero[3][1] && tablero[1][1] == tablero[4][1] && tablero[1][1] == tablero[5][1]){
        if (tablero[1][1] == 1){
            jugador1.gano = true
        }
        else if (tablero[1][1]==2){
            jugador2.gano = true
        }
    }
    if( tablero[6][1] =! 0 && tablero[6][1] == tablero[2][1] && tablero[6][1] == tablero[3][1] && tablero[6][1] == tablero[4][1] && tablero[6][1] == tablero[5][1]){
        if (tablero[6][1] == 1){
            jugador1.gano = true
        }
        else if (tablero[1][1]==2){
            jugador2.gano = true
        }
    }
    if( tablero[1][2] =! 0 && tablero[1][2] == tablero[2][2] && tablero[1][2] == tablero[3][2] && tablero[1][2] == tablero[4][2] && tablero[1][2] == tablero[5][2]){
        if (tablero[1][2] == 1){
            jugador1.gano = true
        }
        else if (tablero[1][2]==2){
            jugador2.gano = true
        }
    }
    if( tablero[6][2] =! 0 && tablero[6][2] == tablero[2][2] && tablero[6][2] == tablero[3][2] && tablero[6][2] == tablero[4][2] && tablero[6][2] == tablero[5][2]){
        if (tablero[6][2] == 1){
            jugador1.gano = true
        }
        else if (tablero[6][2]==2){
            jugador2.gano = true
        }
    }
    if( tablero[1][3] =! 0 && tablero[1][3] == tablero[2][3] && tablero[1][3] == tablero[3][3] && tablero[1][3] == tablero[4][3] && tablero[1][3] == tablero[5][3]){
        if (tablero[1][3] == 1){
            jugador1.gano = true
        }
        else if (tablero[1][3]==2){
            jugador2.gano = true
        }
    }
    if( tablero[6][3] =! 0 && tablero[6][3] == tablero[2][3] && tablero[6][3] == tablero[3][3] && tablero[6][3] == tablero[4][3] && tablero[6][3] == tablero[5][3]){
        if (tablero[6][3] == 1){
            jugador1.gano = true
        }
        else if (tablero[6][3]==2){
            jugador2.gano = true
        }
    }
    if( tablero[1][4] =! 0 && tablero[1][4] == tablero[2][4] && tablero[1][4] == tablero[3][4] && tablero[1][4] == tablero[4][4] && tablero[1][4] == tablero[5][4]){
        if (tablero[1][4] == 1){
            jugador1.gano = true
        }
        else if (tablero[1][4]==2){
            jugador2.gano = true
        }
    }
    if( tablero[6][4] =! 0 && tablero[6][4] == tablero[2][4] && tablero[6][4] == tablero[3][4] && tablero[6][4] == tablero[4][4] && tablero[6][4] == tablero[5][4]){
        if (tablero[6][4] == 1){
            jugador1.gano = true
        }
        else if (tablero[6][4]==2){
            jugador2.gano = true
        }
    }
    if( tablero[1][5] =! 0 && tablero[1][5] == tablero[2][5] && tablero[1][5] == tablero[3][5] && tablero[1][5] == tablero[4][5] && tablero[1][5] == tablero[5][5]){
        if (tablero[1][5] == 1){
            jugador1.gano = true
        }
        else if (tablero[1][5]==2){
            jugador2.gano = true
        }
    }
    if( tablero[6][5] =! 0 && tablero[6][5] == tablero[2][5] && tablero[6][5] == tablero[3][5] && tablero[6][5] == tablero[4][5] && tablero[6][5] == tablero[5][5]){
        if (tablero[6][5] == 1){
            jugador1.gano = true
        }
        else if (tablero[6][5]==2){
            jugador2.gano = true
        }
    }
    if( tablero[1][6] =! 0 && tablero[1][6] == tablero[2][6] && tablero[1][6] == tablero[3][6] && tablero[1][6] == tablero[4][6] && tablero[1][6] == tablero[5][6]){
        if (tablero[1][6] == 1){
            jugador1.gano = true
        }
        else if (tablero[1][6]==2){
            jugador2.gano = true
        }
    }
    if( tablero[6][6] =! 0 && tablero[6][6] == tablero[2][6] && tablero[6][6] == tablero[3][6] && tablero[6][6] == tablero[4][6] && tablero[6][6] == tablero[5][6]){
        if (tablero[6][6] == 1){
            jugador1.gano = true
        }
        else if (tablero[6][6]==2){
            jugador2.gano = true
        }
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

  
    if ("jugador1".gana == true && "jugador2".gana == true){
      empate()
    }
    else if ("jugador1".gana == true){
      victoria1()
    }
    else if("jugador2".gana == true){
      victoria2()
    }
}

function victoria1{
  const element = document.getElementById("victoria1");
  element.style.display = 'block';
}

function victoria2{
  const element = document.getElementById("victoria2");
  element.style.display = 'block';}

function empate{
  const element = document.getElementById("victoria2");
  element.style.display = 'block';}
}

window.onload = function() {
   IniciarPartida();
  }