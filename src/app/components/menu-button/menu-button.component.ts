import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {
  dropdownOpen = false;

  constructor(private router: Router) { }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  navigateTo(page: string) {
    console.log(`Clicked on ${page}`);
    if (page == "map") {
      this.router.navigate(['']);
    }
    else if (page == "party") {
      this.router.navigate([`/${page}`]);
    }
    else if (page == "goldfarm") {
      this.router.navigate([`/${page}`]);
    }
  }
}
