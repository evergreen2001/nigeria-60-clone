import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.css'],
})
export class PrizesComponent implements OnInit {
  public prizes;
  constructor() {}

  ngOnInit(): void {
    this.prizes = [
      {
        price: '₦3,000,000',
        position: 'THE WINNER',
        award: 'Award Plaque',
        certificate: 'Certificate of Accomplishment',
      },

      {
        price: '₦1,500,000',
        position: 'FIRST RUNNER UP',
        award: 'Award Plaque',
        certificate: 'Certificate of Accomplishment',
      },

      {
        price: '₦1,000,000',

        position: 'SECOND RUNNER UP',
        award: 'Award Plaque',
        certificate: 'Certificate of Accomplishment',
      },


    ];
  }
}
