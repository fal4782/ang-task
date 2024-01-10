import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuspensionReversalComponent } from './add-suspension-reversal.component';

describe('AddSuspensionReversalComponent', () => {
  let component: AddSuspensionReversalComponent;
  let fixture: ComponentFixture<AddSuspensionReversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSuspensionReversalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSuspensionReversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
