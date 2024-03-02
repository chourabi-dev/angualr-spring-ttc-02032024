import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [ Validators.required, Validators.minLength(3) ] )
  })

  success:string='';
  error:string='';
  


  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  save(){

    const category = {
      name: this.form.value.name
    }

    this.api.addCategory(category).toPromise().then((res:any)=>{
      if (res.success == true) {
        this.success = res.message;

        this.form.reset();

        setTimeout(() => {
          // redirt ?
          this.router.navigateByUrl('/categories');
        }, 3000);

      }else{
        this.error = res.message;
      }
    }).catch((err)=>{
      this.error='Something went wrong, please try again.';
    })
  }

}
