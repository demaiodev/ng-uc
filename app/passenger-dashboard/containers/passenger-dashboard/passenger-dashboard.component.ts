import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count [items]="passengers"></passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
      ></passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor() {}
  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        fullname: 'Tyler Langies',
        checkedin: false,
        checkindate: 1490742000000,
        children: [{ name: 'Homie Jr.', age: 11 }],
      },
      {
        id: 2,
        fullname: 'Bill Bilbert',
        checkedin: true,
        children: [{ name: 'Ted', age: 10 }, { name: 'Bobby', age: 8 }],
      },
      {
        id: 3,
        fullname: 'Christopher',
        checkedin: false,
        checkindate: 1490742000000,
      },
      {
        id: 4,
        fullname: 'Joey Maloney',
        checkedin: true,
        children: [{ name: 'Ned Stark', age: 2 }],
      },
      {
        id: 5,
        fullname: 'Hank Hill',
        checkedin: false,
      },
      {
        id: 1,
        fullname: 'peepee',
        checkedin: true,
      },
    ];
  }

  handleRemove(event) {
    console.log(event);
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }

  handleEdit(event) {
    console.log(event);
  }
}
