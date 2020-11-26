import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBarComponent } from './components/tab-bar';
import { RouterModule } from '@angular/router';
import { NotesFormComponent } from './components/notes-form/notes-form.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    NotesFormComponent, 
    TabBarComponent, 
    HeaderComponent
  ],
  exports: [
    NotesFormComponent, 
    TabBarComponent, 
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class SharedModule { }
