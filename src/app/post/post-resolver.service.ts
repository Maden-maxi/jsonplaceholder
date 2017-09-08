import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {JsonPlaceholderService} from '../core/json-placeholder.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostResolverService implements Resolve<any> {

  constructor(
    private jsonP: JsonPlaceholderService,
    private router: Router
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    return this.jsonP.getPost(id).map(
      (res) => {
        if (res) {
          return this.jsonP.getComments(id).map(comments => {
            res.comments = comments;
            return res;
          });
        } else {
          window.history.back();
          return null;
        }
      }
    );
  }
}
