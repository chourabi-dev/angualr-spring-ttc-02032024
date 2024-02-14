import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exmpl-promise',
  templateUrl: './exmpl-promise.component.html',
  styleUrls: ['./exmpl-promise.component.css']
})
export class ExmplPromiseComponent implements OnInit {

  camera:any= null;

  constructor() { }

  ngOnInit(): void {
    this.initPhotoShoot();
  }



  // use the promise !!!

  // 100% promise will always give us success !!!
  /*async initPhotoShoot(){
    let camera =  await  this.getCamera();

    console.log(camera);

    this.camera = camera;
    
  }*/


  initPhotoShoot(){

    this.getCamera().then( (camera)=>{
      console.log(camera);
      
    }).catch( (err)=>{
        console.log(err);
        
    });

  }







  // CREATE PROMISE !!

  getCamera(){
    let promise  = new Promise(  (  success,failure  )=>{

      // code...
      
      /**
       * setTimeout(() => {
        const camera = { camera:'ok' }

        success( camera );

      }, 3000);
       */

      /***
       * if camera == null
       */

      setTimeout(() => {
        const camera = { camera:'ok' }

        failure( { code:0, message:"camera not available" })

      }, 3000);
      


    })



    return promise;
  }

}
