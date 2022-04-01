import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessagesComponent } from '../messages/messages.component';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {

  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newContent?: Content;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    console.log("dialog opened");
    //this.dialog.open(MessagesComponent);
    const dialogRef = this.dialog.open(ModifyContentComponentComponent, {
      width: '250px',
      data: { content: this.newContent },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.addContent(this.title, this.description, this.creator, this.imageURL, this.type, this.tags)
    });
  }

  ngOnInit(): void {
  }

  addContent(title: string, description: string, creator: string, imageUrl: string, type: string, tags: string): void {
    this.newContent = {
      title: title,
      description: description,
      creator: creator,
      imgURL: imageUrl,
      type: type,
      tags: tags.split(",")
    };
    this.newContentEvent.emit(this.newContent);
  }

}
