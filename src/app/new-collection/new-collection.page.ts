import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.page.html',
  styleUrls: ['./new-collection.page.scss'],
})
export class NewCollectionPage implements OnInit {

  public title: String = 'NOVA COLEÇÃO';
  public cards: Array<number>;
  public cardsAdd: number = 2;

  constructor() {
    this.showCards();
  }

  ngOnInit() {
  }

  public addCard() {
    const cardLimit = 25;

    if (this.cardsAdd < cardLimit)
      this.cardsAdd++;

    this.showCards();
  }

  private showCards() {
    this.cards = Array(this.cardsAdd).map((i) => i);
  }
}
