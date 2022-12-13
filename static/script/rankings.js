//function usuariosRanking() {
//  var table = document.createElement("table");
//  var headerRow = document.createElement("tr");
//  var nameHeader = document.createElement("th");

//  $.ajax({
//    url:"/rankings",
//    type:"GET",
//    success: function(response){
//      nameHeader.textContent = "Nombre";
//      headerRow.appendChild(nameHeader);
//      var scoreHeader = document.createElement("th");
//      scoreHeader.textContent = "Puntuación";
//      headerRow.appendChild(scoreHeader);
//      table.appendChild(headerRow);


 //     for (var i = 0; i < players.length; i++) {
 //       var player = players[i];
//        var row = document.createElement("tr");
//        var nameCell = document.createElement("td");
//        nameCell.textContent = player.name;
//        row.appendChild(nameCell);
//        var scoreCell = document.createElement("td");
//        scoreCell.textContent = player.score;
//        row.appendChild(scoreCell);
//        table.appendChild(row);
//      }

//      document.body.appendChild(table);
//    },
    
//    error: function(error) {
//      console.log("error")
//    }
//  })
//}


