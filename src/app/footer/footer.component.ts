import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  gitHubIconSrc: string = './assets/github dark.png';
  emailIconSrc: string = './assets/email dark.png';
  linkedInIconSrc: string = './assets/linkedIn dark.png';

  changeIcon(isHovered: boolean, icon: string): void {
    if (icon === 'email') {
      this.emailIconSrc = isHovered ? './assets/email white.png' : './assets/email dark.png';
    } else if (icon === 'github') {
      this.gitHubIconSrc = isHovered ? './assets/gitHub white.png' : './assets/github dark.png';
    } else if (icon === 'linkedIn') {
      this.linkedInIconSrc = isHovered ? './assets/linkedIn white.png' : './assets/linkedIn dark.png';
    }
  }
}
