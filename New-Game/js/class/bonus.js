var BONUX = [];

var BONUS = function (x, y) {
    this.x = x;
    this.y = y;
    this.type = 0;
    this.face = {
        Nuke: '💣',
        Killer: '🔫',
        Ghost: '👻',
        Runner: '🏃'
    }
    this.timer = ""
    this.setter = function (number) {
        switch (number) {
            case 1:
                this.type = 1;
                this.face = this.face.Nuke;
                break;
            case 2 :
                this.type = 2;
                this.face = this.face.Killer;
                this.timer = 4000;
                break;
            case 3 :
                this.type = 3;
                this.face = this.face.Ghost;
                this.timer = 15000;
                break;
            case 4 :
                this.type = 4;
                this.face = this.face.Runner;
                this.timer = 10000;
                break;
        }
    }
    this.using = function (id) {
        console.log('je suis la');
        switch (this.type) {
            case 1:
                for(var i = 0 ; i < MECHANTS.length ; i++){
                    MECHANTS[i].meurt();
                    MECHANTS.splice(i,1);
                }
                break;
            case 2:
                joueur.bonus = "killer";
                setTimeout(function() {
                    joueur.bonus = "";
                }, this.timer);
                console.log(joueur.bonus);
                break;
            case 3 :
                joueur.bonus = "ghost";
                setTimeout(function() {
                    joueur.bonus = "";
                }, this.timer);
                break;
            case 4 :
                joueur.bonus = "runner";
                setTimeout(function() {
                    joueur.bonus = "";
                }, this.timer);
                console.log(joueur.bonus);

                break;
        }
        BONUX.splice(id,1);
    }


    this.draw = function (ctx) {
        ctx.fillText(this.face, Math.ceil(this.x), Math.ceil(this.y));
    }

    return this;
}
