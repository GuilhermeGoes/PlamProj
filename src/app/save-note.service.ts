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

  public addNote(notes: note){
    this.notes.push({
      title: notes.title, 
      description: notes.description
    });
    this.updateStorage();
  }

  /*public addNote(title:string, description:string){
    this.notes.push({
      title, description
    });this.updateStorage();
  }*/
}
