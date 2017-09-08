import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdTableModule,
  MdDialogModule,
  MdSnackBarModule,
  MdButtonModule,
  MdChipsModule,
  MdIconModule,
  MdPaginatorModule,
  MdSortModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdCardModule,
  MdListModule,
  MdInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdTableModule,
    MdDialogModule,
    MdSnackBarModule,
    MdButtonModule,
    MdChipsModule,
    MdIconModule,
    MdPaginatorModule,
    MdSortModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdCardModule,
    MdListModule,
    MdInputModule
  ],
  exports: [
    MdToolbarModule,
    MdTableModule,
    MdDialogModule,
    MdSnackBarModule,
    MdButtonModule,
    MdChipsModule,
    MdIconModule,
    MdPaginatorModule,
    MdSortModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdCardModule,
    MdListModule,
    MdInputModule
  ]
})
export class MaterialComponentsModule { }
