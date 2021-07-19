import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreentriesComponent } from './scoreentries.component';

describe('ScoreentriesComponent', () => {
  let component: ScoreentriesComponent;
  let fixture: ComponentFixture<ScoreentriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreentriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreentriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
