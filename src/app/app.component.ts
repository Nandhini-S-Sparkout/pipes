import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,TimeInterval, from, interval, map, take, timeInterval } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  day=new Date();
  num =23.456;
  num1=0.056;
  currency=23.45;

  obj={name:'Gopinath',age:26};
  arr=[1,2,3,4];

   jsonData=this.http.get(
  'https://jsonplaceholder.typicode.com/todos/1'
);
  date$=interval(1000).pipe(
    map(x=>new Date()),
take(10))

//promise
// jsonData=new Promise((resolve,reject)=>{
// this.http.get(
//   'https://jsonplaceholder.typicode.com/todos/1')
//   .subscribe(x=>resolve(x));
// });


//observable
// jsonData=new Observable(subscriber=>{
//   this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(x=>subscriber.next(x))

// });


name='angular';
   constructor(public http: HttpClient)
   {

   }

 
}
