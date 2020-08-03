import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeSelectionComponent } from '../../components/pe-selection/pe-selection.component';
import { OuSelectionComponent } from '../../components/ou-selection/ou-selection.component';
import {
  getDefaultPeriodSelections,
  getDefaultOrganisationUnitSelections,
} from '../../helpers/get-default-selections';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedPeriods: any;
  selectedOrgUnitItems: any;

  //@TODO using store to get data
  isLoading: boolean;
  analytics: any;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.selectedPeriods = getDefaultPeriodSelections();
    this.selectedOrgUnitItems = getDefaultOrganisationUnitSelections();
    this.updateChart();
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
      console.log(dialogData.action);
      if (dialogData && dialogData.action) {
        this.selectedOrgUnitItems =
          dialogData.selectedOrgUnitItems.items || this.selectedOrgUnitItems;
        this.updateChart();
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
        this.updateChart();
      }
    });
  }
  updateChart() {
    if (
      this.selectedOrgUnitItems &&
      this.selectedOrgUnitItems.length > 0 &&
      this.selectedPeriods &&
      this.selectedPeriods.length > 0
    ) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1 * 1000);
    }
  }
}
