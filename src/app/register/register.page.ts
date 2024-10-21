import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; 
import { formatDistance } from 'date-fns/formatDistance';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController 
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      studentName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      class: ['', Validators.required],
      gender: ['', Validators.required],
      medium: ['', Validators.required],
      schoolName: ['', Validators.required],
      maths: [false],
      science: [false],
      social: [false],
      kannada: [false],
      sanskrit: [false],
      hindi: [false],
      allSubjects: [false],
      registrationFee: [{ value: 500, disabled: true }, Validators.required], 
      fees: [{ value: '', disabled: true }, Validators.required],
      paymentMode: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

   
    this.registerForm.valueChanges.subscribe(() => {
      this.updateFees();
    });
  }

  ngOnInit() {}

  updateFees() {
    const maths = this.registerForm.get('maths')?.value;
    const science = this.registerForm.get('science')?.value;
    const social = this.registerForm.get('social')?.value;
    const kannada = this.registerForm.get('kannada')?.value;
    const sanskrit = this.registerForm.get('sanskrit')?.value;
    const hindi = this.registerForm.get('hindi')?.value;
    const allSubjects = this.registerForm.get('allSubjects')?.value;

    let fees = 0;

    if (allSubjects) {
      fees = 10000;
    } else {
      if (maths) fees += 2000;
      if (science) fees += 2000;
      if (social) fees += 2000;
      if (kannada) fees += 1500;
      if (sanskrit) fees += 1500;
      if (hindi) fees += 1500;
    }

  
    this.registerForm.get('fees')?.setValue(fees, { emitEvent: false });
  }

  async register() {
    if (this.registerForm.valid) {
      const registrationFeePaid = this.registerForm.get('registrationFee')?.value === 500; 

      if (!registrationFeePaid) {
        this.showAlert('Registration Fee not paid', 'Please pay the registration fee of ₹500 to complete the registration.');
        return; 
      }

      const { paymentMode, dateOfJoining } = this.registerForm.value;

      if (paymentMode === 'monthly') {
        this.scheduleMonthlyReminders(dateOfJoining);
      }

      const formData = this.registerForm.value;
      localStorage.setItem('registeredUser', JSON.stringify(formData));

      console.log('Registering with', formData);
      this.router.navigate(['/login']);
    } else {
      this.showAlert('Invalid Form', 'Please fill in all required fields correctly.');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  scheduleMonthlyReminders(dateOfJoining: string) {
    const joiningDate = new Date(dateOfJoining);
    const currentDate = new Date();
    const months = this.calculateMonthsDifference(joiningDate, currentDate);

    console.log(`Monthly reminders will be sent starting from ${formatDistance(joiningDate, currentDate)}.`);
   
  }

  calculateMonthsDifference(startDate: Date, endDate: Date): number {
    const yearsDiff = endDate.getFullYear() - startDate.getFullYear();
    const monthsDiff = endDate.getMonth() - startDate.getMonth();
    return yearsDiff * 12 + monthsDiff;
  }

  goBack() {
    this.router.navigate(['/login']);
  }

  
  initiatePayment() {
    const totalFees = this.registerForm.get('registrationFee')?.value;
    const paymentUrl = `https://www.phonepe.com/app-download/`;
    window.open(paymentUrl, '_blank');
  }
}
