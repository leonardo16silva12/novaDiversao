import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { B10Page } from './b10.page';

describe('B10Page', () => {
  let component: B10Page;
  let fixture: ComponentFixture<B10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(B10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
