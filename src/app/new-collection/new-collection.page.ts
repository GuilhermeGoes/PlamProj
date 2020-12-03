import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ImageModalPage } from '../shared/pages/image-modal/image-modal.page';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.page.html',
  styleUrls: ['./new-collection.page.scss'],
})
export class NewCollectionPage implements OnInit {

  public title: String = 'NOVA COLEÇÃO';
  public cards: Array<number>;
  public cardsAdd: number = 2;

  constructor(public modalController: ModalController) {
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      cssClass: 'my-custom-class'
    });

    // modal.onDidDismiss()
    //   .then((data) => {
    //     const user = data['data']; // Here's your selected user!
    // });
    return await modal.present();
  }
}
