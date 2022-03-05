import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newContent?: Content;

  constructor() { }

  ngOnInit(): void {
  }

  addContent(id: string, title: string, description: string, creator: string, imageUrl: string,  tags: string): void {
    this.newContent = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imageUrl,
      tags: tags.split(",")
    };
    this.newContentEvent.emit(this.newContent);
  }

}
