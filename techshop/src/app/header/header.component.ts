import { AfterViewInit, Component } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faShoppingCart, faUser, faMobile, faLaptop, faTablet, 
  faHeadphones, faCamera, faGamepad, faHome, faPlug, faHdd, 
  faTv, faNetworkWired, faPrint, faMicrochip, faCompactDisc,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'bootstrap';
import { DropdownHoverDirective } from '../directives/dropdown-hover.directive';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, DropdownHoverDirective],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faShoppingCart, faUser, faMobile, faLaptop, faTablet,
      faHeadphones, faCamera, faGamepad, faHome, faPlug, faHdd,
      faTv, faNetworkWired, faPrint, faMicrochip, faCompactDisc,
      faClock
    );
  }

  ngAfterViewInit() {
    // Initialize tooltips
    Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]')).forEach(
      (element) => new Tooltip(element)
    );
  }
}
