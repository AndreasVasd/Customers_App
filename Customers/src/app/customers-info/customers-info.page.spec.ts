import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomersInfoPage } from './customers-info.page';

describe('CustomersInfoPage', () => {
  let component: CustomersInfoPage;
  let fixture: ComponentFixture<CustomersInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomersInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
