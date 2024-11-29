import { Component } from '@angular/core';
import { FormService } from '../../form.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    number: '',
    message: '',
  };
  constructor(
    private formService: FormService,
    private toastr: ToastrService
  ) {}

  playNotificationSound() {
    const audio = new Audio();
    audio.src = 'emergence-ringtone.mp3'; // Place your sound file in src/assets/sounds
    audio.load();
    audio.play();
  }

  onSubmit() {
    this.toastr.success('This is a test toast!');

    this.formService.submitForm(this.formData).subscribe(
      (response) => {
        console.log('Form submitted successfully!', response);
        alert('Form submitted successfully!');
        this.playNotificationSound(); // Play success sound
      
        this.formData = {
          name: '',
          email: '',
          number: '',
          message: ''
        };
      },
      (error) => {
        console.error('Error submitting form', error);
        this.toastr.error('Error submitting the form. Please try again.');
      }
    );
  }
}