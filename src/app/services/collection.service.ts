import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TestBed } from '@angular/core/testing';

export interface Card {
  front: string;
  back: string;
}

export interface Collection {
  id: number;
  title: string;
  // description: string;
  image: string;
  cards: Array<Card>
}

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private storage: Storage) { }

  private collections: Collection[] = [
    // { id: 1, title: 'Diretivas - 17.09 - Revisão', image: '../../assets/diretivas.jpg'},
    // { id: 2, title: 'Injeção de dependências  - 24.09 - Revisão', image: '../../assets/injecaodependencias.jpg'},
    // { id: 3, title: 'Past Continuous - Revisão', image: '../../assets/pastContinuous.png'}
  ];

   //private collections: Collection[] = [];

  public addCollection(collection: Collection){
    const maxId = Math.max(...this.collections.map(n => n.id), 0);

    console.log(collection.cards)
    this.collections.push({
      id: maxId + 1,
      title: collection.title, 
      // description: collection.description,
      image: collection.image,
      cards: collection.cards
    });
    this.storeData();
  }

  private storeData() {
    this.storage.set('collections', this.collections);
  }

  public getCollections() {
    return this.collections;
  }

  public find(id : number){
    return {...this.collections.find(c => c.id === id)};
  }

}
