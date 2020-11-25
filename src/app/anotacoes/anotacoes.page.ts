import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SaveNoteService } from '../save-note.service';
import { NoteViewComponent} from './note-view/note-view.component';

export interface note {
  title: string;
  description: string;
}

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.page.html',
  styleUrls: ['./anotacoes.page.scss'],
})
export class AnotacoesPage{

  public notes: note[] =  this.showAnotacao.allNotes();

  constructor(private modalController: ModalController, private showAnotacao: SaveNoteService) { }

  async showNotes(notes: note){
    const modal = await this.modalController.create({
      component: NoteViewComponent,
      componentProps: {
        notes
      }
    });
    await modal.present();
  }

  ngOnInit() {
  }

}
