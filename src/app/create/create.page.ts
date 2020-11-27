import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { note } from '../anotacoes/anotacoes.page';
import { SaveNoteService } from '../save-note.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  //criação da função de salvar as anotações
  public emptyNote: note = {
    id: null,
    title: '',
    description: ''
  }

  public notes;
  public newNotes='';

  constructor(private saveNote : SaveNoteService, private navCtrl : NavController) { }

  ngOnInit() {
    setTimeout(()=>{
      this.notes = this.saveNote.allNotes();
    },1000)
    
  }

  public addNotes(){
    this.saveNote.addNote(this.emptyNote);
    this.newNotes = '';
    this.navCtrl.back();
  }

  handleSave(){
    console.log(this.emptyNote);
  }

}
