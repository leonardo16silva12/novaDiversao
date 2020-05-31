import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DbzPage } from './dbz.page';

describe('DbzPage', () => {
  let component: DbzPage;
  let fixture: ComponentFixture<DbzPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbzPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DbzPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
