import { Component, OnInit } from '@angular/core';
import { AST } from '@angular/compiler';

@Component({
  selector: 'app-poker',
  templateUrl: './poker.page.html',
  styleUrls: ['./poker.page.scss'],
})
export class PokerPage implements OnInit {

  rules = ['you drink', 'choose two', 'your left drinks',
            'your right drinks', 'make a rule', 'probability',
            'cupid', 'game', 'free pass',
            'men drink', 'women drink', 'king\'s cup'
          ];

  pathToCardsImages = '../assets/img/pokerCards/';


  cards: ['AC', 'AD', 'AH', 'AS',
          '2C', '2D', '2H', '2S',
          '3C', '3D', '3H', '3S',
          '4C', '4D', '4H', '4S',
          '5C', '5D', '5H', '6S',
          '7C', '7D', '7H', '7S',
          '8C', '8D', '8H', '8S',
          '9C', '9D', '9H', '9S',
          '10C', '10D', '10H', '10S',
          'JC', 'JD', 'JH', 'JS',
          'QC', 'QD', 'QH', 'QS',
          'KC', 'KD', 'KH', 'KS',
          ];

  cardsRemaining = 52;

  chosen = 2;

  pathToActualImage = '.png';

  constructor() { }

  ngOnInit() {
    // this.nextCard();
    this.pathToActualImage = this.pathToActualImage + this.cards[0] + this.pathToActualImage;
  }

  nextCard() {
    this.chosen = Math.floor((Math.random() * this.cardsRemaining) + 1);
    this.cardsRemaining -= 1;
  }
}
