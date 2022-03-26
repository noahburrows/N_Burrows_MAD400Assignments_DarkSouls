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

  constructor(private http: HttpClient) { }

  //Async version, better for retrieving data
  getContentObs(): Observable<Content[]> {
    return this.http.get<Content[]>("api/content");
  }

  //Get a single card based on id
  getSingleContent(id: number): Observable<Content> {
    //this.messageService.add('Retrieving game at id: '+id);
    return of(CONTENT[id])
  }

  addContent(newContentItem: Content): Observable<Content> {
    return this.http.post<Content>("api/content", newContentItem, this.httpOptions);
  }

  updateContent(contentItem: Content): Observable<any> {
    return this.http.put("api/content", contentItem, this.httpOptions);
  }
}
