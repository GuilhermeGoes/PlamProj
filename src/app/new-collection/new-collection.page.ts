import { HttpClient } from '@angular/common/http';
import { ImageModalPage } from '../shared/pages/image-modal/image-modal.page';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Collection, CollectionService } from '../services/collection.service';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.page.html',
  styleUrls: ['./new-collection.page.scss'],
})
export class NewCollectionPage implements OnInit {

  public title: String = 'NOVA COLEÇÃO';
  public cards: Array<number>;
  public cardsAdd: number = 2;
  public cover: string = null;
  public hasCover: boolean = false;

  public emptyCollection: Collection = {
    id: null,
    title: '',
    description: '',
    image: '',
    // card: [{frente: '', verso: ''}]
  }

  public collections;
  public newCollections='';

  constructor(private saveCollection: CollectionService, private navCtrl : NavController, public modalController: ModalController) {
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

  handleSave(){
    console.log(this.emptyCollection);
  }
}
