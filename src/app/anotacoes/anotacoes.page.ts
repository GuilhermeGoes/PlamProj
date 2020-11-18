import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.page.html',
  styleUrls: ['./anotacoes.page.scss'],
})
export class AnotacoesPage implements OnInit {

  public Anotacoes = [
    {id: 1, title: 'Titulo', description: 'Descricao'},
    {id: 2, title: 'Titulo', description: 'Descricao'},
    {id: 3, title: 'Titulo', description: 'Descricao'},

  ];


  constructor() { }

  ngOnInit() {
  }

}
