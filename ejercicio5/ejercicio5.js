//Una variable que contenga tu altura en centímetros (entero)
let alturaCm = 184;

//Una variable que contenga tu altura en metros (número de coma flotante)
let alturaM = 1.84;

//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let pesoKg = 77.4;

//Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRedondeo = alturaM.toFixed(0);
console.log(alturaRedondeo);

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoRedondeo = pesoKg.toPrecision(2);
console.log(pesoRedondeo);

//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maxValor = Number.MAX_VALUE + 1;
console.log(maxValor == Number.MAX_VALUE);