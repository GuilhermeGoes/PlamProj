import { HttpClient } from '@angular/common/http';
import { ImageModalPage } from '../shared/pages/image-modal/image-modal.page';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Collection, CollectionService } from '../services/collection.service';
import { NavController, ModalController } from '@ionic/angular';

import { Card } from '../shared/models/card'

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.page.html',
  styleUrls: ['./new-collection.page.scss'],
})
export class NewCollectionPage implements OnInit {

  public title: String = 'NOVA COLEÇÃO';
  public cards: Array<Card> = [];
  public cardsAdd: number = 2;
  public cover: string = null;
  public hasCover: boolean = false;
  public collectionName: string;
  public cardMaxLimit = 25;
  public cardMinLimit = 2;

  public emptyCollection: Collection = {
    id: null,
    title: '',
    // description: '',
    image: '',
    cards: []
  }

  public collections;
  public newCollections='';

  constructor(private saveCollection: CollectionService, private navCtrl : NavController, public modalController: ModalController) { 
    for(let i = 0; i < this.cardMinLimit; i++) {
      this.addNewReply();
    }
  }

  ngOnInit() {
  }

  public addNewReply() {
    if (this.cards.length < this.cardMaxLimit) {
      let newCard = new Card();
      this.cards.push(newCard);
    }
  }

  public removeCard(card) {
    if (this.cards.length > this.cardMinLimit)
      this.cards.splice(this.cards.indexOf(card), 1);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ImageModalPage,
      cssClass: 'my-custom-class'
    });

    modal.onDidDismiss()
      .then((data) => {
        this.cover = data['data'];
        this.hasCover = true;
      })

    return await modal.present();
  }
  
  public addCollections(){
    // this.saveCollection.addCollection(this.emptyCollection);
    this.newCollections = '';
    this.navCtrl.back();
  }

  public handleSave(){
    console.log(this.emptyCollection);
  }
}
