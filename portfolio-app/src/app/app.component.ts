import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentLayoutComponent } from 'app/layouts/content-layout/content-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-app';
}
