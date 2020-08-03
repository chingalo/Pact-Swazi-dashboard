import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Exporting from 'highcharts/modules/exporting';
// Initialize exporting module.
// Exporting(Highcharts);

import { MatDialog } from '@angular/material/dialog';
import { PeSelectionComponent } from '../../components/pe-selection/pe-selection.component';

import { OuSelectionComponent } from '../../components/ou-selection/ou-selection.component';

import { DEFAULT_CHART } from '../../helpers/get-char-object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  selectedPeriods: any;
  selectedOrgUnitItems: any;

  ngOnInit() {
    this.selectedPeriods = [];
    this.selectedOrgUnitItems = [];
  }

  openOrganisationUnitFilter() {
    const width = '800px';
    const height = '700px';
    const selectionDialog = this.dialog.open(OuSelectionComponent, {
      width,
      height,
      data: {
        selectedOrgUnitItems: this.selectedOrgUnitItems,
      },
    });
    selectionDialog.afterClosed().subscribe((dialogData: any) => {
      console.log({ dialogData });
      if (dialogData && dialogData.action) {
        this.selectedOrgUnitItems =
          dialogData.selectedOrgUnitItems.items || this.selectedOrgUnitItems;
      }
    });
  }

  openPeriodFilter() {
    const width = '800px';
    const height = '600px';
    const selectionDialog = this.dialog.open(PeSelectionComponent, {
      width,
      height,
      data: {
        selectedPeriods: this.selectedPeriods,
      },
    });
    selectionDialog.afterClosed().subscribe((dialogData: any) => {
      if (dialogData && dialogData.action && dialogData.action === 'UPDATE') {
        this.selectedPeriods =
          dialogData.selectedPeriods.items || this.selectedPeriods;
      }
    });
  }

  updateChart() {
    // Highcharts.chart(DEFAULT_CHART);
  }
}
