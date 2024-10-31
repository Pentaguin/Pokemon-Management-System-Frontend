import { Component } from '@angular/core';
import { MenuButtonComponent } from '../components/menu-button/menu-button.component';

@Component({
  selector: 'app-goldfarm',
  standalone: true,
  imports: [MenuButtonComponent],
  templateUrl: './goldfarm.component.html',
  styleUrl: './goldfarm.component.scss'
})
export class GoldfarmComponent {
  gold: number = 0
  amountOfClicks: number = 0;
  public clicked() {
    console.log("clicked")
    this.gold += 1;
    this.amountOfClicks += 1;
  }

  public save() {

  }
}
