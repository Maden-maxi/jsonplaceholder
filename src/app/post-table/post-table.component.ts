import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MdDialog, MdDialogConfig, MdPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

import { JsonPlaceholderService } from '../core/json-placeholder.service';
import { JsonPlaceholderPost } from '../core/models/json-placeholder-post';
import {PostDialogComponent} from '../post-info/post-dialog/post-dialog.component';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss']
})
export class PostTableComponent implements OnInit, OnDestroy {
  posts;
  displayedColumns = ['ID', 'Title', 'Comments', 'Author'];
  dataSource;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  constructor(
    private router: Router,
    public jsonP: JsonPlaceholderService,
    private dialog: MdDialog,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('JSON Placeholder');
    this.posts = this.jsonP.getPosts().subscribe(
      res => {
        this.dataSource = new PostDataSource(this.jsonP, this.paginator);
        return res;
      },
      err => {
        console.log(err);
      }
    );
  }
  openDialog(id, view) {
    const config: MdDialogConfig = {
      data: {id, view}
    };
    if (view === 'author') {
      this.jsonP.getAuthor(id).subscribe(res => {
        config.data.data = res;
        this.dialog.open(PostDialogComponent, config);
      });
    } else if (view === 'comments') {
      this.jsonP.getComments(id).subscribe(res => {
        config.data.data = res;
        this.dialog.open(PostDialogComponent, config);
      });
    }
  }
  ngOnDestroy() {
    this.posts.unsubscribe();
  }
  goToPost(id, userId) {
    this.router.navigate(['post', id, {userId}]);
  }
}

export class PostDataSource extends DataSource<any> {
  constructor(private db: JsonPlaceholderService, private _paginator: MdPaginator) {
    super();
  }
  connect(): Observable<JsonPlaceholderPost[]> {
    const displayDataChanges = [
      this.db.dataChange,
      this._paginator.page
    ];
    return Observable.merge(...displayDataChanges).map( () => {
      const data = this.db.data.slice();
      // Grab the page's slice of data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }
  disconnect() {}
}
