import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Collection } from 'src/app/services/collection.service';

@Component({
  selector: 'app-collections-form',
  templateUrl: './collections-form.component.html',
  styleUrls: ['./collections-form.component.scss'],
})

export class CollectionsFormComponent implements OnInit {

  @Input() public collection: Collection;
  @Output() save = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
