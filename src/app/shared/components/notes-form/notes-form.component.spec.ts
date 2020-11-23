import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotesFormComponent } from './notes-form.component';

describe('NotesFormComponent', () => {
  let component: NotesFormComponent;
  let fixture: ComponentFixture<NotesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
