import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.page.html',
  styleUrls: ['./new-collection.page.scss'],
})
export class NewCollectionPage implements OnInit {

  public title: String = 'NOVA COLEÇÃO';
  public cartoes: Array<number>;
  public cartoesAdd: number = 2;

  constructor() {
    this.cartoes = Array(this.cartoesAdd).map((i) => i);
  }

  ngOnInit() {
  }

}
