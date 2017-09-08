import {Component, OnDestroy, OnInit} from '@angular/core';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.scss']
})
export class PostInfoComponent implements OnInit, OnDestroy {
  dialogRef;
  constructor(
    private dialog: MdDialog,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }
  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      const dialogConfig: MdDialogConfig = {
        data: {
          data: {data}
        }
      };
      const dialog = this.dialog.open(PostDialogComponent, dialogConfig);
      this.dialogRef = dialog.afterClosed().subscribe(() => {
        window.history.back();
      });
    });
  }
  ngOnDestroy() {
    this.dialogRef.unsubscribe();
  }

}
