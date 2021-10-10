import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'src/assets';

@Injectable({
    providedIn: 'root'
})

export class GoogleDriveService {
    
    constructor(private http: HttpClient) {}

    getFiles(): Observable<any> {
        console.log('GET  /files');
        return this.http.get('assets/files.json');
    }
}
