// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["Comida gatos", "Peine", "Crema", "Lavavajillas", "Aguacates"]

// Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol")

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.pop()

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const pelis = [{titulo : "Gladiator", director: "Riddley Scott", fecha: 2000}, 
{titulo: "Interestellar", director: "Christopher Nolan", fecha: 2014}, 
{titulo: "El club de la lucha", director: "David Fincher", fecha: 1999}]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const pelisNuevas = pelis.filter(peli => peli.fecha >= 2010)

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = pelis.map((valor, indice) => valor.director)

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = pelis.map((valor, indice) => valor.titulo)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const nuevaListaConcat = titulos.concat(directores)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const nuevaListaPropa = [...titulos, ...directores]
