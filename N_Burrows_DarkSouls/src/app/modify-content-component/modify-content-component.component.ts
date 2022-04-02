import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessagesComponent } from '../messages/messages.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent {

  @Output() newContentEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newContent?: Content;

  title?: string;
  description?: string;
  creator?: string;
  imgURL?: string;
  type?: string;
  tags?: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    console.log("dialog opened");
      const dialogRef = this.dialog.open(DialogWindow, {
        width: '400px',
        data: { title: this.title, description: this.description, creator: this.creator, imgURL: this.imgURL, type: this.type, tags: this.tags },
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        //this.title = result.title;
        this.addContent(result.title, result.description, result.creator, result.imageUrl, result.type, result.tags = "")
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

@Component({
  selector: 'app-modify-content-component-dialog',
  templateUrl: './modify-content-component-dialog.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class DialogWindow {

  constructor(
    public dialogRef: MatDialogRef<DialogWindow>,
    @Inject(MAT_DIALOG_DATA) public data: Content,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  types: string[] = [
    "PS3",
    "PS4",
    "PS5"
  ]
}
