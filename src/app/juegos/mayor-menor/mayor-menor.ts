import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';

interface Card {
  value: number;
  name: string;
  imageName: string;
}

@Component({
  selector: 'mayor-menor',
  templateUrl: './mayor-menor.html',
  styleUrls: ['./mayor-menor.css'],
  imports: [NgIf]
})
export class MayorMenor {
  cards: Card[] = [
    {value: 1, name: 'As', imageName: '1_de_espada.jpg'},
    {value: 2, name: 'Dos', imageName: '2_de_espada.jpg'},
    {value: 3, name: 'Tres', imageName: '3_de_espada.jpg'},
    {value: 4, name: 'Cuatro', imageName: '4_de_espada.jpg'},
    {value: 5, name: 'Cinco', imageName: '5_de_espada.jpg'},
    {value: 6, name: 'Seis', imageName: '6_de_espada.jpg'},
    {value: 7, name: 'Siete', imageName: '7_de_espada.jpg'},
    {value: 8, name: 'Ocho', imageName: '8_de_espada.jpg'},
    {value: 9, name: 'Nueve', imageName: '9_de_espada.jpg'},
    {value: 10, name: 'Diez', imageName: '10_de_espada.jpg'},
    {value: 11, name: 'once' , imageName: '11_de_espada.jpg'},
    {value: 12, name: 'Doce', imageName: '12_de_espada.jpg'}
  ];

  currentCard: Card | null = null;
  nextCard: Card | null = null
  score = 0;
  maxScore = 0;
  gameOver = false;
  showResult = false;
  resultTEXT = '';
  isCorrect = false;

  constructor() {
    this.startGame();
  }
  getRandomCard(exclude: Card | null = null): Card {
    let card: Card;
    do {
      card = this.cards[Math.floor(Math.random() * this.cards.length)];
    } while (exclude && card.value === exclude.value);
    return card;
  }

  startGame() {
    this.currentCard = this.getRandomCard();
    this.nextCard = null;
    this.score = 0;
    this.gameOver = false;
    this.showResult = false;
  }

  MayoroMenor(guess: 'mayor' | 'menor') {
    if (this.gameOver || this.showResult || !this.currentCard) return;

    this.nextCard = this.getRandomCard();
    this.showResult = true;

    let correct = false;
    let result = '';

    if(guess === 'mayor') {
      if(this.nextCard.value > this.currentCard.value){
        correct = true;
        result = 'Correcto! es Mayor';
      } else if (this.nextCard.value === this.currentCard.value){
        correct = true;
        result = 'Incorrecto! es Menor';
      }
    } else {
      if (this.nextCard.value < this.currentCard.value){
        correct = true;
        result = 'Correcto Es Menor';
      } else if (this.nextCard.value === this.currentCard.value){
        correct = true;
        result = 'Empate seguis jugando'
      } else {
        result = 'Incorrecto. Es Mayor'
      }
    }

    this.isCorrect = correct;
    this.resultTEXT = result;

    if(correct) {
      this.score++;
      if(this.score > this.maxScore){
        this.maxScore = this.score;
      }
      setTimeout(() => {
        this.currentCard = this.nextCard;
        this.nextCard = null;
        this.showResult = false;
      }, 1500);
    } else {
      this.gameOver = true;
    }
  }
 
}