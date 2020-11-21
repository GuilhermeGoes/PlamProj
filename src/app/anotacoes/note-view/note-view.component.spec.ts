import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoteViewComponent } from './note-view.component';

describe('NoteViewComponent', () => {
  let component: NoteViewComponent;
  let fixture: ComponentFixture<NoteViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteViewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
