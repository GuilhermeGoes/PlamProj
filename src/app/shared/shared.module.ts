import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBarComponent } from './components/tab-bar';
import { RouterModule } from '@angular/router';
import { NotesFormComponent } from './components/notes-form/notes-form.component';

@NgModule({
  declarations: [NotesFormComponent, TabBarComponent],
  exports: [NotesFormComponent, TabBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class SharedModule { }
