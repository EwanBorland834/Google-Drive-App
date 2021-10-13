import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CommentData } from 'src/app/models/comment';
import { GoogleDriveService } from 'src/app/models/googleDriveService';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCommentComponent>,
    private service: GoogleDriveService,
    @Inject(MAT_DIALOG_DATA) public data: CommentData) { }

  ngOnInit(): void {}

  onSave(): void {
    this.service.addComment(this.data).subscribe(_x => {
      // console.log(x);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
