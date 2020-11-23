var PROJECTILES = [];

var PROJECTILE = function(x,y,a,v, dmax=400){
  this.x=x;
  this.y=y;
  this.a=a;
  this.v=v;
  this.max = dmax;
  this.d=0;
  this.face="💩";
  this.stopped=false;

  this.avancer = function(){
    this.d+=this.v;
    if(this.d < this.max)
    {
      console.log(v);
      pi = Math.PI;
      arad = ( this.a / 180 ) * pi;
      var dx = Math.cos( arad ) * this.v;
      var dy = Math.sin( arad ) * this.v;
      this.x+=dx;
      this.y+=dy;

      for(i=0; i< MECHANTS.length; i++)
      {
        if(MECHANTS[i].alive)
        {
          if(distance(this, MECHANTS[i])<20)
          {
            MECHANTS[i].meurt();
            MECHANTS.splice(i,1);
            this.d=this.dmax;
            this.stopped = true;
          }
        }
      }
    }
  };

  this.draw = function(ctx){
    ctx.fillText(this.face,Math.ceil(this.x),Math.ceil(this.y));
  }
}
