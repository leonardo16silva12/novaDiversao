import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdePage } from './ade.page';

describe('AdePage', () => {
  let component: AdePage;
  let fixture: ComponentFixture<AdePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
