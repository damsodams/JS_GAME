
var JOUEUR = function(x,y,a,v){
  this.face= document.getElementById('joueur');
  this.x=x;
  this.y=y;
  this.a=a;
  this.v=v;
  this.score = 0;
  this.life = 100;
  this.bonus = "";
  this.level = 0;

  this.aller = function(x,y){
    this.x=x;
    this.y=y;
  }

  this.tourner = function(a){
    this.a=this.a+a;
  }

  this.follow = function(angle){
    this.a = angle*(180/Math.PI);
  }

  this.vitesse = function(v){
    this.v = v;
    if(this.bonus == "runner"){
      this.v  = v * 3 ;
    }
  }

  this.avancer = function(){
    pi = Math.PI;
    arad = ( this.a / 180 ) * pi;
    var dx = Math.cos( arad ) * this.v;
    var dy = Math.sin( arad ) * this.v;
    if((this.x+dx <= canvas.width) && (this.y+dy <= canvas.height) && (this.x+dx >= 0) && (this.y+dy >= 0)){
      this.aller(this.x+dx,this.y+dy);
      this.face=document.getElementById('joueur');
      for(var i =0; i<MECHANTS.length;i++)
      {
        if( distance(this, MECHANTS[i]) < 20)
        {
          this.face=document.getElementById('joueur');
          this.life--;
        }
      }
    }
  }

  this.tirer= function(){
    PROJECTILES.push( new PROJECTILE(this.x - 25, this.y -12.5, this.a, this.v+10, 1000)); // 3-> la vitesse du projectile - 25 -12 va varier en fonction de la taille du logo joueur.
  }

  this.draw = function(ctx){
    pi = Math.PI;
    arad = ( this.a / 180 ) * pi;
    var dx = Math.cos( arad ) * 40;//Bar plus longue
    var dy = Math.sin( arad ) * 40;
    ctx.beginPath();
    ctx.strokeStyle="#f00";
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x+dx, this.y+dy);
    ctx.stroke();
   // ctx.drawImage()
    ctx.drawImage(this.face ,  Math.ceil(this.x) - 25 ,Math.ceil(this.y - 12.5) , 50, 25);//Demarage au centre du player
  }
}
