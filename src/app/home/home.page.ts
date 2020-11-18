import { Component } from '@angular/core';
import { CollectionService } from '../services/collection.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public colecoes = this.collectionService.getCollections();

  constructor(private collectionService: CollectionService) {}

}
