import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { pages } from './pages';
import { OuSelectionComponent } from './components/ou-selection/ou-selection.component';
import { PeSelectionComponent } from './components/pe-selection/pe-selection.component';
import { DashboardChartComponent } from './components/dashboard-chart/dashboard-chart.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [...pages, OuSelectionComponent, PeSelectionComponent, DashboardChartComponent, LoaderComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
