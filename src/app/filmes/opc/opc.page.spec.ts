import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpcPage } from './opc.page';

describe('OpcPage', () => {
  let component: OpcPage;
  let fixture: ComponentFixture<OpcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
