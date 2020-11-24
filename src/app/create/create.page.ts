import { Component, OnInit } from '@angular/core';
import { note } from '../anotacoes/anotacoes.page';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  //criação da função de salvar as anotações
  public emptyNote: note = {
    title: '',
    description: ''
  }

  constructor() { }

  ngOnInit() {
  }

  handleSave(){
    console.log(this.emptyNote);
  }

}
