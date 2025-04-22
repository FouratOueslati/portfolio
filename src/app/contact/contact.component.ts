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
  formSubmitted = false;
  isChecked = false;
  showError = false;
  isHover = false;
  imageSrc: string = './assets/Ellipse 32.png';


  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.showError = false;
    }
    this.changeImage();
  }


  changeImage() {
    if (this.showError) {
      this.imageSrc = './assets/Ellipse red.png';
    } else if (this.isHover && !this.isChecked) {
      this.imageSrc = './assets/hover checkbox.png';
    } else {
      this.imageSrc = this.isChecked ? './assets/checked.png' : './assets/Ellipse 32.png';
    }
  }


  onMouseEnter() {
    this.isHover = true;
    this.changeImage();
  }


  onMouseLeave() {
    this.isHover = false;
    this.changeImage();
  }


  sendEmail() {
    this.formSubmitted = true;

    if (!this.isChecked) {
      this.showError = true;
      this.changeImage();
      return;
    }

    if (this.formData.name && this.formData.email && this.formData.message) {
      emailjs.send(
        'service_yva67mf',
        'template_9d0negb',
        this.formData,
        'Qnkf6zGcxoZPBJ5Ij'
      );

      // z.B. direkt hier ein Hinweis — Achtung: du weißt nicht ob's erfolgreich war
      alert('Email wurde abgeschickt!');

      this.resetForm();
    }
  }


  resetForm() {
    this.formData = { name: '', email: '', message: '' };
    this.isChecked = false;
    this.showError = false;
    this.formSubmitted = false;
    this.changeImage();
  }
}