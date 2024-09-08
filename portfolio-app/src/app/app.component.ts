import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContentLayoutComponent } from 'app/layouts/content-layout/content-layout.component';
import { FooterLayoutComponent } from 'app/layouts/footer-layout/footer-layout.component';
import { MenuLayoutComponent } from 'app/layouts/menu-layout/menu-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContentLayoutComponent,
    FooterLayoutComponent,
    MenuLayoutComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isMenuCollapsed = false;
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
