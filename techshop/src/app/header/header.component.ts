import { AfterViewInit, Component } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faShoppingCart, faUser);
  }

  ngAfterViewInit() {
    // Initialize tooltips
    Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(
      (element) => new Tooltip(element)
    );
  }
}
