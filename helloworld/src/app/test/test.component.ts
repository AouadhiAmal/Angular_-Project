import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title!:String;
  test!:boolean;
  name="Ali";
  name2="World"
  test1: any;
  Status="activee";
  date=new Date();
  getStatus(){
    return this.Status;
    
  }
  nameliste=['ali','ahmed','imen']
  condition=true
  msg:any;
  save() {
    console.log("Hello groupe 3");
  }

}
