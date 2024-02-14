import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-exmpl-observable',
  templateUrl: './exmpl-observable.component.html',
  styleUrls: ['./exmpl-observable.component.css']
})
export class ExmplObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {




  }


  startWatch(){
    this.watchMyCurrentPostion().subscribe( (data)=>{
      console.log(data);
      
    }  , (err)=>{
      console.log(err);
      
    }  )
  }


  watchMyCurrentPostion(){
    let obersvable = new Observable((watcher)=>{

      navigator.geolocation.watchPosition((position)=>{
        watcher.next(position);
      },(errr)=>{
        watcher.error(errr);
      })

    })

    return obersvable;
  }

}
