import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlivescoresComponent } from './adminlivescores.component';

describe('AdminlivescoresComponent', () => {
  let component: AdminlivescoresComponent;
  let fixture: ComponentFixture<AdminlivescoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminlivescoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlivescoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
