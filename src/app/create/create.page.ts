import { Component, OnInit } from '@angular/core';
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
    title: '',
    description: ''
  }

  public notes;
  public newNotes='';

  constructor(private saveNote : SaveNoteService) { }

  ngOnInit() {
    setTimeout(()=>{
      this.notes = this.saveNote.allNotes();
    },1000)
    
  }

  public addNotes(){
    this.saveNote.addNote(this.newNotes);
    this.newNotes = '';
  }

  handleSave(){
    console.log(this.emptyNote);
  }

}
