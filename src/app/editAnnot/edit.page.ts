import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { title } from 'process';
import { note } from '../anotacoes/anotacoes.page';
import { SaveNoteService } from '../save-note.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  constructor(private route: ActivatedRoute, private saveNote : SaveNoteService, private navCtrl: NavController ) { }

  public notes : note;

  
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.notes = this.saveNote.find(id);
  }

  public save() {
    this.saveNote.update(this.notes);
    this.navCtrl.back();
  }

}
