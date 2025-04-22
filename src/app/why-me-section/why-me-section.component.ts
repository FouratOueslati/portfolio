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

    'Ongoing': {
      duration: 'Ongoing',
      about: 'A project currently in development.',
      how: 'Using Agile methodology.',
      group: 'Team collaboration is improving.',
      pic: './assets/coming soon.png',
      skillsIcons: ['./assets/ts without text.png']
    },
    'Ongoing project': {
      duration: 'Ongoing',
      about: 'A project currently in development.',
      how: 'Using Agile methodology.',
      group: 'Team collaboration is improving.',
      pic: './assets/coming soon.png',
      skillsIcons: ['./assets/ts without text.png', './assets/html without text.png']
    },
    'El Pollo Loco': {
      duration: '6 weeks',
      about: 'It is about a Mexican who fights chicken.',
      how: 'Organized with proper planning. I have added all the elements needed step by step and have made sure that every element works preperly through multiple tests.',
      group: 'I have learned a lot about applying gravity and collision logic and how to properly implement it in a project.',
      pic: './assets/coming soon.png',
      skillsIcons: ['./assets/html without text.png','./assets/Javascript without text.png', './assets/css without text.png']
    },
    'Join': {
      duration: '8 weeks',
      about: 'A task management tool inspired by Trello.',
      how: 'Divided into multiple sprints. Every aspect of the project was carefully revised.',
      group: 'Worked well in a team environment. Communication was the key, we had to make sure that every individual knows what his tasks are and a lot of questions were asked, which led to a succes.',
      pic: './assets/coming soon.png',
      skillsIcons: ['./assets/ts without text.png']
    },
  };
  ngOnInit(): void {
    this.selectProject('Join');
  }

  selectProject(projectName: string) {
    this.selectedProject = this.projects[projectName] || null;
  }
}

