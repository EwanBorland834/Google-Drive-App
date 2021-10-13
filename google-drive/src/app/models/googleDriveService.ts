import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of,  } from 'rxjs';
import { CommentData } from './comment';
import { DriveFile } from './driveFile';

const baseURL = 'assets/';

@Injectable({
    providedIn: 'root'
})

export class GoogleDriveService {

    private comments: CommentData[] = [
        { filename: 'File 1', body: 'Lorem ipsum dolor sit amet' },
        { filename: 'File 1', body: 'Consectetur adipiscing elit, sed do' },
        { filename: 'File 1', body: 'Eiusmod tempor incididunt ut labore' },
        { filename: 'File 1', body: 'Aliquam quaerat voluptatem' },
        { filename: 'File 2', body: 'Ut enim ad minima veniam' },
        { filename: 'File 2', body: 'Cupidatat non proident, sunt in culpa qui officia' }
    ];
    
    constructor(private http: HttpClient) {}

    getFiles(): Observable<any> {
        return this.http.get(baseURL + 'files.json');
    }

    addComment(comment: CommentData): Observable<any> {
        this.comments.push(comment);
        return of('comment added');
    }

    deleteFile(_file: DriveFile): Observable<any> {
        return of('file deleted');
    }

    getComments(fileName: string) {
        return of(this.comments.filter(c => c.filename === fileName));
    }
}
