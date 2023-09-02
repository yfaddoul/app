import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  [x: string]: any;
  users: userInfo[]=[];
  newUser:userInfo=new userInfo();
  
  
  constructor(public apiCaller: HttpClient){

  }
  ngOnInit(){
    this.apiCaller.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any)=>{
      data.forEach((e: any) => {
        let u = new userInfo();
        u.name= e['name'];
        u.username= e['username'];
        u.email= e['email'];
        this.users.push(u)
        
    

        
      });
    })
  }
  SaveUser(){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(this.newUser);
    console.log(body)
     this.apiCaller.post('http://localhost:3000/people', body,{'headers':headers}).subscribe(()=>{
     console.log('mabruk')
  })
    
  }
}
  class userInfo {
    name:String='';
    username:String='';
    email:String='';
      
    }
  


