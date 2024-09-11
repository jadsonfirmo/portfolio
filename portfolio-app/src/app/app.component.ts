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
  isCollapsed = false;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
