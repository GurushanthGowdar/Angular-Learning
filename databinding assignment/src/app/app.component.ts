import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username=''
  clickable=false
  // getLength(){
  //   console.log(this.username.length)
  // }
  checkInputLemgth(){
    if(this.username.trim().length!=0){
          this.clickable=true
    }else{
      this.clickable=false
    }
  }

  resetUsername(){
    // console.log(this.username)
    this.username=''
    // console.log(this.username)
  }

}
