import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NoteViewComponent} from './note-view/note-view.component';

interface note {
  title: string;
  description: string;
}

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.page.html',
  styleUrls: ['./anotacoes.page.scss'],
})
export class AnotacoesPage{

  public notes: note[] = [
    {title: 'Entregar trabalho', description: 'Trabalho de matematica para dia 22/4'},
    {title: 'Horas', description: 'nao tenho tempo'}
  ];
  constructor(private modalController: ModalController) { }

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
