import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContentLayoutComponent } from 'app/layouts/content-layout/content-layout.component';
import { FooterLayoutComponent } from 'app/layouts/footer-layout/footer-layout.component';
import { MenuLayoutComponent } from 'app/layouts/menu-layout/menu-layout.component';
import { HeaderLayoutComponent } from 'app/layouts/header-layout/header-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderLayoutComponent,
    ContentLayoutComponent,
    FooterLayoutComponent,
    MenuLayoutComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  darkMode = false;
  currentTheme: 'light' | 'dark' = 'light';
  isCollapsed = false;

  ngOnInit(): void {
    const darkModeString = localStorage.getItem('darkMode');
    this.darkMode = darkModeString ? JSON.parse(darkModeString) : false;

    this.currentTheme =
      (localStorage.getItem('theme') as 'light' | 'dark') || 'light';

    this.applyTheme(this.currentTheme);
  }

  toggleTheme(modo: boolean): void {
    this.darkMode = modo;
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';

    this.applyTheme(this.currentTheme);

    localStorage.setItem('darkMode', JSON.stringify(modo));
    localStorage.setItem('theme', this.currentTheme);
  }

  applyTheme(theme: 'light' | 'dark'): void {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  syncCollapsed(collapsed: boolean): void {
    this.isCollapsed = collapsed;
  }
}
