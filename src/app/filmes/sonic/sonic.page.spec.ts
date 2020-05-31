import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SonicPage } from './sonic.page';

describe('SonicPage', () => {
  let component: SonicPage;
  let fixture: ComponentFixture<SonicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SonicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
