function mostrarReglas() {
  let element = document.getElementById("cartelReglas");
  element.style.display ='block';
}

function ocultarReglas() {
  let element = document.getElementsByClassName("cartelReglas");
  console.log(element) 
  element.style.display ='none';
}