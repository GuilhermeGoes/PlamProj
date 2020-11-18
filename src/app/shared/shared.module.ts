import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnotComponent } from './components/annot/annot.component';
import { TabBarComponent } from './components/tab-bar';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AnnotComponent, TabBarComponent],
  exports: [AnnotComponent, TabBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ]
})
export class SharedModule { }
