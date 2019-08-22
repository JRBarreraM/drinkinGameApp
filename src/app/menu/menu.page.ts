import { Component, OnInit } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  drinkingGames: Game[] = [
    {
      id: 'poker',
      title: 'Trident',
      image: 'assets/img/pokerCards/AD.png',
      //http://acbl.mybigcommerce.com/52-playing-cards/
      instructions: 'Players draw one card per turn and perform actions based on the number of the card drawn.',
    },

    {
      id: 'paper',
      title: 'Papelito',
      image: 'assets/img/papelito/Papelito.png',
      //https://www.freepng.es/png-u59o2t/download.html
      instructions: 'Make teams, write words or phrases and try to guess.',
    },

    {
      id: 'body',
      title: 'Body Parts',
      image: 'assets/img/bodyParts/fiveSenses.png',
      //http://acbl.mybigcommerce.com/52-playing-cards/
      instructions: 'Choose your partner wisely, because you are gonna play twister over him/her.',
    },

    {
      id: 'question',
      title: 'Pregunta Pregunta',
      image: 'assets/img/preguntaPregunta/preguntaPregunta.png',
      //https://www.seekpng.com/ipng/u2t4y3w7r5t4i1w7_preguntas-ms-frecuentes-pregunta-png/
      instructions: 'It is like hot potato but with questions.',
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
