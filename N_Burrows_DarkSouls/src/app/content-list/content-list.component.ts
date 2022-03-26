import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  contentList: Content[];
  titleFound?: boolean;
  singleCard: Content | undefined;

  constructor(private gameService: GameService) {
    this.contentList = [];
  }
    
    ngOnInit(): void {
      this.gameService.getContentObs().subscribe(gamearray => {
        this.contentList = gamearray;
      });

      this.gameService.getSingleContent(1).subscribe(game => {
        this.singleCard = game;
      });
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

  getContentFromServer(): void {
    this.gameService.getContentObs().subscribe(contentarray => {
      console.log("Got the content from the server: ", contentarray);
      this.contentList = contentarray;
    });
  }

  addContentToList(newContentItem: Content): void {
    this.gameService.addContent(newContentItem).subscribe(newContentFromServer => {
      this.getContentFromServer();
    });
  }
}
