import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {JsonPlaceholderService} from '../core/json-placeholder.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/observable/zip';
import 'rxjs/add/operator/combineLatest';


@Injectable()
export class PostResolverService implements Resolve<any> {

  constructor(
    private jsonP: JsonPlaceholderService,
    private router: Router
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    const postData = this.jsonP.getPost(id).map(
      (post) => {
        if (post) {
          return post;
        } else {
          window.history.back();
          return null;
        }
      }
    );
    const postComments = this.jsonP.getComments(id).map(comments => {
      if (comments) {
        return comments;
      } else {
        window.history.back();
        return null;
      }
    });
    const data = postData.combineLatest(postComments, (post, comments) => {
      post.comments = comments;
      return post;
    });
    return data;
  }
}
