import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationEntryComponent } from './evaluation-entry.component';

describe('EvaluationEntryComponent', () => {
  let component: EvaluationEntryComponent;
  let fixture: ComponentFixture<EvaluationEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
