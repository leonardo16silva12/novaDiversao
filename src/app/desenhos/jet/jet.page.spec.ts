import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JetPage } from './jet.page';

describe('JetPage', () => {
  let component: JetPage;
  let fixture: ComponentFixture<JetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
