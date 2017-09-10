import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, NavigationEnd, Resolve, Router, RouterStateSnapshot, Event as RouterEvent} from '@angular/router';
import {JsonPlaceholderService} from '../core/json-placeholder.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/concat';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/forkJoin';
import {Location} from '@angular/common';

@Injectable()
export class PostResolverService implements Resolve<any> {

  constructor(
    private jsonP: JsonPlaceholderService,
    private router: Router,
    private location: Location
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    const userId = route.paramMap.get('userId');
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        console.log(event, route.data);
        if (event.url.includes('userId')) {
          window.history.replaceState({}, '', `post/${id}`);
        }
      }
    });
    const subscribe = (post) => {
      if (post) {
        return post;
      } else {
        this.router.navigate(['/']);
        return null;
      }
    };
    const postData = this.jsonP.getPost(id).map(subscribe);
    const postComments = this.jsonP.getComments(id).map(subscribe);
    const postAuthor = this.jsonP.getAuthor(userId);
    return Observable.forkJoin(postData, postComments, postAuthor).map(res => {
      res[0].comments = res[1];
      res[0].author = res[2];
      console.log(res[0]);
      return res[0];
    });
    /*postData.concat(postComments, postAuthor).subscribe(res => console.log(res));
    const postEntiry = postData.combineLatest(postComments, (post, comments) => {
      post.comments = comments;
      return post;
    });
    return postEntiry;
    */
  }
}
