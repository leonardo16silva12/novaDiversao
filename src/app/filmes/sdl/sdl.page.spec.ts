import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SdlPage } from './sdl.page';

describe('SdlPage', () => {
  let component: SdlPage;
  let fixture: ComponentFixture<SdlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SdlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
