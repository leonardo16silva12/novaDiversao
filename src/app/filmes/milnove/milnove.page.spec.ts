import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MilnovePage } from './milnove.page';

describe('MilnovePage', () => {
  let component: MilnovePage;
  let fixture: ComponentFixture<MilnovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilnovePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MilnovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
