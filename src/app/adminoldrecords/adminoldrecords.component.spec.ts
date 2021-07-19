import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminoldrecordsComponent } from './adminoldrecords.component';

describe('AdminoldrecordsComponent', () => {
  let component: AdminoldrecordsComponent;
  let fixture: ComponentFixture<AdminoldrecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminoldrecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminoldrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
