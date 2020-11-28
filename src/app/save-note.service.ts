import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { title } from 'process';
import { note } from './anotacoes/anotacoes.page';
import { NotesFormComponent } from './shared/components/notes-form/notes-form.component';


@Injectable({
  providedIn: 'root'
})
export class SaveNoteService {

  private notes: note [] = [];

  constructor(private storage: Storage) {
    this.fetchFromStorage();
   }

   private async fetchFromStorage(){
    this.notes.push(...(await this.storage.get('notes')));
   }

   private async updateStorage(){
     this.storage.set('notes', this.notes);
   }

  public allNotes(){
    return this.notes; 
  }

  public empty(): note {
    return{
      id: null,
      title: '',
      description: ''
    };
  }

  public update(updatedNote: note){
    const idx = this.notes.findIndex(n => n.id === updatedNote.id);
    this.notes[idx] = updatedNote;
    this.updateStorage();
    //console.log(idx);
  }

  public find(id : number){
    //return this.notes.find(n => n.id === id);
    return {...this.notes.find(n => n.id === id)};
  }

  public addNote(notes: note){
    const maxId = Math.max(...this.notes.map(n => n.id), 0);
    this.notes.push({
      id: maxId + 1,
      title: notes.title, 
      description: notes.description
    });
    this.updateStorage();
  }

}
