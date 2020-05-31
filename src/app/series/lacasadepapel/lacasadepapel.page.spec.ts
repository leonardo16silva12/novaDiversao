import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LacasadepapelPage } from './lacasadepapel.page';

describe('LacasadepapelPage', () => {
  let component: LacasadepapelPage;
  let fixture: ComponentFixture<LacasadepapelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LacasadepapelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LacasadepapelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
