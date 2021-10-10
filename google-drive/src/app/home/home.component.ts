import { Component, OnInit } from '@angular/core';
import { DriveFile } from '../models/driveFile';
import { GoogleDriveService } from 'src/app/models/googleDriveService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public files: DriveFile[] = [];

  public selectedFiles: DriveFile[] = [];

  constructor(private service: GoogleDriveService) { }

  ngOnInit(): void {
    this.service.getFiles().subscribe(x => {
      this.files = x;
    })
  }

  public addComment() {
    console.log('Comment on', this.selectedFiles.map(f => f.fileName));
  }

  public delete() {
    console.log('Delete', this.selectedFiles.map(f => f.fileName));
  }
}
