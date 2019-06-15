import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

//components
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent,
  ],
  imports: [CommonModule],
  exports: [PassengerDashboardComponent],
})
export class PassengerDashboardModule {}
