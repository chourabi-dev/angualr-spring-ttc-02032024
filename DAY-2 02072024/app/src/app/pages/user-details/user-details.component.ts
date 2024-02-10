import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Tools from 'src/app/tools';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id:any= "--";


 // CREATION D'INSTANCE !!!
 // tools:Tools = new Tools();
 

  // INJECTION DE SERVICE !!!! 
  constructor( private route:ActivatedRoute ) { }

  // 
  ngOnInit(): void {
    console.log("user details page is called !!!");

    console.log(this.route);
    this.id = this.route.snapshot.params['id']
    
        
    
  }



  getDataFromServer(){
    // API + ID
  }
}
