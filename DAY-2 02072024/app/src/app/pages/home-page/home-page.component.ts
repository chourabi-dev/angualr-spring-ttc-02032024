import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  
  articles:any[] = [
    { likes:50, title:'Angular Apps', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nisi vitae velit, corporis, earum aliquam dolorum necessitatibus doloremque tenetur cum totam voluptate quos fugiat! Ab voluptatibus cum ratione distinctio? Repellat.' },
    { likes:30, title:'Spring boot', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nisi vitae velit, corporis, earum aliquam dolorum necessitatibus doloremque tenetur cum totam voluptate quos fugiat! Ab voluptatibus cum ratione distinctio? Repellat.' },
    { likes:16, title:'VUE JS VS FLUTTER', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nisi vitae velit, corporis, earum aliquam dolorum necessitatibus doloremque tenetur cum totam voluptate quos fugiat! Ab voluptatibus cum ratione distinctio? Repellat.' },
    { likes:19, title:'FULLSTACK JS', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nisi vitae velit, corporis, earum aliquam dolorum necessitatibus doloremque tenetur cum totam voluptate quos fugiat! Ab voluptatibus cum ratione distinctio? Repellat.' },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
