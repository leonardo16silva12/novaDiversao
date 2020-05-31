import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PpPage } from './pp.page';

describe('PpPage', () => {
  let component: PpPage;
  let fixture: ComponentFixture<PpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
