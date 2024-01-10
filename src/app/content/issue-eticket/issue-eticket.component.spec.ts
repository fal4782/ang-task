import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueEticketComponent } from './issue-eticket.component';

describe('IssueEticketComponent', () => {
  let component: IssueEticketComponent;
  let fixture: ComponentFixture<IssueEticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueEticketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueEticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
