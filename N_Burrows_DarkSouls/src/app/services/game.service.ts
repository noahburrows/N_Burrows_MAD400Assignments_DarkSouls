import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { CONTENT } from '../helper-files/contentDb';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };

  constructor(private messageService: MessageService, private http: HttpClient) { }

  //Async version, better for retrieving data
  getContentObs(): Observable<Content[]> {
    return this.http.get<Content[]>("api/content");
  }

  //Get a single card based on id
  getSingleContent(id: number): Observable<Content> {
    this.messageService.add('Retrieving game at id: '+id);
    return of(CONTENT[id])
  }

  addContent(newContentItem: Content): Observable<Content> {
    this.messageService.add('Adding new content');
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }
}
