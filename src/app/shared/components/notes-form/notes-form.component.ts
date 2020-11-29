import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { note } from 'src/app/anotacoes/anotacoes.page';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrls: ['./notes-form.component.scss'],
})
export class NotesFormComponent implements OnInit {

  @Input() note: note;
  @Output() save = new EventEmitter();

  constructor() { }

  ngOnInit() {}

}
