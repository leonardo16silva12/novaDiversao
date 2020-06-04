import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntstlPage } from './intstl.page';

describe('IntstlPage', () => {
  let component: IntstlPage;
  let fixture: ComponentFixture<IntstlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntstlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntstlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
