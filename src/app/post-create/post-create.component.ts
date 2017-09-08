import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MdDialog, MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { JsonPlaceholderService } from '../core/json-placeholder.service';
import { AlertSnackbarComponent } from './alert-snackbar/alert-snackbar.component';
import { BoolDialogComponent } from './bool-dialog/bool-dialog.component';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  post: any = {
    userId: 1,
    title: '',
    body: ''
  };
  loading = false;
  dialogResponse;
  @ViewChild('createPost') createPost: NgForm;
  constructor(
    private jsonP: JsonPlaceholderService,
    private route: ActivatedRoute,
    private router: Router,
    public snackbar: MdSnackBar,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }
  submit(form: NgForm) {
    this.loading = true;
    this.jsonP.createPost(form.value).subscribe(
      res => {
        this.snackbar.openFromComponent(AlertSnackbarComponent, {
          data: res,
          duration: 4000
        });
        setTimeout(() => {
          this.dialogResponse = true;
          this.router.navigate(['/']);
        }, 1000);
        this.loading = false;
      },
      error => {
        console.error(error);
        this.loading = false;
      }
    );
  }
  cancel() {
    if (!this.createPost.touched && !this.createPost.submitted) {
      this.dialogResponse = true;
      this.router.navigate(['/']);
    } else if (this.createPost.submitted) {
      this.dialogResponse = true;
    } else {
      const dialog = this.dialog.open(BoolDialogComponent, {
        height: '250px'
      });
      dialog.afterClosed().subscribe(res => {
        this.dialogResponse = res;
        this.router.navigate(['/']);
      });
    }
  }
  canDeactivate(): Observable<boolean> | boolean {
    if ( (this.createPost.touched && !this.createPost.submitted) && this.dialogResponse === false ) {
      return false;
    } else {
      return this.dialogResponse;
    }
  }
}
