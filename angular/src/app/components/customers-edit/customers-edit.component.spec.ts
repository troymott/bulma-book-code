import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersEditComponent } from './customers-edit.component';

describe('CustomersEditComponent', () => {
  let component: CustomersEditComponent;
  let fixture: ComponentFixture<CustomersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
