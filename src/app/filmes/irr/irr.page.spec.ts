import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IrrPage } from './irr.page';

describe('IrrPage', () => {
  let component: IrrPage;
  let fixture: ComponentFixture<IrrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IrrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
