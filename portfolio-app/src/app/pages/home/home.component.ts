import { Component } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

declare var bootstrap: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TooltipModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tech = [
    {
      icon: 'fa-angular',
      name: 'Angular',
    },
    {
      icon: 'fa-vuejs',
      name: 'Vue.js',
    },
    {
      icon: 'fa-html5',
      name: 'HTML5',
    },
    {
      icon: 'fa-square-js',
      name: 'JavaScript',
    },
    {
      icon: 'fa-css3-alt',
      name: 'CSS3',
    },
    {
      icon: 'fa-sass',
      name: 'Sass',
    },
    {
      icon: 'fa-bootstrap',
      name: 'Bootstrap',
    },
    {
      icon: 'fa-node',
      name: 'Node.js',
    },
    {
      icon: 'fa-laravel',
      name: 'Laravel',
    },
    {
      icon: 'fa-php',
      name: 'PHP',
    },
    {
      icon: 'fa-git-alt',
      name: 'Git',
    },
    {
      icon: 'fa-github',
      name: 'GitHub',
    },
    {
      icon: 'fa-bitbucket',
      name: 'Bitbucket',
    },
    {
      icon: 'fa-gitlab',
      name: 'GitLab',
    },
    {
      icon: 'fa-sourcetree',
      name: 'Sourcetree',
    },
    {
      icon: 'fa-jira',
      name: 'Jira',
    },
    {
      icon: 'fa-jenkins',
      name: 'Jenkins',
    },
  ];
}
