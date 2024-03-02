import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  loading:boolean = false;
  errorMessage:string='';

  users:Person[] = [];


  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.intiDATA();
  }


  intiDATA(){
    this.loading = true;

    this.api.getUsersFromServer().toPromise().then(
      (data:any)=>{
        this.users = data; 
        
        console.log(this.users); 

      }
    ).catch(
      (err)=>{
        console.log(err);
        
        this.errorMessage = 'Something went wrong, please try again.'
      }
    ).finally(()=>{
      this.loading = false;
    });
  }

}
