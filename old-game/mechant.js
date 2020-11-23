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
    this.face =
    this.alive = true;

    this.meurt = function () {
        this.alive = false;
        perso.score++;
        if (perso.score % 15 == 0) {
            if (randomInteger(0, 2) == 1) {
                this.face = "👿";
                var bn = new BONUS(this.x, this.y);
                bn.setter(randomInteger(1, 4));
                BONUX.push(bn);
            }
        } else {
            this.face = "👿";
        }
        //MECHANTS.push(new MECHANT(Math.random()*canvas.width,Math.random()*canvas.height));
    }

    this.ia = function () {
        if(perso.bonus == "ghost"){
            this.x = 10;
            this.y = 10;
        }else{
            this.a = r2d(Math.atan2(perso.y - this.y, perso.x - this.x));
            pi = Math.PI;
            arad = (this.a / 180) * pi;
            var dx = Math.cos(arad) * this.v;
            var dy = Math.sin(arad) * this.v;
            this.x = this.x + dx;
            this.y = this.y + dy;
        }


    }
    this.draw = function (ctx) {
        ctx.fillText(this.face, Math.ceil(this.x), Math.ceil(this.y));
        this.ia();
    }
}
