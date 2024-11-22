import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatsService } from '../../services/stats/stats.service';
import { MenuButtonComponent } from '../menu-button/menu-button.component';


@Component({
  selector: 'app-goldfarm',
  standalone: true,
  imports: [MenuButtonComponent, HttpClientModule],
  templateUrl: './goldfarm.component.html',
  styleUrl: './goldfarm.component.scss',
  providers: [StatsService],
})
export class GoldfarmComponent implements OnInit {
  gold: number = 0
  amountOfClicks: number = 0;

  constructor(private statsService: StatsService) {

  }

  ngOnInit(): void {
    this.statsService.getStats().subscribe(data => {
      this.gold = data.gold;
      this.amountOfClicks = data.clicks;
    });
  }

  public clicked() {
    this.gold += 1;
    this.amountOfClicks += 1;
  }

  public save() {
    const data = {
      gold: this.gold,
      clicks: this.amountOfClicks
    };

    this.statsService.updateStats(data).subscribe(
      response => {
        console.log("Stats updated successfully", response);
      },
      error => {
        console.error("Error updating stats", error);
      }
    );
  }
}
