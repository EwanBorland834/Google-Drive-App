import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentData } from './comment';

const baseURL = 'assets/';

@Injectable({
    providedIn: 'root'
})

export class GoogleDriveService {
    
    constructor(private http: HttpClient) {}

    getFiles(): Observable<any> {
        console.log('GET  /files');
        return this.http.get(baseURL + 'files.json');
    }

    addComment(comment: CommentData): Observable<any> {
        return this.http.post<CommentData>(baseURL + 'comments.json', comment);
    }
}
