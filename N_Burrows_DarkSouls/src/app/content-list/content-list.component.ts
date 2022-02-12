import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList: Content[];

  constructor() {
    this.contentList = [{ id: 1, title: "First one", description: "This is the first Dark Souls", creator: "From Software" },
        { id: 2, title: "Second one", description: "The black sheep of the series", creator: "From Software" },
        { id: 3, title: "Third one", description: "The grand finale", creator: "From Software" },
        { id: 4, title: "Remastered one", description: "This is the first Dark Souls, but remastered", creator: "From Software" },
        { id: 5, title: "Remixed one", description: "Dark Souls 2, but with a bunch of stuff added or moved around", creator: "From Software" },
        { id: 6, title: "Not Dark Souls one", description: "This is the original Souls game.", creator: "From Software" }
    ]
  }
    
    ngOnInit(): void {
        
    } 

}
