
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

    PROJECTILES.push( new PROJECTILE(this.x, this.y, this.a, this.v+10, 1000)); // 3-> la vitesse du projectile

    }


  this.draw = function(ctx){
    pi = Math.PI;
    arad = ( this.a / 180 ) * pi;
    var dx = Math.cos( arad ) * 30;
    var dy = Math.sin( arad ) * 30;
    ctx.beginPath();
    ctx.strokeStyle="#f00";
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x+dx, this.y+dy);
    ctx.stroke();
   // ctx.drawImage()
    ctx.drawImage(this.face ,  Math.ceil(this.x),Math.ceil(this.y) , 50, 25);
  }
}
