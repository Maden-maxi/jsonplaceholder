import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import { PostTableComponent } from './post-table/post-table.component';
import { PostComponent } from './post/post.component';
import { PostCreateComponent } from './post-create/post-create.component';
import {PostResolverService} from './post/post-resolver.service';
import {PostInfoComponent} from './post-info/post-info.component';
import {PostInfoResolverService} from './post-info/post-info-resolver.service';
import {CanDeactivateGuard} from './can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PostTableComponent
      },
      {
        path: 'post/:id/comments',
        component: PostInfoComponent,
        resolve: {
          data: PostInfoResolverService
        }
      }
    ]
  },
  {
    path: 'post/create',
    pathMatch: 'full',
    component: PostCreateComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'post/:id',
    component: PostComponent,
    resolve: {
      post: PostResolverService
    }
  }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: [
    PostResolverService,
    PostInfoResolverService,
    CanDeactivateGuard
  ]
})
export class AppRoutingModule { }
