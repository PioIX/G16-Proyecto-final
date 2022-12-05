function IniciarPartida(){
    vaciarTablero()
    Turnos = 1
    jugadorActual = "jugador1"
    fichaColocada = false
    jugador1Gano = false
    jugador2Gano = false
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
      if (jugadorActual == "jugador1" && fichaColocada != true && tablero[fila][columna] == 0 ){
        tablero[fila][columna] = 1
        fichaColocada = true
        repintar(fila,columna)
        victoria()
      }
      else if (jugadorActual == "jugador2" && fichaColocada != true && tablero[fila][columna] == 0 ) {
        tablero[fila][columna] = 2
        fichaColocada = true
        repintar(fila,columna)
        victoria()
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

        victoria()

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

        victoria()

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

        victoria()
        
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

        victoria()

        break;        
      }
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
      
    //let cuadranteCopia = tablero.slice()
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

          victoria()
         
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

          victoria()

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

          victoria()

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

          victoria()
          
        break;        
      }
    } 
  }

function victoria(){
    for(i=1 ; i<=6 ; i++){

        // horizontales
        
        if (tablero[i][1] == tablero[i][2] && tablero[i][1] == tablero[i][3] && tablero[i][1] == tablero[i][4] && tablero[i][1] == tablero[i][5]){
            if (tablero[i][1] == 1){
                jugador1Gano = true
            }
            else if (tablero[i][1] == 2){
                jugador2Gano = true
            }
        }

        if (tablero[i][2] == tablero[i][3] && tablero[i][2] == tablero[i][4] && tablero[i][2] == tablero[i][5] && tablero[i][2] == tablero[i][6]){
            if (tablero[i][2] == 1){
                jugador1Gano = true
            }
            else if (tablero[i][2] == 2){
                jugador2Gano = true
            }
        }

        // verticales

        if (tablero[1][i] == tablero[2][i] && tablero[1][i] == tablero[3][i] && tablero[1][i] == tablero[4][i] && tablero[1][i] == tablero[5][i]){
            if (tablero[1][i] == 1){
                jugador1Gano = true
            }
            else if (tablero[1][i] == 2){
                jugador2Gano = true
            }
        }

        if (tablero[2][i] == tablero[3][i] && tablero[2][i] == tablero[4][i] && tablero[2][i] == tablero[5][i] && tablero[2][i] == tablero[6][i]){
            if (tablero[2][i] == 1){
                jugador1Gano = true
            }
            else if (tablero[2][i] == 2){
                jugador2Gano = true
            }
        }

    }

    // diagonales (solo son 8 casos)

    if (tablero[1][1] == tablero[2][2] && tablero[1][1] == tablero[3][3] && tablero[1][1] == tablero[4][4] && tablero[1][1] == tablero[5][5]){
        if (tablero[1][1] == 1){
            jugador1Gano = true
        }
        else if (tablero[1][1] == 2){
            jugador2Gano = true
        }
    }

    if (tablero[2][2] == tablero[3][3] && tablero[2][2] == tablero[4][4] && tablero[2][2] == tablero[5][5] && tablero[2][2] == tablero[6][6]){
        if (tablero[2][2] == 1){
            jugador1Gano = true
        }
        else if (tablero[2][2] == 2){
            jugador2Gano = true
        }
    }

    if (tablero[2][1] == tablero[3][2] && tablero[2][1] == tablero[4][3] && tablero[2][1] == tablero[5][4] && tablero[2][1] == tablero[6][5]){
        if (tablero[2][1] == 1){
            jugador1Gano = true
        }
        else if (tablero[2][1] == 2){
            jugador2Gano = true
        }
    }

    if (tablero[1][2] == tablero[2][3] && tablero[1][2] == tablero[3][4] && tablero[1][2] == tablero[4][5] && tablero[1][2] == tablero[5][6]){
        if(tablero[1][2] == 1){
            jugador1Gano = true
        }
        else if(tablero[1][2] == 2){
            jugador2Gano = true
        }
    }

    if(tablero[1][6] == tablero[2][5] && tablero[1][6] == tablero[3][4] && tablero[1][6] == tablero[4][3] && tablero[1][6] == tablero[5][2]){
        if(tablero[1][6] == 1){
            jugador1Gano = true
        }
        else if(tablero[1][6] == 2){
            jugador2Gano = true
        }
    }

    if(tablero[2][5] == tablero[3][4] && tablero[2][5] == tablero[4][3] && tablero[2][5] == tablero[5][2] && tablero[2][5] == tablero[6][1]){
        if(tablero[2][5] == 1){
            jugador1Gano = true
        }
        else if(tablero[2][5] == 2){
            jugador2Gano = true
        }
    }

    if(tablero[1][5] == tablero[2][4] && tablero[1][5] == tablero[3][3] && tablero[1][5] == tablero[4][2] && tablero[1][5] == tablero[5][1]){
        if(tablero[1][5] == 1){
            jugador1Gano = true
        }
        else if(tablero[1][5] == 2){
            jugador2Gano = true
        }
    }

    if(tablero[2][6] == tablero[3][5] && tablero[2][6] == tablero[4][4] && tablero[2][6] == tablero[5][3] && tablero[2][6] == tablero[6][2]){
        if(tablero[2][6] == 1){
            jugador1Gano = true
        }
        else if(tablero[2][6] == 2){
            jugador2Gano = true
        }
    }

    if(jugador1Gano == true && jugador2Gano == true){
        empate()
    }
    else if(jugador1Gano == true){
        victoria1()
    }
    else if(jugador2Gano == true){
        victoria2()
    }
}


function victoria1(){
  document.getElementById("victoria1").style.display = 'block'; 
}

function victoria2(){
  document.getElementById("victoria2").style.display = 'block'; 
}

function empate(){
  document.getElementById("empate").style.display = 'block'; 
}

window.onload = function() {
   IniciarPartida();
  }