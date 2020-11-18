import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Collection {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private storage: Storage) { }

  private collections: Collection[] = [
    { id: 1, title: 'Diretivas - 17.09 - Revisão', description: 'In porta mauris ut eget pharetra dolor.', image: '../../assets/diretivas.jpg' },
    { id: 2, title: 'Injeção de dependências  - 24.09 - Revisão', description: 'In porta mauris ut eget pharetra dolor.', image: '../../assets/injecaodependencias.jpg' },
    { id: 3, title: 'Past Continuous - Revisão', description: 'In porta mauris ut eget pharetra dolor.', image: '../../assets/pastContinuous.png'}
  ];

  private storeData() {
    this.storage.set('collections', this.collections);
  }

  public getCollections() {
    return this.collections;
  }
}
