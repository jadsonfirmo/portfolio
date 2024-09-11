import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-layout.component.html',
  styleUrl: './menu-layout.component.scss',
})
export class MenuLayoutComponent {
  @Input() collapsed = false;
  menu = [
    {
      name: 'Home',
      icon: 'fa-home',
      route: '/home',
    },
    {
      name: 'Experiências',
      icon: 'fa-briefcase',
      route: '/experiences',
    },
    {
      name: 'Sobre mim',
      icon: 'fa-user',
      route: '/about-me',
    },
  ];
}
