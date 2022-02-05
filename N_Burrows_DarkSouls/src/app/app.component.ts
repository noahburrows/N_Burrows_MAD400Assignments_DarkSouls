import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'N_Burrows_DarkSouls';

  contentArray: Content[] = [];

  constructor() {
    this.contentArray.push({ id: 1, title: "First one", description: "This is the first Dark Souls", creator: "From Software" });
    this.contentArray.push({ id: 2, title: "Second one", description: "The black sheep of the series", creator: "From Software" });
    this.contentArray.push({ id: 3, title: "Third one", description: "The grand finale", creator: "From Software" });
    this.contentArray.push({ id: 4, title: "Remastered one", description: "This is the first Dark Souls, but remastered", creator: "From Software" });
    this.contentArray.push({ id: 5, title: "Remixed one", description: "Dark Souls 2, but with a bunch of stuff added or moved around", creator: "From Software" });
    this.contentArray.push({ id: 6, title: "Not Dark Souls one", description: "This is the original Souls game.", creator: "From Software" });
  }

  ngOnInit(): void {


  }
}
