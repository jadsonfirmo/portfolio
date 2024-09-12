import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [],
  templateUrl: './header-layout.component.html',
  styles: [],
})
export class HeaderLayoutComponent {
  @Output() toggleMenu = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<boolean>();
  @Input() darkMode: boolean;

  changeTheme(): void {
    this.darkMode = !this.darkMode;
    this.toggleTheme.emit(this.darkMode);
  }
}
