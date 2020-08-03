import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeSelectionComponent } from './pe-selection.component';

describe('PeSelectionComponent', () => {
  let component: PeSelectionComponent;
  let fixture: ComponentFixture<PeSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
