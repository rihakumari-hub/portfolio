import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskAiDialogComponent } from './ask-ai-dialog-component';

describe('AskAiDialogComponent', () => {
  let component: AskAiDialogComponent;
  let fixture: ComponentFixture<AskAiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskAiDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AskAiDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
