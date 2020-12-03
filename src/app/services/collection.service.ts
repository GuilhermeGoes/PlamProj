import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TestBed } from '@angular/core/testing';

export interface Collection {
  id: number;
  title: string;
  description: string;
  image: string;
  card: Array<{
    frente: string;
    verso: string;
  }>
}

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private storage: Storage) { }

  private collections: Collection[] = [
    { id: 1, title: 'Diretivas - 17.09 - Revisão', description: 'In porta mauris ut eget pharetra dolor.', image: '../../assets/diretivas.jpg', card: [{frente: 'teste', verso: 'verso teste'},{frente: 'teste2', verso: 'verso teste2'}]},
    { id: 2, title: 'Injeção de dependências  - 24.09 - Revisão', description: 'In porta mauris ut eget pharetra dolor.', image: '../../assets/injecaodependencias.jpg', card: [{frente: 'teste', verso: 'teste'}]},
    { id: 3, title: 'Past Continuous - Revisão', description: 'In porta mauris ut eget pharetra dolor.', image: '../../assets/pastContinuous.png', card: []}
  ];

  private storeData() {
    this.storage.set('collections', this.collections);
  }

  public getCollections() {
    return this.collections;
  }
}
