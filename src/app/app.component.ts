import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, private router: Router) {}

  openMenu() {
    this.menu.open('main-menu'); 
  }

  logout() {
    
    console.log('User logged out');
   
    this.router.navigate(['/login']);
  }
}
