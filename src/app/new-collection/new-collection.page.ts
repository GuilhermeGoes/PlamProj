import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-collection',
  templateUrl: './new-collection.page.html',
  styleUrls: ['./new-collection.page.scss'],
})
export class NewCollectionPage implements OnInit {

  title: String = 'NOVA COLEÇÃO';

  constructor() { }

  ngOnInit() {
  }

}
