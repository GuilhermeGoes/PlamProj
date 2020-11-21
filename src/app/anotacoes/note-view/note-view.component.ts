import { ModalController } from '@ionic/angular';
import { note } from './../anotacoes.page';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.scss'],
})
export class NoteViewComponent implements OnInit {

  @Input() notes: note;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}
}
