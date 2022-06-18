// Una función sin parámetros que devuelva siempre "true"
function siempreTrue() {
  console.log("true");
}

siempreTrue()

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 5000);
});

myPromise
  .then(() => console.log("Hola soy una promesa"))

// Una función generadora de índices pares automáticos
function* generaId() {
  let id = 2;
  while (true) {
    id = id + 2;
    if (id > 10) {
        return id;
    }
    yield id;
  }
}

const gen = generaId();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
