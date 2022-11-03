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
  
  
  
  
  function vaciarTablero() {
  tablero = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
                        ];
  }
  
  function colocarFicha(cuadrante, casilla) {
    if((cuadrante >= "A" && cuadrante <= "D") && casilla <= 9 && casilla > 0 && jugador != -1) {
      tablero[cuadrante][casilla] = jugador;
    }
  
  
  }
  
  
  function guardarValores(cuadrante) {
    return {...cuadrante};  
  }
  
  function girarIzquierda(cuadrante){
    switch(cuadrante){
      case "A":
        tablero[1][1] = cuadranteCopia[1][3]
        tablero[3][1] = cuadranteCopia[1][1]
        tablero[3][3] = cuadranteCopia[3][1]
        tablero[1][3] = cuadranteCopia[3][3]

        tablero[1][2] = cuadranteCopia[2][3]
        tablero[2][3] = cuadranteCopia[3][2]
        tablero[3][2] = cuadranteCopia[2][1]
        tablero[2][1] = cuadranteCopia[1][2]

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
    
  }

  function girarDerecha(cuadrante){
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
    
    if (suma == 5) 
      ganador = 1
    elif (suma == 10) {
      ganador = 2
    } else 
    ganador = 0  
  }


  for(columna = 1; columna <= 6; columna++) {
    if (tablero[1][columna] == 0)
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
    
    if (suma == 5) 
      ganador = 1
    elif (suma == 10) {
      ganador = 2
    } else 
    ganador = 0
  
  }
  
}




