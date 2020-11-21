import { Component, OnInit } from '@angular/core';

export interface note {
  title: string;
  description: string;
}

@Component({
  selector: 'app-anotacoes',
  templateUrl: './anotacoes.page.html',
  styleUrls: ['./anotacoes.page.scss'],
})
export class AnotacoesPage implements OnInit {

  public notes: note[] = [
    {title: 'Entregar trabalho', description: 'Trabalho de matematica para dia 22/4'},
    {title: 'Horas', description: 'nao tenho tempo'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
