classement();

function classement(){
    var corpsTableau = document.getElementById("tableauClassement");
    
    for (var i = 1; i < 4; i++) {
        var ligneTableau = document.createElement("tr");

        var numeroLigne = document.createElement("th");
        numeroLigne.setAttribute("scope", "row");
        var cellText = document.createTextNode(i);
        numeroLigne.appendChild(cellText);

        var cellPseudo = document.createElement("td");
        var cellText = document.createTextNode("Pseudo"+i);
        cellPseudo.appendChild(cellText);

        var cellPartieJouer = document.createElement("td");
        var cellText = document.createTextNode("PartieJouer"+i);
        cellPartieJouer.appendChild(cellText);

        var cellScoreMax = document.createElement("td");
        var cellText = document.createTextNode("Scoremax"+i);
        cellScoreMax.appendChild(cellText);
        
        ligneTableau.appendChild(numeroLigne);
        ligneTableau.appendChild(cellPseudo);
        ligneTableau.appendChild(cellPartieJouer);
        ligneTableau.appendChild(cellScoreMax);

        corpsTableau.appendChild(ligneTableau);
    }
      
}