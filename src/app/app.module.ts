import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonPlaceholderInterceptorService } from './core/json-placeholder-interceptor.service';
/* Core module */
import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostTableComponent } from './post-table/post-table.component';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostInfoComponent } from './post-info/post-info.component';
import { PostDialogComponent } from './post-info/post-dialog/post-dialog.component';
import { AlertSnackbarComponent } from './post-create/alert-snackbar/alert-snackbar.component';
import { BoolDialogComponent } from './post-create/bool-dialog/bool-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PostTableComponent,
    PostComponent,
    PostCreateComponent,
    PostInfoComponent,
    PostDialogComponent,
    AlertSnackbarComponent,
    BoolDialogComponent
  ],
  entryComponents: [
    PostDialogComponent,
    AlertSnackbarComponent,
    BoolDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonPlaceholderInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
