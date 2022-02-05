import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  constructor() {

    let stuffList: ContentList;

    stuffList = new ContentList();

    let ds1: Content = { id: 1, title: "First one", description: "This is the first Dark Souls", creator: "From Software" };
    let ds2: Content = { id: 2, title: "Second one", description: "The black sheep of the series", creator: "From Software" };
    let ds3: Content = { id: 3, title: "Third one", description: "The grand finale", creator: "From Software" };

    stuffList.addContent(ds1)
    stuffList.addContent(ds2)
    stuffList.addContent(ds3)

    //console.log(stuffList.processContent(0));

  }

  ngOnInit(): void {
  }

}
