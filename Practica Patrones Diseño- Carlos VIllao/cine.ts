// Implementacion de patron de diseño Singleton
// Clase Cine
export class Cine {
  private peliculas: Pelicula[];
  private salas: Sala[];

  constructor() {
    this.peliculas = [];
    this.salas = [];
  }

  public agregarPelicula(pelicula: Pelicula): void {
    this.peliculas.push(pelicula);
  }

  public getPeliculas(): Pelicula[] {
    return this.peliculas;
  }

  public crearSala(asientosDisponibles: number): Sala {
    const sala = new Sala(asientosDisponibles);
    this.salas.push(sala);
    return sala;
  }
}

// Clase Sala
export class Sala {
  private asientosDisponibles: number;
  private pelicula: Pelicula | null;
  private aperitivos: Comestible[];

  constructor(asientosDisponibles: number) {
    this.asientosDisponibles = asientosDisponibles;
    this.pelicula = null;
    this.aperitivos = [];
  }

  public getAsientosDisponibles(): number {
    return this.asientosDisponibles;
  }

  public asignarPelicula(pelicula: Pelicula): void {
    if (this.pelicula === null) {
      this.pelicula = pelicula;
    } else {
      console.log("Ya se ha asignado una película a esta sala.");
    }
  }

  public agregarAperitivo(aperitivo: Comestible): void {
    this.aperitivos.push(aperitivo);
  }

  public getAperitivos(): Comestible[] {
    return this.aperitivos;
  }
}

// Clase Pelicula
export class Pelicula {
  public titulo: string;

  constructor(titulo: string) {
    this.titulo = titulo;
  }

  public getTitulo(): string {
    return this.titulo;
  }
}

// Clase Cliente
export class Cliente {
  private nombre: string;
  private peliculaSeleccionada: Pelicula | null;
  private sala: Sala | null;
  private asiento: number | null;
  private comestibles: Comestible[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.peliculaSeleccionada = null;
    this.sala = null;
    this.asiento = null;
    this.comestibles = [];
  }

  public seleccionarPelicula(pelicula: Pelicula): void {
    this.peliculaSeleccionada = pelicula;
  }

  public seleccionarSala(sala: Sala): void {
    this.sala = sala;
  }

  public seleccionarAsiento(asiento: number): void {
    this.asiento = asiento;
  }

  public seleccionarComestible(comestible: Comestible): void {
    this.comestibles.push(comestible);
  }

  public imprimirInformacion(): void {
    console.log(`Nombre del cliente: ${this.nombre}`);
    console.log(`Pelicula seleccionada: ${this.peliculaSeleccionada ? this.peliculaSeleccionada.getTitulo() : 'Ninguna'}`);
    console.log(`Sala asignada: ${this.sala ? 'Sala ' + this.sala.getAsientosDisponibles() : 'Ninguna'}`);
    console.log(`Asiento seleccionado: ${this.asiento !== null ? this.asiento : 'Ninguno'}`);
    console.log(`Aperitivos en la sala: ${this.sala ? this.sala.getAperitivos().map(aperitivo => aperitivo.getNombre()).join(', ') : 'Ninguno'}`);
    console.log(`Comestibles seleccionados: ${this.comestibles.length > 0 ? this.comestibles.map(comestible => comestible.getNombre()).join(', ') : 'Ninguno'}`);
  }
}

// Clase Comestible
export class Comestible {
  public nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public getNombre(): string {
    return this.nombre;
  }
}
/* Clase Decoradora de Comestibles
Implementacion patron de diseño Decorator
*/
export class Combo extends Comestible {
  private comestible: Comestible;

  constructor(comestible: Comestible, nombre: string) {
    super(nombre);
    this.comestible = comestible;
  }

  public getNombre(): string {
    return `${this.comestible.getNombre()} + ${this.nombre}`;
  }
}
// Implementación del patrón Singleton para ListaDeDatos
export class ListaDeDatos {
  private static instance: ListaDeDatos;
  private peliculas: Pelicula[];
  private combos: Combo[];
  private comestibles:Comestible[];

  private constructor() {
    this.peliculas = [];
    this.combos = [];
    this.comestibles= [];
  }

  public static getInstance(): ListaDeDatos {
    if (!ListaDeDatos.instance) {
      ListaDeDatos.instance = new ListaDeDatos();
    }
    return ListaDeDatos.instance;
  }
  public agregarComestible(comestible: Comestible): void {
    this.comestibles.push(comestible);
  }
  public agregarPelicula(pelicula: Pelicula): void {
    this.peliculas.push(pelicula);
  }

  public getPeliculas(): Pelicula[] {
    return this.peliculas;
  }

  public agregarCombo(combo: Combo): void {
    this.combos.push(combo);
  }

  public getCombos(): Combo[] {
    return this.combos;
  }
}