import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.scss']
})
export class PostDialogComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<PostDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }

  ngOnInit() {

  }

}
