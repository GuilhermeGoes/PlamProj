import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TabBarComponent } from './components/tab-bar';
import { NotesFormComponent } from './components/notes-form/notes-form.component';
import { HeaderComponent } from './components/header/header.component';
import { CollectionsFormComponent } from './components/collections-form/collections-form.component';

import { ImageModalPageModule } from './pages/image-modal/image-modal.module';

@NgModule({
  declarations: [
    NotesFormComponent, 
    TabBarComponent, 
    HeaderComponent,
    CollectionsFormComponent
  ],
  exports: [
    NotesFormComponent, 
    TabBarComponent, 
    HeaderComponent,
    CollectionsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ImageModalPageModule
  ]
})
export class SharedModule { }
