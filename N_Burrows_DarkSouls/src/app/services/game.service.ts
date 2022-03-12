import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private messageService: MessageService) { }

  //Bad version
  /*getContent(): Content[] {
    return CONTENT;
  }*/

  //Async version, better for retrieving data
  getContentObs(): Observable<Content[]> {
    this.messageService.add('Successfully retrieved games!');
    return of(CONTENT);
  }

  //Get a single card based on id
  getSingleContent(id: number): Observable<Content> {
    this.messageService.add('Retrieving game at id: '+id);
    return of(CONTENT[id])
  }
}
