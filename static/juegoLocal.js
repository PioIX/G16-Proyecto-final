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
      }
      else if (jugadorActual == "jugador2" && fichaColocada != true && tablero[fila][columna] == 0 ) {
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