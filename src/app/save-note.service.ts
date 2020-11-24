import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { title } from 'process';
import { note } from './anotacoes/anotacoes.page';
import { NotesFormComponent } from './shared/components/notes-form/notes-form.component';

interface Anotacoes {
  title: string,
  //description: string;
}

@Injectable({
  providedIn: 'root'
})
export class SaveNoteService {

  private notes: Anotacoes [] = [];

  constructor(private storage: Storage) {
    this.fetchFromStorage();
   }

   private async fetchFromStorage(){
     this.notes = (await this.storage.get('titulo')) ?? [];
     //this.notes = (await this.storage.get('descricao')) ?? [];
   }

   private async updateStorage(){
     this.storage.set(title, this.notes);
     //this.storage.set(description, this.notes);
   }

  public allNotes(){
    return this.notes; 
  }

  public addNote(title:string){
    this.notes.push({
      title
    });
  }

  /*public addNote(title:string, description:string){
    this.notes.push({
      title, description
    });this.updateStorage();
  }*/
}
