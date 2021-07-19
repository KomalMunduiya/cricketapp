import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldrecordsComponent } from './oldrecords.component';

describe('OldrecordsComponent', () => {
  let component: OldrecordsComponent;
  let fixture: ComponentFixture<OldrecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldrecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
