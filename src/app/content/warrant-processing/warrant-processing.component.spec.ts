import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarrantProcessingComponent } from './warrant-processing.component';

describe('WarrantProcessingComponent', () => {
  let component: WarrantProcessingComponent;
  let fixture: ComponentFixture<WarrantProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarrantProcessingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarrantProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
