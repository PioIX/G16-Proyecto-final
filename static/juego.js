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
  
  
  function vaciarTablero() {
    for (let i = 1; i <= 9; i++){
        A[i]= 0}
    
    for (let i = 1; i <= 9; i++){
        B[i]= 0}
  
    for (let i = 1; i <= 9; i++){
        C[i]= 0}   
        
    for (let i = 1; i <= 9; i++){
        D[i]= 0}     
  }
  
  
  function guardarValoresA() {
    for (let i = 1; i <= 9; i++){
      antiguoA[i] = A[i] 
    }
  }
  
  
  function colocarFicha(valorDeJugador ,posicion) {
    if (posicion.valor == 0) {
      posicion.valor = valorDeJugador
      Turnos += 1
      if (jugadorActual == 1) {
        jugadorActual= 2
      } 
      else{
        jugadorActual= 1
      }
    }
  }
  
  function girarIzquierda(cuadrante) {
    return cuadrante;
  }
  
  function girarDerecha(cuadrante) {
   var res = 1; 
  }
  


function vaciarTablero() {
  for (let i = 1; i <= 9; i++){
      A[i]= 0}
  
  for (let i = 1; i <= 9; i++){
      B[i]= 0}

  for (let i = 1; i <= 9; i++){
      C[i]= 0}   
      
  for (let i = 1; i <= 9; i++){
      D[i]= 0}     
}


function guardarValores(cuadrante) {
  for (let i = 1; i <= 9; i++){
    ant(cuadrante[i]) = cuadrante[i] 
  }
}


function colocarFicha(valorDeJugador ,posicion) {
  if (posicion.valor == 0) {
    posicion.valor = valorDeJugador
    Turnos += 1
    if (jugadorActual == 1) {
      jugadorActual= 2
    } 
    else{
      jugadorActual= 1
    }
  }
}

function girarIzquierda(cuadrante) {
  guardarValores(cuadrante)
  cuadrante[1] = ant(cuadrante[3])
  cuadrante[3] = ant(cuadrante[9])
  cuadrante[9] = ant(cuadrante[7])
  cuadrante[7] = ant(cuadrante[1])
  cuadrante[4] = ant(cuadrante[2])        
  cuadrante[2] = ant(cuadrante[6])    
  cuadrante[6] = ant(cuadrante[8])    
  cuadrante[8] = ant(cuadrante[4]) 
}


function girarDerecha(cuadrante) {
  guardarValores(cuadrante)
  cuadrante[1] = ant(cuadrante[7])
  cuadrante[3] = ant(cuadrante[1])
  cuadrante[9] = ant(cuadrante[3])
  cuadrante[7] = ant(cuadrante[9])
  cuadrante[4] = ant(cuadrante[8])        
  cuadrante[2] = ant(cuadrante[4])    
  cuadrante[6] = ant(cuadrante[2])    
  cuadrante[8] = ant(cuadrante[6])    
}