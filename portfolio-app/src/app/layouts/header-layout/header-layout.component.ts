import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [],
  templateUrl: './header-layout.component.html',
  styles: [],
})
export class HeaderLayoutComponent {
  @Output() toggleMenu = new EventEmitter<void>();
}
