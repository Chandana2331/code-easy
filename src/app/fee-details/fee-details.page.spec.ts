import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fee-details',
  templateUrl: './fee-details.page.html',
  styleUrls: ['./fee-details.page.scss'],
})
export class FeeDetailsPage {
  constructor(private navCtrl: NavController) {}

  goBack() {
    this.navCtrl.back();
  }
}
