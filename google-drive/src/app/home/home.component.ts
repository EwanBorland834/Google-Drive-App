import { Component, OnInit } from '@angular/core';
import { DriveFile } from '../models/driveFile';
import { GoogleDriveService } from 'src/app/models/googleDriveService';
import { MatDialog } from '@angular/material/dialog';
import { AddCommentComponent } from './add-comment/add-comment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public files: DriveFile[] = [];

  public selectedFiles: DriveFile[] = [];

  constructor(public dialog: MatDialog, private service: GoogleDriveService) { }

  ngOnInit(): void {
    this.service.getFiles().subscribe(x => {
      this.files = x;
    })
  }

  public addComment() {
    console.log('Comment on', this.selectedFiles.map(f => f.fileName));

    const dialogRef = this.dialog.open(AddCommentComponent, {
      width: '500px',
      data: { filename: this.selectedFiles[0].fileName }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Comment dialog closed');
      console.log('POST  /files/fileId/comments fields:', result);

    });
  }

  public delete() {
    console.log('Delete', this.selectedFiles.map(f => f.fileName));
  }
}
