import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-bool-dialog',
  templateUrl: './bool-dialog.component.html',
  styleUrls: ['./bool-dialog.component.scss']
})
export class BoolDialogComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<BoolDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
