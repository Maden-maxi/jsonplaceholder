import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
  post;
  subscriber;
  dataSubscriber;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }
  ngOnInit() {
    this.subscriber = this.route.data.subscribe((data) => {
      this.title.setTitle(data.post.title);
      this.post = data.post;
      console.log(data);
    } );
  }
  back(): void {
    this.router.navigate(['/']);
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
