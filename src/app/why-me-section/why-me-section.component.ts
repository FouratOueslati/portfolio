import { Component } from '@angular/core';
import { ProjectDetailComponent } from "../project-detail/project-detail.component";

interface Project {
  duration: string;
  about: string;
  how: string;
  group: string;
  pic: string;
  skillsIcons: string[];
}

@Component({
  selector: 'app-why-me-section',
  standalone: true,
  templateUrl: './why-me-section.component.html',
  styleUrl: './why-me-section.component.scss',
  imports: [ProjectDetailComponent]
})
export class WhyMeSectionComponent {
  selectedProject: Project | null = null;

  projects: { [key: string]: Project } = {
    'Ongoing project': {
      duration: 'Ongoing',
      about: 'A project currently in development.',
      how: 'Using Agile methodology.',
      group: 'Team collaboration is improving.',
      pic: './assets/coming soon.png',
      skillsIcons: ['./assets/ts without text.png', './assets/html without text.png']
    },
    'El Pollo Loco': {
      duration: '5 weeks',
      about: 'It is about a Mexican who fights chickens.',
      how: 'Organized with proper planning.',
      group: 'Work was well-coordinated.',
      pic: './assets/coming soon.png',
      skillsIcons: ['./assets/ts without text.png', './assets/css without text.png']
    },
    'Join': {
      duration: '8 weeks',
      about: 'A task management tool inspired by Trello.',
      how: 'Divided into multiple sprints.',
      group: 'Worked well in a team environment.',
      pic: './assets/coming soon.png',
      skillsIcons: ['./assets/ts without text.png']
    },
    'Ongoing': {
      duration: 'Ongoing',
      about: 'A project currently in development.',
      how: 'Using Agile methodology.',
      group: 'Team collaboration is improving.',
      pic: './assets/coming soon.png',
      skillsIcons: ['./assets/ts without text.png']
    }
  };
  ngOnInit(): void {
    this.selectProject('Join');
  }

  selectProject(projectName: string) {
    this.selectedProject = this.projects[projectName] || null;
  }
}

