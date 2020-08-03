import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PeriodFilterConfig } from '@iapps/ngx-dhis2-period-filter';

@Component({
  selector: 'app-pe-selection',
  templateUrl: './pe-selection.component.html',
  styleUrls: ['./pe-selection.component.css'],
})
export class PeSelectionComponent implements OnInit {
  periodFilterConfig: PeriodFilterConfig;
  selectedPeriods = [];

  constructor(
    private dialogRef: MatDialogRef<PeSelectionComponent>,
    @Inject(MAT_DIALOG_DATA) public selectionDialogData: any
  ) {}

  ngOnInit(): void {
    this.periodFilterConfig = {
      singleSelection: false,
      emitOnSelection: false,
      childrenPeriodSortOrder: 'ASC',
      allowDateRangeSelection: false,
      allowRelativePeriodSelection: false,
      allowFixedPeriodSelection: true,
    };
    console.log({ selectionDialogData: this.selectionDialogData });
  }

  onFilterUpdate(selectedPeriods, action: string) {
    this.dialogRef.close({
      selectedPeriods,
      action,
    });
  }
}
