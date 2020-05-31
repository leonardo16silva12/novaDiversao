import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NshiPage } from './nshi.page';

describe('NshiPage', () => {
  let component: NshiPage;
  let fixture: ComponentFixture<NshiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NshiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NshiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
