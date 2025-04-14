import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-pic-section',
  standalone: true,
  imports: [],
  templateUrl: './personal-pic-section.component.html',
  styleUrl: './personal-pic-section.component.scss'
})
export class PersonalPicSectionComponent {
  emailIconSrc: string = './assets/Email button.png';
  gitHubIconSrc: string = './assets/Github button.png'
  linkedInIconSrc: string = './assets/Linkedin button.png'
  changeIcon(isHovered: boolean, icon: string): void {
    if (icon === 'email') {
      this.emailIconSrc = isHovered ? './assets/email lightblue.png' : './assets/Email button.png';
    } else if (icon === 'github') {
      this.gitHubIconSrc = isHovered ? './assets/gitHub lightblue.png' : './assets/Github button.png';
    } else if (icon === 'linkedin') {
      this.linkedInIconSrc = isHovered ? './assets/linkedIn lightblue.png' : './assets/Linkedin button.png';
    }
  }
}
