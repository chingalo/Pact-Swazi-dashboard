import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeSelectionComponent } from '../../components/pe-selection/pe-selection.component';
import { OuSelectionComponent } from '../../components/ou-selection/ou-selection.component';
import {
  getDefaultPeriodSelections,
  getDefaultOrganisationUnitSelections,
} from '../../helpers/get-default-selections';

import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { loadDashboardData, addDashboardData } from 'src/app/store/actions';
import { Observable } from 'rxjs';
import { getAnlyticsParameters } from '../../helpers/get-anlytics-parameters';
import {
  getCurrentAnalyticsLoadingStatus,
  getCurrentAnalytics,
  getCurrentAnalyticsError,
} from 'src/app/store/selectors/dashboard-data.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedPeriods: any;
  selectedOrgUnitItems: any;
  isLoading$: Observable<boolean>;
  analytics$: Observable<any>;
  analyticsError$: Observable<any>;

  constructor(private dialog: MatDialog, private store: Store<State>) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(getCurrentAnalyticsLoadingStatus);
    this.analytics$ = this.store.select(getCurrentAnalytics);
    this.analyticsError$ = this.store.select(getCurrentAnalyticsError);
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
      const { pe, dx, ou } = getAnlyticsParameters(
        this.selectedOrgUnitItems,
        this.selectedPeriods
      );
      this.store.dispatch(loadDashboardData({ pe, dx, ou }));
    }
  }
}
