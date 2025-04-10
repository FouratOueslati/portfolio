import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  isChecked = false;
  showError = false;
  imageSrc: string = './assets/Ellipse 32.png';

  
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.showError = false;
    }
  }


  changeImage(isHover: boolean) {
    if (this.showError) {
      this.imageSrc = './assets/Ellipse red.png'; 
    } else if (isHover && !this.isChecked) {
      this.imageSrc = './assets/hover checkbox.png';
    } else {
      this.imageSrc = this.isChecked ? './assets/checked.png' : './assets/Ellipse 32.png'; 
    }
  }


  sendEmail() {
  
    if (!this.isChecked) {
      this.showError = true; 
      return;
    }
    if (this.formData.name && this.formData.email && this.formData.message) {
      emailjs.send(
        'service_yva67mf',  // Your EmailJS service ID
        'template_9d0negb',  // Your EmailJS template ID
        this.formData,       // Form data
        'Qnkf6zGcxoZPBJ5Ij'  // Your EmailJS user/public key
      )
      .then(() => {
        alert('Email sent successfully!');
      })
      .catch((error) => {
        alert('Failed to send email: ' + error.text);
      });
    } else {
      alert('Please fill in all the fields.');
    }
  }
}
