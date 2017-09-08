import { Component, Inject } from '@angular/core';
import { MD_SNACK_BAR_DATA, MdSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-alert-snackbar',
  templateUrl: './alert-snackbar.component.html',
  styleUrls: ['./alert-snackbar.component.scss']
})
export class AlertSnackbarComponent {
  constructor(@Inject(MD_SNACK_BAR_DATA) public data: any, public snackBarRef: MdSnackBarRef<AlertSnackbarComponent>) { }
}
