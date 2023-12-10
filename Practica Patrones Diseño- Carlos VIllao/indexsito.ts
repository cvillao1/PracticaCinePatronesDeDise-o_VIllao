import { Combo } from "./cine";
import { Comestible } from "./cine";
import { ListaDeDatos } from "./cine";
import { Pelicula } from "./cine";
import { Cliente } from "./cine";
import { Sala } from "./cine";


// Código de prueba
const listaDeDatos = ListaDeDatos.getInstance();

const pelicula1 = new Pelicula('Pikachu');
const pelicula2 = new Pelicula('Avengers');
const pelicula3 = new Pelicula('Aladdin');
const pelicula4= new Pelicula('John Wick');

const sala1 = new Sala(30);
const sala2 = new Sala(25);
const sala3 = new Sala(60);

const cliente1 = new Cliente('Kenxo');

cliente1.seleccionarPelicula(pelicula1);
cliente1.seleccionarSala(sala1);
cliente1.seleccionarAsiento(1);
cliente1.seleccionarComestible(new Comestible('Palomitas'));
cliente1.seleccionarComestible(new Comestible('Refresco'));

listaDeDatos.agregarPelicula(pelicula1);
listaDeDatos.agregarPelicula(pelicula2);
listaDeDatos.agregarPelicula(pelicula3);

listaDeDatos.agregarComestible(new Comestible('Palomitas'));
listaDeDatos.agregarComestible(new Comestible('Refresco'));
listaDeDatos.agregarComestible(new Comestible('Nachos'));

sala1.asignarPelicula(pelicula1);
sala2.asignarPelicula(pelicula2);
sala3.asignarPelicula(pelicula3);

cliente1.imprimirInformacion();

