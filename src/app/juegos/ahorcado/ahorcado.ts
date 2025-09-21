import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface PalabraAhorcado{
  palabra: string;
  pista: string;
}

@Component({
  selector: 'app-ahorcado',
  imports: [CommonModule],
  templateUrl: './ahorcado.html',
  styleUrl: './ahorcado.css'
})




export class Ahorcado {
  private palabras: PalabraAhorcado[] = [
    { palabra: "ATLANTICO", pista: "Un océano" },
    { palabra: "ORDENADOR", pista: "Una máquina" },
    { palabra: "LAUREL", pista: "Un árbol" },
    { palabra: "PLAZA", pista: "Espacio público" },
    { palabra: "RUEDA", pista: "Gran invento" },
    { palabra: "CEREZA", pista: "Una fruta" },
    { palabra: "PETANCA", pista: "Un juego" },
    { palabra: "HIGUERA", pista: "Un árbol" },
    { palabra: "EVEREST", pista: "Un monte" },
    { palabra: "RELAMPAGO", pista: "Antecede al trueno" },
    { palabra: "JIRAFA", pista: "Un animal" },
    { palabra: "LUXEMBURGO", pista: "Un país" },
    { palabra: "URUGUAY", pista: "Un país" },
    { palabra: "ILUSTRACION", pista: "Representación gráfica" },
    { palabra: "EXCURSION", pista: "Actividad en la naturaleza" },
    { palabra: "EMPANADILLA", pista: "De la panadería" },
    { palabra: "PASTEL", pista: "De la pastelería" },
    { palabra: "COLEGIO", pista: "Lugar para estudiar" },
    { palabra: "CARRERA", pista: "Competición" },
    { palabra: "MERMELADA", pista: "Confitura" }
  ];
palabraActual: string = "";
pistaActual: string = "";
palabraOculta: string[] = [];
intentosRestantes: number = 6;
abecedario: string[] = [];
letrasUsadas: string[] = [];
letrasCorrectas: string[] = [];
letrasIncorrectas: string[] = [];
juegoTerminado: boolean = false;
juegoGanado: boolean = false;
pistaVisible: boolean = false;
mensajeResultado: string= '';
claseResultado: string= '';
mensajeFinal: string = '';
pistaTexto: string = '';

private generarAbecedario(): void {
  this.abecedario = [];
  for(let i = 65; i <= 90; i++){
    this.abecedario.push(String.fromCharCode(i))
  }
  this.abecedario.push('Ñ');
}

private seleccionarPalabra(): void {
  const indiceAleatorio = Math.floor(Math.random() * this.palabras.length)
  const palabraSeleccionada = this.palabras[indiceAleatorio];
  this.palabraActual = palabraSeleccionada.palabra;
  this.pistaActual = palabraSeleccionada.pista;

  console.log('Palabra Seleccionada: ', this.palabraActual);
}

private crearpalabraOculta(): void {
  this.palabraOculta = [];
  for(let i = 0; i < this.palabraActual.length; i++){
    this.palabraOculta.push('-');
  }
}

intento(letra: string): void {
  if(this.letrasUsadas.includes(letra) || this.juegoTerminado){
    return;
  }
  this.letrasUsadas.push(letra);

  if(this.palabraActual.includes(letra)){
    this.letrasCorrectas.push(letra);
    for(let i = 0; i < this.palabraActual.length; i++){
      if(this.palabraActual[i] === letra){
        this.palabraOculta[i] =letra;
      }
    }
    this.mostrarMensaje('Bien', 'acierto');
  } else{
    this.letrasIncorrectas.push(letra);
    this.intentosRestantes--;
    this.mostrarMensaje('Fallo', 'error');
  }
  this.verificarFinJuego();
}

private mostrarMensaje(mensaje: string, clase: string): void {
  this.mensajeResultado = mensaje;
  this.claseResultado = clase;

  setTimeout(() =>{
    this.mensajeResultado = '';
    this.claseResultado = '';
  }, 800);
}

private verificarFinJuego(): void {
  if (!this.palabraOculta.includes('-')) {
    this.juegoGanado = true;
    this.juegoTerminado = true;
    this.mensajeFinal = 'Felicidades !!1'
  } else if (this.intentosRestantes <= 0){
    this.juegoGanado = false;
    this.juegoTerminado = true;
    this.mensajeFinal = 'Perdiste :(  la palabra era ' + this.palabraActual;
  }
}

mostrarPista(): void {
  this.pistaVisible = true;
  this.pistaTexto = this.pistaActual;
}

reiniciarJuego(): void {
  this.iniciarJuego();
}

private iniciarJuego(): void {
  this.generarAbecedario();
  this.seleccionarPalabra();
  this.crearpalabraOculta();
  this.intentosRestantes = 6;
  this.letrasUsadas = [];
  this.letrasCorrectas = [];
  this.letrasIncorrectas = [];
  this.juegoTerminado = false;
  this.juegoGanado = false;
  this.pistaVisible = false;
  this.mensajeResultado= '';
  this.claseResultado = '';
}

volverAtras(): void {
  window.history.back();
}




















}
