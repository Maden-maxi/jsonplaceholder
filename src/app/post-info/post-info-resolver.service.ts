import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {JsonPlaceholderService} from '../core/json-placeholder.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostInfoResolverService implements Resolve<any> {

  constructor(
    private jsonP: JsonPlaceholderService,
    private router: Router
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    console.log(state);
    if (state.url.includes('comments')) {
      return this.jsonP.getComments(id).map(
        res => {
          console.log(res);
          return res;
        },
        error => {
          console.log(error);
          return null;
        }
      );
    } else if (state.url.includes('author') ) {
      return this.jsonP.getAuthor(id).map(
        res => {
          console.log(res);
          return res;
        },
        error => {
          console.log(error);
          return null;
        }
      );
    } else {
      return null;
    }
  }
}
