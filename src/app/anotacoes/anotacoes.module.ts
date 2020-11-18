import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnotacoesPageRoutingModule } from './anotacoes-routing.module';

import { AnotacoesPage } from './anotacoes.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnotacoesPageRoutingModule,
    SharedModule
  ],
  declarations: [AnotacoesPage]
})
export class AnotacoesPageModule {}
