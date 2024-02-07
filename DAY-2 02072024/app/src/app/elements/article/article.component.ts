import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() title?:string;
  @Input() content?:string;
  @Input() likes:number = 0;

  userLike:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  like(){
    if (this.userLike == false) {
      this.likes++;
    } else {
      this.likes--;
    }

    this.userLike = ! this.userLike;
  }

}
