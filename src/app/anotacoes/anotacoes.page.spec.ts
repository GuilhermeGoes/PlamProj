import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnotacoesPage } from './anotacoes.page';

describe('AnotacoesPage', () => {
  let component: AnotacoesPage;
  let fixture: ComponentFixture<AnotacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotacoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnotacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
