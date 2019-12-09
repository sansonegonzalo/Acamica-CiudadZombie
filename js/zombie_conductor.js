/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(
  sprite,
  x,
  y,
  ancho,
  alto,
  velocidad,
  rangoMov,
  inclinacion
) {
  /* Completar constructor a partir de Enemigo */
  //Enemigo.call(/* ... */);
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  this.inclinacion = inclinacion;
};

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function() {
  if (this.inclinacion == 'v') {
    this.y -= this.velocidad;
  }
  if (this.inclinacion == 'h') {
    this.x += this.velocidad;
  }

  if (this.x < this.rangoMov.desdeX || this.x > this.rangoMov.hastaX) {
    this.velocidad *= -1;
  }
  if (this.y < this.rangoMov.desdeY || this.y > this.rangoMov.hastaY) {
    this.y =
      this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY) / 2;
  }
};

ZombieConductor.prototype.atacar = function(jugador) {
  jugador.perderVidas(jugador.vidas);
};
