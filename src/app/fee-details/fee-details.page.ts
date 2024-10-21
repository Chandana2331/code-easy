import { Component } from '@angular/core';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-fee-details',
  templateUrl: './fee-details.page.html',
  styleUrls: ['./fee-details.page.scss'],
})
export class FeeDetailsPage {
  constructor(private location: Location) {} 
  
  goBack() {
    this.location.back();
  }
}
