import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList: Content[];
  titleFound?: boolean;

  constructor() {
    this.contentList = [{ id: 1, title: "First one", description: "This is the first Dark Souls", creator: "From Software", type: "PS3" },
      { id: 2, title: "Second one", description: "The black sheep of the series", creator: "From Software", type: "PS3" },
      { id: 3, title: "Third one", description: "The grand finale", creator: "From Software", type: "PS4" },
      { id: 4, title: "Remastered one", description: "This is the first Dark Souls, but remastered", creator: "From Software", type: "PS4" },
      { id: 5, title: "Remixed one", description: "Dark Souls 2, but with a bunch of stuff added or moved around", creator: "From Software", type: "PS4" },
      { id: 6, title: "Not Dark Souls one", description: "This is the original Souls game.", creator: "From Software", type: "PS3" },
        { id: 7, title: "Not Dark Souls again", description: "This is the remake of the original", creator: "Bluepoint Games" }
    ]
  }
    
    ngOnInit(): void {
        
    } 


  checkForTitle(title: string): void {
    if (this.contentList.some(c => c.title === title)) {
      this.titleFound = true;
    }
    else {
      this.titleFound = false;
    }
    if (this.contentList.filter(c => c.title === title).length) {
      this.titleFound = true;
    }
    else {
      this.titleFound = false;
    }
  }
}
