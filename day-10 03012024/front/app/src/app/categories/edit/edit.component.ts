import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 
  form = new FormGroup({
    name: new FormControl('', [ Validators.required, Validators.minLength(3) ] )
  })

  success:string='';
  error:string='';

  id:string = '';
  


  constructor(private api:ApiService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.initForm();
  }

  initForm(){
    this.api.getCategoriesList().toPromise().then((res:any)=>{

      res.map((c:any)=>{
        if (c.id == this.id) {
          this.form.setValue({
            name: c.name
          })
        }
      })

    })
  }

  save(){

    const category = {
      name: this.form.value.name
    }

    this.api.updateCategory(category,this.id).toPromise().then((res:any)=>{
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
