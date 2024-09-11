import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
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
  @Output() syncCollapsed = new EventEmitter<boolean>();

  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (
      window.innerWidth <= 768 &&
      !this.eRef.nativeElement.contains(event.target) &&
      this.collapsed
    ) {
      this.updateCollapse(false);
    }
  }

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

  updateCollapse(collapsed: boolean): void {
    this.syncCollapsed.emit(collapsed);
  }
}
