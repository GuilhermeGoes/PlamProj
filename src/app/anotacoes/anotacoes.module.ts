import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnotacoesPageRoutingModule } from './anotacoes-routing.module';

import { AnotacoesPage } from './anotacoes.page';
import { SharedModule } from '../shared/shared.module';
import { NoteViewComponent } from './note-view/note-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnotacoesPageRoutingModule,
    SharedModule
  ],
  declarations: [AnotacoesPage, NoteViewComponent]
})
export class AnotacoesPageModule {}
