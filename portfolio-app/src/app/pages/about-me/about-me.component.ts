import { Component } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [SkeletonModule, ImageModule],
  templateUrl: './about-me.component.html',
  styles: [],
})
export class AboutMeComponent {
  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }
}
