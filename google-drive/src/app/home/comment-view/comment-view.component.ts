import { Component, Input, OnInit } from '@angular/core';
import { CommentData } from 'src/app/models/comment';

@Component({
  selector: 'app-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.css']
})
export class CommentViewComponent implements OnInit {

  @Input() comments: CommentData[] = [];
  @Input() selectedFileName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  getCommentClass(comment: CommentData): string {
    if (this.comments.indexOf(comment) % 2 === 0) {
      return 'stripe';
    }
    return '';
  }
}
