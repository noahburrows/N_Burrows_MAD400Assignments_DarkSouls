import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?: number;
  individualContent?: Content;
  constructor(private route: ActivatedRoute, private gameService: GameService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (!params.get('id')) {
        console.error("ID was not set!");
      }
      this.id = Number(params.get('id') ?? "0"); // uses the + unary operator
      this.gameService.getSingleContent(this.id-1).subscribe((singleContent) => {
        this.individualContent = singleContent;
      });
    });
  }

}
