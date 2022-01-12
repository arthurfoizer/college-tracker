import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneEvaluationsComponent } from './done-evaluations.component';

describe('DoneEvaluationsComponent', () => {
  let component: DoneEvaluationsComponent;
  let fixture: ComponentFixture<DoneEvaluationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneEvaluationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
