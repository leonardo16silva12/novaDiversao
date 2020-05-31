import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdfPage } from './idf.page';

describe('IdfPage', () => {
  let component: IdfPage;
  let fixture: ComponentFixture<IdfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdfPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
