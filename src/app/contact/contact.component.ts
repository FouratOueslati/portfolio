import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  sendEmail() {
    emailjs.send(
      'service_yva67mf',
      'template_9d0negb',
      this.formData,
      'Qnkf6zGcxoZPBJ5Ij'
    )
    .then(() => {
      alert('Email sent successfully!');
    }, (error) => {
      alert('Failed to send email: ' + error.text);
    });
  }
}
