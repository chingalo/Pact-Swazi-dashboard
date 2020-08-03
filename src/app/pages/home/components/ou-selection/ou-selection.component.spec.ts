import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OuSelectionComponent } from './ou-selection.component';

describe('OuSelectionComponent', () => {
  let component: OuSelectionComponent;
  let fixture: ComponentFixture<OuSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OuSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OuSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
