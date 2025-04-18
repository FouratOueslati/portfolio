import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SectionsBarComponent } from "./sections-bar/sections-bar.component";
import { PersonalPicSectionComponent } from "./personal-pic-section/personal-pic-section.component";
import { WhyMeSectionComponent } from './why-me-section/why-me-section.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SectionsBarComponent, PersonalPicSectionComponent, WhyMeSectionComponent, ProjectDetailComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
