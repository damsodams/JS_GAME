var MECHANTS = [];

var VAGUE = function (nombreMechants, vitesseMechants) {
    var nb = nombreMechants;
    var v = vitesseMechants;
    for (i = 0; i < nb; i++) {
        var newMechant = new MECHANT(Math.random() * canvas.width, Math.random() * canvas.height);
        newMechant.v = vitesseMechants;
        MECHANTS.push(newMechant);
    }
}
// retourne le nombre de méchants en vie dans le jeu
remainingMechant = function () {
    var aliveMechants = MECHANTS.filter(function (mechant) {
        return mechant.alive;
    });
    return aliveMechants.length;
};

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var MECHANT = function (x, y) {
    this.x = x;
    this.y = y;
    this.a = 0;
    this.v = 1;
    this.face = document.getElementById('mechant_vivant');
    this.alive = true;

    this.meurt = function () {
        this.alive = false;
        joueur.score++;
        if (joueur.score % 15 == 0) {
            if (randomInteger(0, 2) == 1) {
                this.face = document.getElementById('mechant_mort');
                var bn = new BONUS(this.x, this.y);
                bn.setter(randomInteger(1, 4));
                BONUX.push(bn);
            }
        } else {
            this.face = document.getElementById('mechant_mort');
        }
        //MECHANTS.push(new MECHANT(Math.random()*canvas.width,Math.random()*canvas.height));
    }

    this.ia = function () {
        if(joueur.bonus == "ghost"){
            this.x = 10;
            this.y = 10;
        }else{
            this.a = r2d(Math.atan2(joueur.y - this.y, joueur.x - this.x));
            pi = Math.PI;
            arad = (this.a / 180) * pi;
            var dx = Math.cos(arad) * this.v;
            var dy = Math.sin(arad) * this.v;
            this.x = this.x + dx;
            this.y = this.y + dy;
        }


    }
    this.draw = function (ctx) {
        ctx.drawImage(this.face, Math.ceil(this.x), Math.ceil(this.y),25,25)
        this.ia();
    }
}
