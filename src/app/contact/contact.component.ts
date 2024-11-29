import { Component } from '@angular/core';
import { FormService } from '../form.service';

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
  constructor(private formService: FormService) {}

  onSubmit() {
    this.formService.submitForm(this.formData).subscribe(
      (response) => {
        console.log('Form submitted successfully!', response);
        alert('Form submitted successfully!');
      },
      (error) => {
        console.error('Error submitting form', error);
        alert('Error submitting the form. Please try again.');
      }
    );
  }
}