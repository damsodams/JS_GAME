
var distance = function (A, B) {
    return Math.hypot(A.x - B.x, A.y - B.y);
}

function r2d(radians) {
    return radians * 180 / Math.PI;
}


let background = document.getElementById('background');

var playername = "";
var state = 0;
showStartButton();
var joueur = new JOUEUR(10, 10, 50, 25);
var i = 0;
var nb_monster = 0;
var canvas = document.getElementById("canvas");
canvas.width = 800;
canvas.height = 600;
var ctx = canvas.getContext('2d');

ctx.font = '20px serif'
ctx.textAlign = "center";
ctx.textBaseline = "middle";

for (i = 0; i < 5; i++) {
    if (joueur.bonus == "ghost") {
        var newMechant = new MECHANT(10, 10);
    } else {
        MECHANTS.push(new MECHANT(Math.random() * canvas.width, Math.random() * canvas.height));
    }
}
function showStartButton(){
    var replayButtonDiv = document.getElementById("replayButton");
    var startButton = document.createElement("button");
    startButton.innerHTML = "Jouer";
    startButton.setAttribute("class", "btn btn-primary");
    startButton.setAttribute("style", "background-color: #e7e7e7; color: black;");
    startButton.addEventListener("click", function (e) {
        var namep = document.getElementById("name_player");
        console.log(namep.size);
        if(namep.textLength > 5){
            playername = namep.value;
            state = 1 ;
            loop();
            replayButtonDiv.innerHTML='';
            listener();
        }else{
            alert("Merci de saisir un pseudo de plus de 5 caractere");
        }

    });
    replayButtonDiv.appendChild(startButton);
}
function showReplayButton() {
    // instance du canvas = canvas
    var replayButtonDiv = document.getElementById("replayButton");
    var replayButton = document.createElement("button");
    replayButton.innerHTML = "Rejouer";
    replayButton.setAttribute("class", "btn btn-primary");
	    replayButton.setAttribute("style", "background-color: #e7e7e7; color: black;");
    replayButton.addEventListener("click", function (e) {
        document.location.reload(true);
    });
    replayButtonDiv.appendChild(replayButton);
}

var phase = 0;

var loop = function () {
    if (joueur.life > 0) {
        if (joueur.bonus == "killer") {
            joueur.tirer();
        }
        window.requestAnimationFrame(loop);
        if (PROJECTILES.length != 0){
            for(var i = 0 ; i <= PROJECTILES.length - 1 ; i++){
                console.log(PROJECTILES[i].kill);
                 if (PROJECTILES[i].kill == true){
                    PROJECTILES.splice(i);

                }
            }
        }
        if(MECHANTS.length == 0 ){
            joueur.level++;
            nb_monster = (5 * (joueur.level * 0.7));
            if (nb_monster >= 15) {
                for (var i = 0; i <= 15; i++) {
                    nb_monster = nb_monster - 1;
                    MECHANTS.push(new MECHANT(Math.random() * canvas.width, Math.random() * canvas.height));
                }
            } else {
                for (var i = 0; i <= (5 * (joueur.level * 0.7)); i++) {
                    MECHANTS.push(new MECHANT(Math.random() * canvas.width, Math.random() * canvas.height));
                }
            }

        }
        if (nb_monster > 0) {
            if (MECHANTS.length < 15) {
                while (MECHANTS.length < 15) {
                    nb_monster = nb_monster - 1;
                    MECHANTS.push(new MECHANT(Math.random() * canvas.width, Math.random() * canvas.height));
                }
            }
        }
        for (var i = 0; i < BONUX.length; i++) {

            if ((joueur.x >= BONUX[i].x - 10) && (joueur.x <= BONUX[i].x + 10) && (joueur.y >= BONUX[i].y + -10) && (joueur.y <= BONUX[i].y + 10)) {
                BONUX[i].using(i);
            }

        }
        controle();
        joueur.avancer();

        var val_score = '<a>' + joueur.score + '</a>';
        document.getElementById("score").innerHTML = val_score;
        var val_life = '<a>' + joueur.life + '</a>';
        document.getElementById("life").innerHTML = val_life;
        var val_level = '<a>' + joueur.level + '</a>';
        document.getElementById("level").innerHTML = val_level;

        draw(ctx);
        //ctx.fillText("Vie: " + joueur.life + "% Score: " + joueur.score + " Level: " + joueur.level, canvas.width >> 1, 20);


    } else {
        draw(ctx);
        var end = document.getElementById("fin");
        ctx.drawImage(end , 0,0,canvas.width, canvas.height);
        ctx.font = "30px Verdana";
// Create gradient
        var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0"," white");
        gradient.addColorStop("0.5", "white");
        gradient.addColorStop("1.0", "white");
        ctx.fillStyle = gradient;
        ctx.fillText("Perdu 🤯", canvas.width >> 1, canvas.height >> 1);
        testbdd();
        console.log("jsuisla");
        showReplayButton();
    }
}
var KEYS = {
    UP: false,
    DOWN: false,
    LEFT: false,
    RIGHT: false,
    FIRE: false,

}

function controle() {
    if (KEYS.UP === true) {
        joueur.vitesse(5);
    } else if (KEYS.DOWN === true) {
        joueur.vitesse(-5);
    } else {
        joueur.vitesse(0);
    }

    if (KEYS.LEFT === true) {
        joueur.tourner(-3);
    }
    if (KEYS.RIGHT === true) {
        joueur.tourner(3);
    }
    if (KEYS.FIRE === true) {
        joueur.tirer();
        KEYS.FIRE = false;
    }
}


function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

canvas.addEventListener('mousemove', function (evt) {
    var mousePos = getMousePos(canvas, evt);
    mouseXFromCenter = mousePos.x - joueur.x;
    mouseYFromCenter = mousePos.y - joueur.y;
    mouseAngle = Math.atan2(mouseYFromCenter, mouseXFromCenter);
    joueur.follow(mouseAngle);
}, false);
canvas.addEventListener('click', function (evt) {
    joueur.tirer();
}, false);
function listener(){
    window.addEventListener('keydown', function (event) {
        //console.log(event.keyCode);
        switch (event.keyCode) {
            case 81: // Left
                KEYS.LEFT = true;
                break;
            case 90: // Up
                KEYS.UP = true;
                break;
            case 68: // Right
                KEYS.RIGHT = true;
                break;
            case 83: // Down
                KEYS.DOWN = true;
                break;
            case 32: // shoot
                KEYS.FIRE = true;
                break;
        }
        event.preventDefault();
    }, false);
    window.addEventListener('keyup', function (event) {
        //console.log(event.keyCode);
        switch (event.keyCode) {
            case 81: // Left
                KEYS.LEFT = false;
                break;
            case 90: // Up
                KEYS.UP = false;
                break;
            case 68: // Right
                KEYS.RIGHT = false;
                break;
            case 83: // Down
                KEYS.DOWN = false;
                break;
            case 32: // shoot
                KEYS.FIRE = false;
                break;
        }
        event.preventDefault();
    }, false);
}




var draw = function (ctx) {

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    for (var i = 0; i < PROJECTILES.length; i++) {
        if (PROJECTILES.stopped) {
            PROJECTILES.splice(i, 1);
        } else {
            PROJECTILES[i].avancer();
            PROJECTILES[i].draw(ctx);
        }
    }
    for (var i = 0; i < BONUX.length; i++) {
        BONUX[i].draw(ctx);
    }
    for (var i = 0; i < MECHANTS.length; i++) {
        MECHANTS[i].draw(ctx);
    }

    joueur.draw(ctx);
}
function testbdd(){
    $.ajax({
        url : "controller\\scoreController.php",
        data : { name : playername, score : joueur.score },
        type : "post",
        success : function(statut){ // code_html contient le HTML renvoyé
            console.log(statut);
        },
        error : function(resultat, statut, erreur){
            console.log(statut);
        }
    });
}

if(state == 1){
    loop();
}



